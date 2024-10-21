// pages/api/reservas.ts

import { NextApiRequest, NextApiResponse } from 'next';

let reservas: { date: Date, time: string, user: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { date } = req.query;
    const dateObj = new Date(date as string);
    const reservasDoDia = reservas.filter((reserva) =>
      reserva.date.toDateString() === dateObj.toDateString()
    );
    return res.status(200).json(reservasDoDia);
  } else if (req.method === 'POST') {
    const { date, time, user } = req.body;
    const newReserva = { date: new Date(date), time, user };
    reservas.push(newReserva);
    return res.status(201).json(newReserva);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
