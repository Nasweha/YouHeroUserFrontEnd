import React, { useEffect, useState } from 'react';
import superhero3 from '../assets/superhero-10.jpg';
import superhero4 from '../assets/super131.jpg';
import './Cform.css'; 
import { ToastContainer,toast } from 'react-toastify';
import { addFormApi } from '../../services/allAPI';

function Cform() {

  const [addform, setAddform] = useState({
    fullname: "",
    emailId: "",
    phone: "",
    date:"",
    address: "",
  
    description: "",
  })

  
  const [token ,setToken]=useState("")
  console.log(addform);

  const handleAddForm = async(e)=>{
    e.preventDefault()

    const {fullname,emailId,phone,date,address,description} = addform
    if(!fullname ||!emailId || !phone ||!date ||!address ||!description){
      toast.info('please fill the required field')
    }
    else{
      if(token){
        const reqHeader ={
          "Content-Type":"application/json",
          "Authorization" :`Bearer ${token}`
         }

      
     
     const result = await addFormApi(addform,reqHeader)
     if (result.status === 200) {
      toast.success('your Grivience submitted successfully');
      
    } else {
      toast.success('your Grivience submitted successfully');
    }
      
    }
  }
}

  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])
  console.log(token);

  const handleClose = () => {
    setAddform({
      fullname: "",
      emailId: "",
      phone: "",
      date:"",
      address: "",
      additionalfile: "",
      description: "",

    })
  }



  return (
    <div className="cform-container">
      <div className="row m-2">
        <div className="col-md-4 col-sm-12 image-container">
          <img src={superhero4} alt="Superhero" width={'400px'} className="responsive-image overlay-image" />
          <div className="form-overlay">
            <form className="shadow p-5 form-style">
              <h4 className="text-center mb-4">Tell Us Your Problem</h4>
              <div className="mb-3">
                <input type="text" placeholder="Enter Your Name" className="form-control" value={addform.fullname} onChange={(e) => setAddform({ ...addform, fullname: e.target.value })} pattern="_[a-zA-Z0-9]+" minlength="3" maxlength="30"/>
              </div>
              <div className="mb-3">
                <input type="email" placeholder="Enter Your Email" className="form-control" value={addform.emailId}  onChange={(e) => setAddform({ ...addform, emailId: e.target.value })} />
              </div>
              <div className="mb-3">
                <input type="tel" placeholder="Enter Your Phone" className="form-control" value={addform.phone}  onChange={(e) => setAddform({ ...addform, phone: e.target.value })}  pattern="_[0-9]+" maxlength="10"/>
              </div>
              <div className="mb-3">
                <input type="date" placeholder="" className="form-control" value={addform.date}  onChange={(e) => setAddform({ ...addform, date: e.target.value })}  />
              </div>
              <div className="mb-3">
                <input type="text"value={addform.address}  placeholder="Enter Your address" className="form-control" onChange={(e) => setAddform({ ...addform, address: e.target.value })} pattern="_[a-zA-Z0-9]+" minlength="4" maxlength="50" />
              </div>

             
              <div className="mb-3">
                <textarea placeholder="Tell us more about your Problem, when , happend ,what happend ,what the status now etc....." className="form-control" rows={'3'} value={addform.description}  onChange={(e) => setAddform({ ...addform, description: e.target.value })}  pattern="_[a-zA-Z0-9]+" minlength="20" maxlength="2000"/>

              </div>
              <button type="submit" className="btn btn-outline-primary me-2" onClick={handleAddForm}>Submit</button>
              <button type="submit" className="btn btn-outline-danger" onClick={handleClose}>cancel</button>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 image-container">

        </div>
      </div>
      <ToastContainer theme='colored' position='top-center'/>
    </div>
  );
}

export default Cform;
