import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
function Login(){
    const [email,emailUpdate] = useState('');
    const [password,passwordUpdate] = useState('');

    const usenavigate = useNavigate();

    const proceedLogin = (e) => {
      e.preventDefault();

      if(validate)
      {
        fetch("http://localhost:3000/user/?email=" + email).then((res) => {
          return res.json();
        }).then((resp) => {
          if(Object.keys(resp).length === 0) {
            toast.error('Please Enter a Valid Email');
          } else {
            if (resp[0].password === password) {
                usenavigate('/TestHome')
            } else {
              console.log(resp[0].password)
              toast.error('Please enter Valid Credentials')
            }
          }
        })
      }
    }

      const validate = (e) => {
        let result  = true;
        return result;
    }

    return(
        <div className="max-w-md w-full">
        <div className="my-8">
          <h1 className="flex text-5xl font-semibold justify-center">
            Log In
          </h1>
        </div>
        <form className=" outline-0" onSubmit={proceedLogin}>
          <div className="mb-4 flex justify-center">
            <input
              type="email" //EMAIL
              value={email} onChange={e => emailUpdate(e.target.value)}
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
              value={password} onChange={e => passwordUpdate(e.target.value)}
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
            <button
              type="submit"
              value="Send"
              className=" px-3 py-2 rounded-2xl font-semibold text-white transition-all duration-500 bg-gradient-to-br to-cyan-600 via-cyan-800 from-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
              Continue
            </button>
          </div>
            <p className="justify-center flex mb-1 font-semibold whitespace-pre">
                Don't have an account ?<span className="">  <Link to = "pageSignup" className="text-teal-400 hover:underline">Sign up</Link> </span>
            </p>
            <p className="justify-center flex mb-1 font-semibold whitespace-pre">
                <span className="">  <a href = "" className="text-teal-400 hover:underline">Forgot you Password?</a> </span>
            </p>
          </form>
      </div>
    )
}

export default Login

// text-lg bg-teal-600 dark:text-white 
//                           rounded-2xl text-white px-3 py-2 font-semibold hover:bg-gradient-to-r from-teal-500 to-teal-700 duration-500
//                           hover:text-xl focus:outline-red-500


//Object.keys(res).length === 0