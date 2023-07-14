import React from 'react';
import DataTable from 'react-data-table-component';
import ComponentHeader from '../../common/componentHeader/ComponentHeader';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddTaskForm from '../add-task/AddTaskForm';

const TaskList = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edata,seteData] = useState(props.dummyData);
   

    const editData=(index)=>{
        const editdata=props.list[index];
        seteData(editdata);
        handleShow();
    }


    const deleteData=(index)=>{
        const ddata=props.list[index];
        props.setdData(ddata);
        props.deleteData(ddata)
    }

    const getBadge=(status)=>{
        switch(status){
            case "Low":
                return <span class="badge text-bg-success p-2">Low</span>
            case "Medium":
                return <span class="badge text-bg-warning p-2">Medium</span>
            case "High":
                return <span class="badge text-bg-danger p-2">High</span>
            default:
                return <span>-</span>
        }
    }


    const columns = [
        {
            name: 'First Name',
            selector: row => row.fname,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'City',
            selector: row => row.city,
        },
        {
            name: 'pincode',
            selector: row => row.pincode,
        },
        {
            name: 'comment',
            selector: row => row.comment,
        },
        {
            name: 'Priority',
            selector: row => row.priority,
            cell: row=>getBadge(row.priority),

        },
        {
            name: 'Edit',
            cell: row=> (<button onClick={() => {editData(row.index)}}>Edit</button>),

        },
        {
            name: 'Delete',
            cell: row=> <button onClick={()=>deleteData(row.index)}>Delete</button>,

        },
        {
            name: 'index',
            cell: row=>row.index

        }
    ];

    const data = [
        {
            id: 1,
            firstName: 'Bhushan',
            lastName: 'Mayekar',
            phone: '8278917919',
            email:'bhushan@gamil.com',
            city:'Mumbai',
            task:'None',
            priority:'Low'
        },
        {
            id: 2,
            firstName: 'Bhushan',
            lastName: 'Mayekar',
            phone: '8278917919',
            email:'bhushan@gamil.com',
            city:'Mumbai',
            task:'None',
            priority:'Low'
        },
        {
            id: 3,
            firstName: 'Bhushan',
            lastName: 'Mayekar',
            phone: '8278917919',
            email:'bhushan@gamil.com',
            city:'Mumbai',
            task:'None',
            priority:'Hbigh'
        },
        {
            id: 4,
            firstName: 'Bhushan',
            lastName: 'Mayekar',
            phone: '8278917919',
            email:'bhushan@gamil.com',
            city:'Mumbai',
            task:'None',
            priority:'Medium'
        },
    ]


  return (
    <div>
        <ComponentHeader title={props.title} isButton={true} handleShow={handleShow}/>
        <div>
        <DataTable
            columns={columns}
            data={props.list}
        />
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task
          </Modal.Title>
        </Modal.Header>
        <AddTaskForm  title="Add Task" dontShowTitle={true} updateData={props.updateData} handleClose={handleClose} edata={edata}/>
      </Modal>
        </div>
    </div>
  )
}

export default TaskList