import React,{useState} from 'react'
import Products from './Products'

const App = () => {
  const [search,setSearch] = useState('')
  const[data,setData] = useState([])
  const YOUR_APP_ID = "f3990469";
  const YOUR_APP_KEY ="df216ede45e0678c181e3d5345a9ec12";
  
  const onSubmit =e => {
    e.preventDefault()
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(response=>response.json()).then(data=>setData(data.hits))
  }

  return (
    <div className='container'>
      <center>
        <h4 className='heading'>Food Recipe App</h4>
        <form onSubmit={onSubmit}>
          <input type = "text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" value="Search" className='btn btn-primary'/>
        </form>
        {data.length>=1 ? <Products data={data}/>:null}
      </center>
      
    </div>
  )
}

export default App
