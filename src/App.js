import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}




let ExternalUsers =()=>{
  let [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return(
  <div>
    <h1>External Users</h1>
    {
      users.map(user => <ShowUsers name={user.name} email={user.email}></ShowUsers>)
    }
  </div>
  )
}
function ShowUsers(props){
  // console.log(props);
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )

}



const Counter =()=>{
  const [count,setCount]=useState(33);
  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  
return(
<div>
  <h1>Count: {count}</h1>
  <button onClick={IncreaseCount}>Increase</button>
  <button onClick={DecreaseCount}>Decrease</button>
</div>
)
}

export default App;
