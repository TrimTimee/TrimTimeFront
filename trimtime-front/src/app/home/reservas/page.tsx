"use client";

import { MenuLateral } from '@/components/MenuLateral';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PaginaReservasAdmin = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [reservas, setReservas] = useState<{ date: Date, time: string, user: string }[]>([]); // Lista de reservas

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    fetchReservas(newDate); // Buscar reservas sempre que uma nova data for selecionada
  };

  const fetchReservas = (date: Date) => {
    // Requisição ao backend para buscar reservas da data selecionada
    fetch(`/api/reservas?date=${date.toISOString()}`)
      .then((response) => response.json())
      .then((data) => {
        setReservas(data); // Atualiza as reservas com os dados do backend
      })
      .catch((error) => {
        console.error('Erro ao buscar reservas:', error);
      });
  };

  useEffect(() => {
    if (selectedDate) {
      fetchReservas(selectedDate); // Buscar reservas ao carregar a página
    }
  }, [selectedDate]);

  return (
    <div className="flex flex-col ">
      <MenuLateral />

      <h1 className='font-bold text-center my-8 text-xl'>
        Selecione a data para ver as reservas:
      </h1>

      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-2xl mb-4">Reservas do Dia</h1>

        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className='mb-4'
        />

        {selectedDate && (
          <div>
            <h2 className="mt-4 text-xl">
              Reservas para {selectedDate.toDateString()}:
            </h2>

            <table className="table-auto border-collapse border border-gray-200 mt-4">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Horário</th>
                  <th className="border border-gray-300 px-4 py-2">Usuário</th>
                </tr>
              </thead>
              <tbody>
                {reservas.length > 0 ? (
                  reservas.map((reserva, index) => (
                    <tr key={index} className="text-center">
                      <td className="border border-gray-300 px-4 py-2">{reserva.time}</td>
                      <td className="border border-gray-300 px-4 py-2">{reserva.user}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center border border-gray-300 px-4 py-2">Nenhuma reserva encontrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginaReservasAdmin;
