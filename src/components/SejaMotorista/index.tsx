import { useForm } from 'react-hook-form';
import Botao from '../Botao';
import Input from '../Input';
import styles from './SejaMotorista.module.css';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MenssagemErro from '../MessagemErro';
import { useModal } from '../../hooks/useModal';

const SejaMotorista = () => {
    const { abrirModalSalvou } = useModal();

    const esquemaEmail = z.object({
        email: z
            .string()
            .min(1, 'Informe um E-mail')
            .email("E-mail inválido")
            .transform((val) => val.toLocaleLowerCase())
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<EmailTipo>({
        mode: "all",
        resolver: zodResolver(esquemaEmail),
        defaultValues: {
            email: ""
        }
    });

    type EmailTipo = z.infer<typeof esquemaEmail>

    const aoSubmeterEmail = (dados: EmailTipo) => {
        console.log(dados);
        abrirModalSalvou()
    }

    return (
        <section className={styles.fundo}>
            <h3>Torne-se Um Motorista Do Seu Tempo. Seus Objetivos. Você é o Chefe</h3>
            <div className={styles.campoInput}>
                <p>Inscreva-se e Junte-se a Nós</p>
                <form onSubmit={handleSubmit(aoSubmeterEmail)}>
                    <Input
                        placeholder='EMAIL'
                        type='email'
                        $error={!!errors.email}
                        {...register('email')}
                    />
                    <Botao tipo='submit'>Enviar</Botao>
                </form>
                {errors.email && (
                    <MenssagemErro>{errors.email.message}</MenssagemErro>
                )}
            </div>
        </section>
    )
}

export default SejaMotorista;