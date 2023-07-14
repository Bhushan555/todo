import './App.css';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTaskForm from './components/add-task/AddTaskForm';
import TaskList from './components/task-list/TaskList';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [list,setList]=useState([]);
  const dummyData={
    fname:"",
    phone:"",
    city:"",
    pincode:"",
    comment:"",
    priority:"",
    index:-1
  };
  const [dData,setdData] = useState(dummyData);

  const updateData=(data,setData)=>{

    let taskToAdd=data;
    console.log(list.length)
    if(taskToAdd.index===-1){
        taskToAdd.index=list.length;
        setList(list=>[...list,taskToAdd]);
      
    }
    else{
      const nlist=list.filter(li=>li.index!=taskToAdd.index);
      nlist.push(taskToAdd)
      setList(nlist)
    }
    setData(dummyData)
  
}

const deleteData=(dData)=>{
  let nlist=list.filter(li=>li.index!=dData.index);
  nlist=nlist.map((val,ind)=>{
    val.index=ind;
    return val;
  })
  setList(nlist);

}
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Layout/>,
        children:[
          {
            index:true,
            element:<TaskList title="Task List" list={list} updateData={updateData} dummyData={dummyData} setdData={setdData} deleteData={deleteData}/>
          },
          {
            path:'add-task',
            element:<AddTaskForm title="Add Task" dontShowTitle={false} updateData={updateData} />
          }
        ]
      }
  ])
  return (

    
   <RouterProvider router={router}/>
    // <div className="App">
    //  <Layout>
    //     <AddTaskForm title="Add Task"/>
    //     {/* <TaskList title="Task List"/> */}
    //  </Layout>
    // </div>
  );
}

export default App;
