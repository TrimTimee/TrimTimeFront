"use client"


import { useEffect } from 'react';
import Typed from 'typed.js';
import '../styles/login.css';

const Login = () => {

    useEffect(() => {
        const typed = new Typed('.typed-title', {
            strings: ["Olá! Seja Bem-vindo ao TrimTime"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: false,
            backDelay: 2000
        });

        return () => {
            typed.destroy(); 
        };
    }, []);

    return (
        <div className="fundo-login flex flex-col w-screen h-screen justify-center items-center">
            <div className='bg-black w-80 h-auto bg-opacity-30 flex flex-col gap-4 justify-left rounded-md border border-gray-400 border-opacity-50 shadow-md'>
                
                <div className='bg-gray-400 w-80 h-20 opacity-85 p-4'>
                    
                    <h1 className='font-[Titulo] text-2xl text-gray-200 font-bold typed-title'></h1>
                </div>
                
                <div className='p-8 flex gap-4 flex-col'>
                    <h1 className='text-white text-2xl mb-4'>Login de usuário</h1>

                   
                    <label htmlFor="email">
                        <h1 className='text-white'> Email:</h1>
                        <input 
                            type="email" 
                            className="rounded-md overflow-hidden bg-gray-300 w-60 h-8 p-2 placeholder-gray-600" 
                            id='email' 
                            placeholder='seuemail@gmail.com' 
                        />
                    </label>

                   
                    <label htmlFor="password">
                        <h1 className='text-white'> Senha:</h1>
                        <input 
                            type="password" 
                            className="rounded-md overflow-hidden bg-gray-300 w-60 h-8 p-2 placeholder-gray-600" 
                            id='password' 
                            placeholder='Sua senha aqui'
                        />
                    </label>

                    <h1 className='text-white text-sm ml-24'><a href="#">Esqueceu sua senha?</a></h1>

                    <input 
                        type="submit" 
                        value='Entrar' 
                        className='w-60 h-8 cursor-pointer font-bold text-white border bg-purple-700 rounded-md hover:bg-purple-500 border-purple-700 transition-all' 
                    />

                    <h1 className='text-white text-sm'>Não possui conta ainda? <a href="" className='hover:text-blue-200'>Crie agora!</a></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;
