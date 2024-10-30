type Props = {
    user:string;
}


export const Cabecalho = ({user}:Props)=>{


    return (
        <div className="w-fit ">
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white w-full gap-6 mb-2 md:w-screen md:text-4xl md:py-12 lg:w-screen">
        
          <img src="#" alt="Logo da Barbearia" className="h-10" />
          <h1 className="text-xl md:text-4xl text-orange-400">Barbearia X</h1>
        

       
        <div className="flex items-center space-x-4">
        
          <span className="text-lg font-bold md:text-3xl text-blue-300">{user}</span>
        </div>
      </header>

        </div>
    )
}