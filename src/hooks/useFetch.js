import { useState, useEffect } from "react"

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setLoading(true)
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
    setLoading(false)
  }, [url, options])

  return { response, error, loading }
}
export default useFetch
