"use client";
import { NavBarAdmin } from "@/components/NavBarAdmin";
import { useState, useEffect } from "react";

import { Cabecalho } from "@/components/Cabecalho";


const Page = () => {
let data = new Date();

let diaAtual = data.getDate();
let mesAtual = data.getMonth();
let anoAtual = data.getUTCFullYear();

  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [nextAppointmentIndex, setNextAppointmentIndex] = useState<number>(0);

  // Lista de atendimentos do dia (pode vir de uma API ou banco de dados no futuro)
  const appointments = [
    { time: "10:00", service: "Corte Simples", client: "João Silva" },
    { time: "11:00", service: "Barba Completa", client: "Pedro Souza" },
    { time: "21:00", service: "Corte + Barba", client: "Lucas Santos" },
  ];

  // Função para calcular o tempo restante até o próximo atendimento
  // Função para calcular o tempo restante até o próximo atendimento
const calculateTimeUntilNextAppointment = (): string => {
  const now = new Date();

  // Obter o próximo atendimento baseado no índice atual
  const [nextHour, nextMinute] = appointments[nextAppointmentIndex].time
    .split(":")
    .map(Number);
  const nextAppointment = new Date();
  nextAppointment.setHours(nextHour, nextMinute, 0, 0); // Definir o horário do próximo atendimento

  let timeDifference = nextAppointment.getTime() - now.getTime();

  // Se o tempo já passou, avançar para o próximo atendimento
  if (timeDifference <= 0) {
    if (nextAppointmentIndex < appointments.length - 1) {
      setNextAppointmentIndex(nextAppointmentIndex + 1); // Avançar para o próximo atendimento
      return ""; // Retorna string vazia enquanto o próximo agendamento é carregado
    } else {
      return "Nenhum atendimento restante para hoje"; // Retornar string para o caso final
    }
  } else {
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   

    return `${hours}h ${minutes}m `;
  }
};


  // useEffect para atualizar o cronômetro a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeUntilNextAppointment());
    }, 1000);

    return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, [nextAppointmentIndex]); // Adicionar dependência para recalcular ao mudar o próximo atendimento

  return (
    <div className="min-h-screen min-w-screen bg-gray-700 flex flex-col container justify-around">
      
      <Cabecalho user='Administrador' />
  
  
      <NavBarAdmin />
  
      <section className="text-center mt-4 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mt-4 text-white">
          <h3 className="text-xl font-bold sm:text-sm md:text-2xl">Tempo até o próximo atendimento:</h3>
          <p className="text-7xl">{timeRemaining}</p>
        </div>
      </section>
  
      {/* Conteúdo principal */}
      <main className="p-4 w-full mx-auto mt-6 flex-1">
  {/* Seção de Agendamentos do dia */}
  <section className="mt-6 flex flex-col justify-center items-center">
    <h2 className="text-xl font-bold text-white text-center md:text-left lg:text-3xl">
      Agendamentos de Hoje ({diaAtual}/{mesAtual + 1}/{anoAtual})
    </h2>
    <ul className="space-y-4 mt-4 text-xl w-full lg:max-w-5xl">
      {appointments.map((appointment, index) => (
        <li
          key={index}
          className="flex flex-col md:flex-row justify-between items-center bg-gray-200 p-4 rounded-lg w-full  lg:space-x-4 lg:px-8 lg:py-6"
        >
          <span className="flex-1 text-center md:text-left">{appointment.time} - {appointment.service}</span>
          <span className="flex-1 text-center md:text-right">Cliente: {appointment.client}</span>
        </li>
      ))}
    </ul>
  </section>
</main>

  
        {/* Botões de ação */}
        <div className="flex flex-col justify-center items-center mt-4 space-y-4 lg:flex-row lg:space-y-0 lg:gap-4">
  <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 w-full sm:w-auto md:w-80 lg:w-48 xl:w-56 lg:h-20">
    Ver Relatórios
  </button>
  <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 w-full sm:w-auto md:w-80 lg:w-48 xl:w-56 lg:h-20">
    Gerenciar serviços
  </button>
</div>

     
    </div>
  );
};

export default Page;
