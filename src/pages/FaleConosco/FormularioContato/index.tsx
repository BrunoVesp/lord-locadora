import Botao from "../../../components/Botao";
import Fieldset from "../../../components/Fieldset";
import Formulario from "../../../components/Formulario";
import Input from "../../../components/Input";
import MenssagemErro from "../../../components/MessagemErro";
import ModalSalvou from "../../../components/ModalSalvou";
import useFormulario from "../../../hooks/useFormulario";
import styles from './FormularioContato.module.css';
import MaskedInput from "react-text-mask";

const FormularioContato = () => {
    const {
        register,
        handleSubmit,
        aoSubmeter,
        cleanPhone,
        setValue,
        errors } = useFormulario();

    return (
        <div className={styles.formularioContato}>
            <h3>Nos envie uma menssagem, retornaremos a você assim que possível por telefone e E-mail</h3>
            <Formulario onSubmit={handleSubmit(aoSubmeter)}>
                <Fieldset>
                    <label htmlFor="campo-nome">Nome</label>
                    <Input
                        id="campo-nome"
                        placeholder="Insira seu nome"
                        type="text"
                        $error={!!errors.nome}
                        {...register('nome')}
                    />
                    {errors.nome && (
                        <MenssagemErro>
                            {errors.nome.message}
                        </MenssagemErro>
                    )}
                </Fieldset>
                <Fieldset>
                    <label htmlFor="campo-sobrenome">Sobrenome</label>
                    <Input
                        id="campo-sobrenome"
                        placeholder="Insira seu sobrenome"
                        type="text"
                        $error={!!errors.sobrenome}
                        {...register('sobrenome')}
                    />
                    {errors.sobrenome && (
                        <MenssagemErro>
                            {errors.sobrenome.message}
                        </MenssagemErro>
                    )}
                </Fieldset>
                <Fieldset>
                    <label htmlFor="campo-telefone">Telefone</label>
                    <MaskedInput
                        id="campo-telefone"
                        className={`${styles.inputMask} ${errors ? styles.error : ''}`}
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        placeholder="Ex: (DD) XXXXX-XXXX"
                        type="text"
                        {...register('telefone', {
                            onChange: (e) => {
                                const cleanedValue = cleanPhone(e.target.value);
                                setValue("telefone", cleanedValue);
                            }
                        })}
                    />
                    {errors.telefone && (
                        <MenssagemErro>
                            {errors.telefone.message}
                        </MenssagemErro>
                    )}
                </Fieldset>
                <Fieldset>
                    <label htmlFor="campo-email">E-mail</label>
                    <Input
                        id="campo-email"
                        placeholder="Insira seu E-mail"
                        type="email"
                        $error={!!errors.email}
                        {...register('email')}
                    />
                    {errors.email && (
                        <MenssagemErro>
                            {errors.email.message}
                        </MenssagemErro>
                    )}
                </Fieldset>
                <fieldset className={styles.campoArea}>
                    <label htmlFor="campo-menssagem">Deixe sua menssagem</label>
                    <textarea
                        id="campo-menssagem"
                        placeholder="Insira sua menssagem"
                        {...register('menssagem')}
                    />
                    {errors.menssagem && (
                        <MenssagemErro>
                            {errors.menssagem.message}
                        </MenssagemErro>
                    )}
                </fieldset>
                <Botao>Enviar</Botao>
            </Formulario>
            <ModalSalvou nomeInfo="Recebemos sua menssagem! Obrigado pelo Feedback" />
        </div>
    )
}

export default FormularioContato;