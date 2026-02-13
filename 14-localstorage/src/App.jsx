import React from 'react'

const App = () => {

  // localStorage.clear();
  // sessionStorage.clear();

  // localStorage.setItem("user","suryansh"); // key value pair and it will be stored until u remove it urself
  // const user=localStorage.getItem('user');
  // console.log(user);
  // localStorage.removeItem('user');

  const customer={
    name:"Suryansh",
    age:18,
    tier:'S'
  };

  localStorage.setItem("Customer",JSON.stringify(customer));

  // const user=(localStorage.getItem("Customer")); 
  const user=JSON.parse(localStorage.getItem("Customer"));
  console.log(user);

  return (
    <div>
      
    </div>
  )
}

export default App
