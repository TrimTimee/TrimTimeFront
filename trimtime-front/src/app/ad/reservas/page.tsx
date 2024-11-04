"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Cabecalho } from "@/components/Cabecalho";
import { NavBarAdmin } from "@/components/NavBarAdmin";

const Page = () => {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Inicializa com a data atual
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal
   // const [reservas, setReservas] = useState([]); // Estado para armazenar as reservas filtradas

    const handleDateChange = (newDate:Date) => {
        setSelectedDate(newDate);
        setIsModalOpen(false); // Fecha o modal após selecionar a data
        // Aqui, você pode filtrar as reservas pela data escolhida
    };


    const reservas = [{id:1,nome:'joao',data:'22/11/2024',horario:'15:00',status:'agendado'}]

    return (
        <div className="min-h-screen bg-gray-700">
            <Cabecalho user="Administrador" />
            <NavBarAdmin />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4 text-white">Visualizar Reservas</h1>
                
                {/* Botão para abrir o modal de calendário */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Selecione a data
                </button>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm w-full">
                            <h2 className="text-lg font-bold mb-4 text-center">Escolha uma data</h2>
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                className="mb-4"
                                tileClassName={({ date, view }) =>
                                    date.toDateString() === selectedDate.toDateString() ? "bg-blue-200 text-blue-900" : null
                                }
                            />
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Tabela de reservas */}
                <div className="bg-white shadow rounded-lg overflow-hidden mt-4">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="text-left ">
                                <th className="py-2 px-4 bg-gray-200">Nome</th>
                                <th className="py-2 px-4 bg-gray-200">Data</th>
                                <th className="py-2 px-4 bg-gray-200">Horário</th>
                                <th className="py-2 px-4 bg-gray-200">Status</th>
                            </tr>
                        </thead>
                        <tbody className="italic">
                            {reservas.length > 0 ? (
                                reservas.map((reserva) => (
                                    <tr key={reserva.id}>
                                        <td className="py-2 px-4 border">{reserva.nome}</td>
                                        <td className="py-2 px-4 border">{reserva.data}</td>
                                        <td className="py-2 px-4 border">{reserva.horario}</td>
                                        <td className="py-2 px-4 border">{reserva.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="py-2 px-4 border text-center" colSpan="4">
                                        Nenhuma reserva encontrada para a data selecionada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
