import { useState, useEffect } from "react"

const useFetch = (url: RequestInfo, options?: RequestInit) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setLoading(false)
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url, options])

  return { response, error, loading }
}
export default useFetch
