import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
// import Alert from '@mui/material/Alert';
import { toast } from 'react-toastify';

function Signup(){

  const [firstName,firstNameChange] = useState("");
  const [lastName,lastNameChange] = useState("");
  const [email,emailChange] = useState("");
  const [password,passwordChange] = useState("");

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = {firstName,lastName,email,password};
    console.log(regobj);

    fetch("http://localhost:3000/user/?email=" + email).then((res) => {
          return res.json();
        }).then((resp) => {
          if(Object.keys(resp).length != 0) {
            toast.error('Email Already in Use');
          }
          else{
            fetch("http://localhost:3000/user",{
            method: "POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj),
          }).then((res)=>{
            toast.success('Account Created');
            navigate('/')
          }).catch((err)=>{
            toast.warning('Error Occured');
          });
          }
        })

    

  }
    return(
        <div className="max-w-md w-full">
        <div className="my-8">
          <h1 className="flex text-5xl font-semibold justify-center">
            Sign Up
          </h1>
        </div>
        <form className=" outline-0" onSubmit={handlesubmit}>
          <div className="mb-4 flex justify-center">
            <input
              type="name" //First Name
              name="First Name"
              value={firstName} onChange={e => firstNameChange(e.target.value)}
              placeholder="First Name"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="name" //Last Name
              name="Last Name"
              value={lastName} onChange={e => lastNameChange(e.target.value)}
              placeholder="Last Name"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="email" //EMAIL
              value={email} onChange={e => emailChange(e.target.value)}
              name="user_email"
              placeholder="Email"
              className=" transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              type="password" //PASSWORD
              value={password} onChange={e => passwordChange(e.target.value)}
              name="user_password"
              placeholder="Password"
              className="transition-all duration-500 w-1/2 px-3 py-3 border-2 border-teal-800 rounded-xl bg-transparent backdrop-blur-lg 
                          focus:bg-teal-950 font-semibold focus:outline-none"
              required
            ></input>
          </div>
          <div className="mb-4">
          </div>
          
        
        <div className="justify-center flex mb-1">
          {/* <a href=""> */}
            <button
              type="submit"
              value="Send"
              className=" px-3 py-2 rounded-2xl font-semibold text-white transition-all duration-500 bg-gradient-to-br to-cyan-600 via-cyan-800 from-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Submit
            </button>
            {/* </a> */}
          <Link to="/" className="mx-2">
            <button
              type=""
              // value="Send"
              className=" px-3 py-2 rounded-2xl font-semibold text-white transition-all duration-500 bg-gradient-to-br from-cyan-600 via-cyan-800 to-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
              Back
            </button>
            </Link>
          </div>
        </form>
      </div>
    )
}

export default Signup

// text-lg bg-teal-600 dark:text-white 
//                           rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gradient-to-r from-teal-500 to-teal-700 duration-500
//                           hover:text-xl focus:outline-red-500