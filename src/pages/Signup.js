import { Link } from "react-router-dom";

export default function Signup(){
    return(
        <div className='bg-blue-400 w-full h-screen flex  justify-center items-center'>
        <div className='bg-white w-[40%] h-2/4 rounded-lg p-10'>
            <div className=''>
                <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                <p className="font-bold text-lg">Email Address</p>
                <input type="text" placeholder="email address" className="w-full h-1/4 px-5 py-2 mb-5 border-blue-300 border-2 rounded-md"></input>
                <p className="font-bold text-lg">Password</p>
                <input type="text" placeholder="******" className="w-full h-1/4 px-5 py-2 mb-5 border-blue-300 border-2 rounded-md"></input>
                <button className="bg-blue-600 mb-3 text-white text-bold text-lg w-full h-10 rounded-md">Submit</button>
                <div className="flex justify-end"><Link to="/" className="hover:text-blue-500" >Already have an account?</Link></div>
            </div>
        </div>
    </div>
    )
}