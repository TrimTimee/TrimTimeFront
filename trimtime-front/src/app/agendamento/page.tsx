"use client";

import { Navbar } from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SistemaAgendamento = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [agendamentos, setAgendamentos] = useState<{ date: Date, time: string, user: string }[]>([]); // Lista de agendamentos
  const [availableTimes, setAvailableTimes] = useState<string[]>([]); // Horários disponíveis
  const [menuOpen, setMenuOpen] = useState(false); // Controla o estado do menu burger

  // Lista de horários possíveis
  const allTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00'
  ];

  // Atualiza os horários disponíveis com base na data
  useEffect(() => {
    if (selectedDate) {
      updateAvailableTimes(selectedDate);
    }
  }, [selectedDate]);

  // Função para tratar a mudança de data no calendário
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  // Função para tratar a seleção de horário
  const handleTimeChange = (time: string) => {
    setSelectedTime(time); // Atualiza o horário selecionado
    setMenuOpen(false); // Fecha o menu burger após a seleção
  };

  // Função para realizar o agendamento
  const handleAgendar = () => {
    if (selectedDate && selectedTime) {
      const newAgendamento = {
        date: selectedDate,
        time: selectedTime,
        user: 'Usuario Exemplo', // Em um sistema real, isso pode vir de uma sessão ou outro campo
      };

      // Envia a requisição ao backend para registrar o agendamento
      fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAgendamento),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao realizar o agendamento.');
          }
          return response.json();
        })
        .then((data) => {
          // Se a requisição for bem-sucedida, atualizar o estado com o novo agendamento
          setAgendamentos((prevAgendamentos) => [...prevAgendamentos, newAgendamento]);
          alert('Agendamento realizado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao realizar o agendamento:', error);
          alert('Erro ao realizar o agendamento.');
        });
    } else {
      alert('Por favor, selecione uma data e um horário.');
    }
  };

  // Função para filtrar os horários disponíveis com base na data selecionada
  const updateAvailableTimes = (date: Date) => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const filteredTimes = allTimes.filter((time) => {
      const [hour, minute] = time.split(':').map(Number);
      const timeSlot = new Date(date);
      timeSlot.setHours(hour, minute, 0, 0);

      if (isToday) {
        return timeSlot > now; // Se for hoje, exibe apenas os horários futuros
      } else {
        return true; // Para outras datas, exibe todos os horários
      }
    });
    setAvailableTimes(filteredTimes);
  };

  return (
    <div className="flex flex-col ">
      <Navbar />

      <h1 className='font-bold text-center my-8 text-xl'>
        Olá "Usuario", para fazer o agendamento, por favor selecione a data e horário:
      </h1>

      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-2xl mb-4">Agendamento de Serviços</h1>

        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className='mb-4'
        />

        {/* Menu Burger para horários */}
        <div className="relative">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setMenuOpen(!menuOpen)} // Alterna o estado do menu
          >
            {menuOpen ? 'Fechar Horários' : 'Selecionar Horário'}
          </button>

          {/* Menu de horários */}
          {menuOpen && selectedDate && (
            <div
              className="absolute bg-white border border-gray-300 shadow-md p-4 rounded-md mt-2 z-10 max-h-72"
              style={{
                overflowY: 'auto',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // Internet Explorer
              }}
            >
              <h2 className="text-lg font-bold mb-2">Horários Disponíveis</h2>

              {/* Contêiner rolável sem barra de rolagem */}
              <div
                style={{
                  overflowY: 'scroll',
                  maxHeight: '240px',
                  scrollbarWidth: 'none', // Esconde no Firefox
                }}
                className="scrollbar-hidden"
              >
                {availableTimes.length > 0 ? (
                  availableTimes.map((time) => (
                    <button
                      key={time}
                      className={`block mb-2 px-4 py-2 border border-black transition-all ${
                        selectedTime === time
                          ? 'bg-blue-500 text-white' // Cor de fundo quando selecionado
                          : 'hover:bg-gray-200'
                      }`}
                      onClick={() => handleTimeChange(time)}
                    >
                      {time}
                    </button>
                  ))
                ) : (
                  <p className="text-red-500">Nenhum horário disponível para esta data.</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Botões para agendar ou cancelar */}
        <div className="mt-4">
          <button
            className='w-20 h-14 border border-black hover:text-white hover:bg-black transition-all mx-4'
            onClick={handleAgendar}
          >
            Agendar
          </button>
          <button className='w-20 h-14 border border-black mx-4 hover:text-white hover:bg-red-600'>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SistemaAgendamento;
