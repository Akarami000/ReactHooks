import { useState,useEffect, useMemo, memo, useCallback, useRef } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  //********* We learn about useEffect hook **************/
//   const [Todo, setTodo] = useState([]);
//   useEffect(()=>{
//     axios.get('https://dummyjson.com/todos').then((res)=>{
//       const data = res.data.todos;
//       setTodo(data)
//     })
//   },[])
  

//   return <>
//       {Todo.map((todo)=><TodoFunction key={todo.id} userId={todo.userId} todo={todo.todo} ></TodoFunction>)}
//     </>
  
// }

// const TodoFunction =({userId,todo})=>{
//   return<>
//   <h2> {userId}</h2>
//   <p>{todo}</p>
//   </>
// }

// ******** we are learning about useMemo ////
// useMemo return string or input

// const [Num, setNum] = useState(0);
// const [Value, setValue] = useState(1);

// let count = useMemo(()=>{
//   let count = 0;
//   for(let i=0;i<=Value;i++){
//     count = count + 1;
//   }
//   return count
// },[Value])


// return <div>
//   <input onChange={(e)=>{setValue(e.target.value)}} ></input>
//   <div>Sum of count {count}</div>
//   <button onClick={()=>{setNum(Num+1)}}> num ({Num})</button>
//   </div>

// }

/// ****** we are going to learn about useCallback **********
// its return function 


// const [counts,setCount] = useState(0);

// const inputFunction =useCallback( ()=>{
//   console.log("hi there");
// },[])

// return <div>
//     <ButtonFunction inputFunction={inputFunction} ></ButtonFunction>
//     <button onClick={()=>{setCount(counts+1)}}> number of Clicks{counts}</button>
//   </div>

// }
// const ButtonFunction = memo(({inputFunction})=>{
//   console.log("child render");
//   return<div>
//     <button> Button clicked </button>
//   </div>
// })

///// **** custmomHooks ////


// const [counts,setCount] = useState(0);
// const Todo = useCustomHooks();

// return <div>
//     {Todo.map((e)=>{
//       return <div key={e.id}>{e.todo}</div>
//     })}
//   </div>

// }

// const useCustomHooks = ()=>{
//   const [todo,setTodo] = useState([]);

//   useEffect(()=>{
//     axios.get("https://dummyjson.com/todos").then((res)=>{
//       const data = res.data.todos;
//       setTodo(data)
//     },[])
//   })
//   return todo
// }

//// ******* useRef


const [num,setNum] = useState(2000);
const divRef = useRef();

useEffect(()=>{
  setTimeout(()=>{
    divRef.current.innerHTML = 10;
  },5000)
},[])

return <div>

we are going to change digit in 5 sec 
<div ref={divRef}> {num} </div>
      </div>

}

export default App
