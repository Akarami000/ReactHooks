/////////////The bellow code is about saving code from re-rendering

      //       0 headComponent
      //      / \
//child N    0   0
      //   / | \
      //  0  0  0  => *make sure to render child node to reduce re-rendering 

// import {useState} from 'react'; 

// function App() {
  

//   return (
//     <div>
//      <HeaderFunction/>
//      <Header title={"My name is Akshay"}></Header>

//     </div>
//   )
// }

// function HeaderFunction(){
//   const [name,setName]= useState(" My name is Akshay")
//   function UpdateName(){
//     setName("My name is "+ Math.random());
//   }
//   return <div>
// <button onClick={()=>{UpdateName()}} >Click here to change the title</button>
// <Header title={name}></Header>
//   </div>
// }
// function Header({title}){
//   return (
//   <div>
//     {title}
//     </div>
//   )
// }

// export default App



////// React.memo


// import {useState} from 'react'; 
// import React from 'react';

// function App() {
  

//   return (
//     <div>
//      <HeaderFunction/>
//      <Header title={"My name is Akshay"}></Header>

//     </div>
//   )
// }

// function HeaderFunction(){
//   const [name,setName]= useState(" My name is Akshay")
//   function UpdateName(){
//     setName("My name is "+ Math.random());
//   }
//   return <div>
// <button onClick={()=>{UpdateName()}} >Click here to change the title</button>
// <Header title={name}></Header>
// <Header title={"My name is Akshay"}></Header>
// <Header title={"My name is Akshay"}></Header>
// <Header title={"My name is Akshay"}></Header>
// <Header title={"My name is Akshay"}></Header>
//   </div>
// }
// const Header = React.memo(function Header ({title}){
//   return (
//   <div>
//     {title}
//     </div>
//   )
// })

// export default App

///////////////////Now we are going to learn the concept of key in react 


import {useState} from 'react'; 
import React from 'react';

let count  = 4;
function App() {
  const [applytodo,setTodo] = useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },
  {
    id:2,
    title:"eat food",
    description:"eat your food today"
  },
  {
    id:3,
    title:"play game",
    description:" gym today"
  }
])

function AddTodo(){
    setTodo([...applytodo,{
      id:count++,
      title:Math.random(),
      description: Math.random()
    }])
}

  return (
    <div>
      <button onClick={AddTodo}> Add new Todo</button>
    {applytodo.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    <Todo  />
    </div>
  )
}

function Todo({title,description}){
  return<div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App


