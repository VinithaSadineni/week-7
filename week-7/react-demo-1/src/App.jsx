import './App.css'

import Test1 from './Components/Test1.jsx';
import Test2 from './Components/Test2.jsx';
import StateDemo from './Components/StateDemo.jsx';
function App(){

  //state(optional)
/*
  let username='JACOB'
  let person={
    id:100,
    name:"Amy",
  };
let marks=[90,78,56,90];

const test1=()=>{
  console.log("Hello")
}

const test2=(a)=>{
  console.log(`test2 is called :${a}`)
}*/

const messages=[{
  message1: "Good Morning",
  message2: "Hello",
},
{
  message1: "Good Afternoon",
  message2: "Hey",
},
{
  message1: "Good Evening",
  message2: "Hi",
}
];

  //return a react element(mandatorily)
   return(
    <div className='text-center border-2 bg-lime-200 p-24'>
      <h1 className='text-4xl text-amber-900'>Welcome to react</h1>
     {
      messages.map((msgObj,index)=><Test1 messages={msgObj} key={index}/>)
     }
      {/*<Test2 />*/}
      <StateDemo />
    </div>
   )
}

//should be exported
export default App;


 {/*<h1 className='text-5xl text-center text-amber-400 font-family-mono'>Welcome to React</h1>
     {/*Username
      <h2 className='text-2xl'>UserName: {username}</h2>
      <h2 className='text-2xl'>{person.id}</h2>
      <h2 className='text-2xl'>{person.name}</h2> 
      {
        marks.map((m,index)=><h2 key={index}>{m}</h2>)
      }
      <button onClick={test1} className='bg-amber-500 text-lime-50'>Click</button>
      <button onClick={()=>test2(100)} className='bg-amber-500 text-lime-50'>Click</button>
      */}