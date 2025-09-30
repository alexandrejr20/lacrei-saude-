import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';


const schema = z.object({
name: z.string().min(2),
email: z.string().email(),
phone: z.string().optional(),
date: z.string(),
time: z.string()
});


export default function handler(req: NextApiRequest, res: NextApiResponse){
if(req.method !== 'POST') return res.status(405).json({message: 'Method not allowed'});


try{
const data = schema.parse(req.body);
// Persistir: em produção inserir em DB
return res.status(201).json({message: 'Agendamento realizado', data});
}catch(e:any){
return res.status(400).json({message: e.message});
}
}