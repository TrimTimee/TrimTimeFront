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
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
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
    <div className="min-h-screen bg-gray-700">
      
      <Cabecalho user='Administrador'/>

      {/* Menu lateral */}
      <NavBarAdmin />

      <section className="text-center mt-4">
        <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">Tempo até o próximo atendimento:</h3>
              <p className="text-5xl">{timeRemaining}</p>
            </div>
      </section>

      {/* Conteúdo principal */}
      <main className="p-4 lg:w-2/3 mx-auto mt-6">
        {/* Seção de Agendamentos do dia */}
        <section className="mt-6">
          <h2 className="text-lg font-bold text-white">
            Agendamentos de Hoje ({diaAtual}/{mesAtual+1}/{anoAtual})
          </h2>
          <ul className="space-y-4 mt-4">
            {appointments.map((appointment, index) => (
              <li key={index} className="flex justify-between bg-gray-200 p-4 rounded-lg">
                <span>{appointment.time} - {appointment.service}</span>
                <span>Cliente: {appointment.client}</span>
              </li>
            ))}
          </ul>

          {/* Cronômetro até o próximo atendimento */}
          
        </section>

        {/* Botões de ação */}
        <div className="flex justify-around mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Ver Relatórios
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Gerenciar Serviços
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
