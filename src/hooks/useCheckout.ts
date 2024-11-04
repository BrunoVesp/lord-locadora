import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { esquemaCheckout } from "../schemas/esquemaCheckout"
import { z } from "zod"
import { useState } from "react"
import { useModal } from "./useModal"

const useCheckout = () => {
    const { abrirModalSalvou } = useModal();

    const { 
        handleSubmit,
        register,
        setValue,
        formState: { errors } } = useForm<TipoCheckout>({
            resolver: zodResolver(esquemaCheckout),
            mode: "all",
            defaultValues: {
                email: '',
                telefone: '',
                nome: '',
                numeroCartao: '',
                validade: '',
                cvc: '',
            }
        })

        type TipoCheckout = z.infer<typeof esquemaCheckout>

        const [foiEnviado, setFoiEnviado] = useState<boolean>(false);

        const cleanMask = (value: string) => value.replace(/\D/g, '');

        const aoSubmeter = (dados: TipoCheckout) => {
            console.log(dados);
            abrirModalSalvou();
            setFoiEnviado(true);
        }

    return {
        handleSubmit,
        register,
        setValue,
        errors,
        aoSubmeter,
        foiEnviado,
        cleanMask
    }
}

export default useCheckout