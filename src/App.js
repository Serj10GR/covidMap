import { useState, useEffect } from 'react'
import MyMap from './components/Map'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const res = await fetch(`https://covid19.mathdro.id/api/confirmed`)
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <MyMap data={data} />
    </div>
  )
}

export default App
