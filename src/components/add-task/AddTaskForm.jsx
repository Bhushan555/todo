import React, { useState } from 'react';
import './addTaskForm.scss'
import ComponentHeader from '../../common/componentHeader/ComponentHeader';
import { useNavigate } from 'react-router-dom';

const AddTaskForm = (p) => {
    const dummyData={
        fname:"",
        phone:"",
        city:"",
        pincode:"",
        comment:"",
        priority:"",
        index:-1
    };
    

    
    // console.log(p.list)
    
    const navigate=useNavigate();

    const [data,setData]=useState(p.edata)
   
    const addData=()=>{

        p.updateData(data,setData);
        navigate('/');
        p.handleClose();
    }


    const changeData=(e,ele)=>{
        setData({...data,[ele]:e.target.value});
    }
   

    return (

        <>
        {!p.dontShowTitle && 
        <ComponentHeader title={p.title}/>
        }
        <div className='addTaskForm container '>
            <div className=' h-100 d-flex align-items-center'>

                <div className="row">
                    <div className="col-12 mb-4"  onChange={(e)=>{changeData(e,'priority')}} >
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Low" checked={data.priority==='Low'}/>
                                <label class="form-check-label" for="inlineRadio1">low</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Medium" checked={data.priority==='Medium'}/>
                                <label class="form-check-label" for="inlineRadio2">Mediun</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="High" checked={data.priority==='High'}/>
                                <label class="form-check-label" for="inlineRadio3">High</label>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div class="form-floating">
                            <input onChange={(e)=>{changeData(e,'fname')}} value={data.fname} type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">First Name</label>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control"  id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Middle Name</label>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Last Name</label>
                        </div>
                    </div>
                    <div className="col-6 mb-4">
                        <div class="form-floating">
                            <input onChange={(e)=>{changeData(e,'phone')}} value={data.phone} type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Phone</label>
                        </div>
                    </div>
                    <div className="col-6 mb-4">
                        <div class="form-floating">
                            <input type="email" class="form-control" value={data.email}  id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="col-6 mb-4">
                        <select onChange={(e)=>{changeData(e,'city')}} value={data.city} class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-6 mb-4">
                        <div class="form-floating">
                            <input onChange={(e)=>{changeData(e,'pincode')}}  value={data.pincode} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Pin Code</label>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div class="form-floating">
                            <textarea onChange={(e)=>{changeData(e,'comment')}} class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                    </div>
                    <div className="col-3 mx-auto">
                        <button type="button" class="btn btn-primary mx-auto w-100 d-block" onClick={addData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default AddTaskForm