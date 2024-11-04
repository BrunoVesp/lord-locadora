import { z } from "zod";

export const esquemaContato = z.object({
    nome: z
        .string()
        .min(2, 'Campo obrigatório'),
    sobrenome: z
        .string()
        .min(2, 'Campo obrigatório'),
    telefone: z
        .string()
        .regex(/^\d{11}$/, "Telefone inválido"),
    email: z
        .string()
        .email('E-mail inválido'),
    menssagem: z
        .string()
        .min(10, 'A mensagem precisa ter no mínimo 10 caracteres')
})