import { z } from "zod";

export const esquemaCheckout = z.object({
    email: z
        .string()
        .email("E-mail inválido"),
    telefone: z
        .string()
        .regex(/^\d{11}$/, "Telefone inválido"),
    nome: z
        .string()
        .min(1, "Campo obrigatório"),
    numeroCartao: z
        .string()
        .length(16, "Número de cartão inválido"),
    validade: z
        .string()
        .regex(/^\d{4}$/, "Data de validade inválida" ),
    cvc: z
        .string()
        .length(3, "CVC inválido")
        .regex(/^\d{3}/, "Digite apenas números")
})