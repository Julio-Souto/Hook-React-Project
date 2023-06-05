import { useEffect, useState } from "react"

function HookEffect() {
  const [data, setData] = useState([])
  let url = "https://jsonplaceholder.typicode.com/photos"
  useEffect( () => {
    // const handle = async () =>{
    //   const response = await fetch(url)
    //   setData(await response.json())  
    // }
    // handle()
    fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .then(data=>setData(data))
  },[])
  
  return (
    <>
      <div className="results">
      {data.map((item,index) => 
        <div key={item.id}>
          <h2>{index}</h2>
          <p>{item.title}</p>
          <img src={item.thumbnailUrl} alt={item.title} />
        </div>
      )}
      </div>
    </>
  )
}

export default HookEffect