import Logo from "../components/Logo";
import Signup from "../components/Signup";
import '../index.css'

function SignupPage() {
  return (
    <div className=" text-white">
      <div className=" w-2/5 backdrop-blur-lg border-r-4">
        <Logo></Logo>
        <div className=" h-screen flex justify-start items-center">
          <Signup></Signup>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
