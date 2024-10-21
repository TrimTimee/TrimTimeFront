"use client"

import { useState } from "react";


export const MenuLateral = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Controla o estado do menu em dispositivos móveis

  return (
    <div className="flex justify-center">
      {/* Menu lateral para telas grandes */}
      <section className="bg-gray-300 flex justify-around text-gray-200 p-4 mt-4 rounded-full w-full lg:w-2/3 lg:flex hidden">
        <h1 className="text-black flex gap-2 cursor-pointer hover:underline ">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          <a href="" className="">
            Home
          </a>
        </h1>

        <h1 className="text-black flex gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M18 16L16 16M16 16L14 16M16 16L16 14M16 16L16 18"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M7 4V2.5"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M17 4V2.5"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M21.5 9H16.625H10.75M2 9H5.875"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
              <path
                d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </g>
          </svg>
          <a href="" className="text-sm hover:underline">
            Agendamento
          </a>
        </h1>

        <h1 className="text-black flex gap-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M3 9H21M9 15L11 17L15 13M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <a href="" className="hover:underline">
            Reservas
          </a>
        </h1>

        <h1 className="text-black flex gap-2">
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                className="cls-1"
                d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"
              ></path>
            </g>
          </svg>
          <a href="" className="hover:underline">
            Mais
          </a>
        </h1>
      </section>

      {/* Menu burger para telas pequenas */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-4 bg-gray-300 text-black rounded-full "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Menu dropdown para telas pequenas */}
        {menuOpen && (
          <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-lg mt-4 space-y-4">
          <h1 className="text-black flex gap-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 ease-in-out w-full text-center border-b border-gray-400">
            Home
          </h1>
        
          <h1 className="text-black flex gap-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 ease-in-out w-full text-center border-b-2 border-gray-400">
            Agendamento
          </h1>
        
          <h1 className="text-black flex gap-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 ease-in-out w-full text-center border-b border-gray-400">
            Reservas
          </h1>
        
          <h1 className="text-black flex gap-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg transition-colors duration-200 ease-in-out w-full text-center">
            Mais
          </h1>
        </div>
        
        )}
      </div>
    </div>
  );
};
