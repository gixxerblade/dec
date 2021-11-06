import { Handler } from '@netlify/functions'
import { Firestore } from "@google-cloud/firestore"
import qs from 'qs'

interface TrailData {
  trail: string
  open: boolean
  message: string
  id: string
}

export const handler: Handler = async (event, context) => {
  const claims = context?.clientContext?.user
  console.log('user claims', claims)
  const { id, ...trailData }: TrailData = qs.parse(event.rawQuery, {
    decoder(str: string, decoder: unknown, charset: string) {
      const strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      if (/^(\d+|\d*\.\d+)$/.test(str)) {
        return parseFloat(str)
      }
      const keywords = {
        true: true,
        false: false,
        null: null,
        undefined,
      }
      if (str in keywords) {
        return keywords[str]
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    }
  })
  const db: FirebaseFirestore.Settings = new Firestore({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.split("\\n").join("\n"),
    },
  })
  const trailRef = db.collection('trails').doc(id)
  await trailRef.update(trailData)

  if (!claims) {
    console.log('No claims! Begone!')
    return {
      statusCode: 401,
      body: JSON.stringify({
        data: 'NOT ALLOWED',
      }),
    }
  }

  return {
    statusCode: 200,
    body: "Success!",
  }
}
