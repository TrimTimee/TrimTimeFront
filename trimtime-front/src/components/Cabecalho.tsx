type Props = {
    user:string;
}


export const Cabecalho = ({user}:Props)=>{


    return (
        <div>
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white w-full">
        <div className="flex items-center space-x-4">
          <img src="#" alt="Logo da Barbearia" className="h-10" />
          <h1 className="text-2xl">Barbearia X</h1>
        </div>

       
        <div className="flex items-center space-x-4">
          <img src="#" alt="Avatar" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-bold">{user}</span>
        </div>
      </header>

        </div>
    )
}