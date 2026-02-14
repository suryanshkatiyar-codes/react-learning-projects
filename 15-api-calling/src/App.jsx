import axios from 'axios'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get('https://picsum.photos/v2/list');
    console.log(data);
    setData(data);
  }

  return (
    <div>
      <button onClick={getData}>Click here</button>
      <div>
        {data.map((e) => {
          return <h1 key={e.id}>hello {e.id}</h1>
        })}
      </div>
    </div>
  )
}

export default App
