import { ReactNetlifyIdentityAPI } from "react-netlify-identity"

export const generateHeaders = async (identity: ReactNetlifyIdentityAPI) => {
    let headers: HeadersInit = { "Content-Type": "application/json" }
    const token = await identity.getFreshJWT()
    if (identity.user) {
      headers = { ...headers, Authorization: `Bearer ${token}` }
    }
    return headers
  }
