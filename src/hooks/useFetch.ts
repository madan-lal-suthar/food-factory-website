import { useEffect, useState, type DependencyList } from 'react'

type FetchResponse<T> = {
  data?: T
}

const useFetch = <T,>(request: () => Promise<FetchResponse<T> | T>, dependencies: DependencyList = []) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let active = true

    const loadData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await request()
        if (active) setData('data' in Object(response) ? (response as FetchResponse<T>).data ?? null : (response as T))
      } catch (err) {
        if (active) setError(err)
      } finally {
        if (active) setLoading(false)
      }
    }

    loadData()

    return () => {
      active = false
    }
  }, dependencies)

  return { data, error, loading }
}

export default useFetch
