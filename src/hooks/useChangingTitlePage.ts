import { useEffect } from 'react'

const useChangingTitlePage = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [])
}

export default useChangingTitlePage
