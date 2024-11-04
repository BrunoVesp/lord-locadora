import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { esquemaContato } from "../schemas/esquemaContato";
import { z } from "zod";
import { useModal } from "./useModal";

const useFormulario = () => {
    const { abrirModalSalvou } = useModal();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<TipoContato>({
        resolver: zodResolver(esquemaContato),
        mode: "all",
        defaultValues: {
            nome: '',
            sobrenome: '',
            telefone: '',
            email: '',
            menssagem: ''
        }
    });

    type TipoContato = z.infer<typeof esquemaContato>

    const cleanPhone = (value: string) => value.replace(/\D/g, '');

    const aoSubmeter = (dados: TipoContato) => {
        console.log(dados);
        abrirModalSalvou();
    }

    return {
        register,
        handleSubmit,
        errors,
        aoSubmeter,
        cleanPhone,
        setValue,
    }
}

export default useFormulario;