import { Handler } from "@netlify/functions"
import { Firestore } from "@google-cloud/firestore"

interface TrailData {
  id: string,
  trail: string
  open: boolean
  notes: string
}

export const handler: Handler = async (event, context) => {
  const db: FirebaseFirestore.Settings = new Firestore({
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.split("\\n").join("\n"),
    },
  })
  const snapshot = await db.collection("trails").get()
  if (snapshot) {
    const result: TrailData[] = []
    snapshot.forEach(item => {
      const obj = item.data()
      obj.id = item.id
      result.push(obj)
    })
    // console.log(result)
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  }
  return {
    statusCode: 400,
    body: JSON.stringify({
      data: "No data",
    }),
  }
}
