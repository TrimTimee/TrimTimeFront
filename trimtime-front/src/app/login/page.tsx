import '../styles/login.css'

const Login = ()=>{
    return (
        <div className="fundo-login flex w-screen h-screen justify-center items-center  ">

        
            <div className='bg-black w-80 h-80 bg-opacity-30 flex flex-col gap-4 justify-center items-center rounded-sm'>
                <input type="email" className="rounded-md overflow-hidden bg-gray-300 w-40 h-8 " />
                <input type="password" className="rounded-md overflow-hidden bg-gray-300 w-40 h-8 " />
            </div>
        </div>
    )
}

export default Login;