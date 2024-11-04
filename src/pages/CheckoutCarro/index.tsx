import { Link, useParams } from "react-router-dom";
import carros from '../../mocks/carros.json';
import Formulario from "../../components/Formulario";
import Input from "../../components/Input";
import styles from './CheckoutCarro.module.css';
import cardStyles from '../../components/CardCarroPrincipal/CardCarroPrincipal.module.css';
import inputMaskStyles from '../FaleConosco/FormularioContato/FormularioContato.module.css';
import Fieldset from "../../components/Fieldset";
import CabecalhoPagina from "../../components/CabecalhoPagina";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarDoor, GiCarSeat } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import Botao from "../../components/Botao";
import MenssagemErro from "../../components/MessagemErro";
import MaskedInput from "react-text-mask";
import useCheckout from "../../hooks/useCheckout";
import ModalSalvou from "../../components/ModalSalvou";

const CheckoutCarros = () => {
    const parametros = useParams();

    const carro = carros.find((carro) => {
        return carro.id === Number(parametros.id)
    })

    const {
        register,
        aoSubmeter,
        errors,
        handleSubmit,
        setValue,
        cleanMask,
    } = useCheckout();

    return (
        <section className={styles.checkout}>
            <CabecalhoPagina nomePagina="Checkout" />
            <Link to="../carros">
                <Botao>Voltar</Botao>
            </Link>
            <Formulario onSubmit={handleSubmit(aoSubmeter)}>
                <div className={styles.card}>
                    <div className={cardStyles.conteudo}>
                        <div className={cardStyles.imagemContainer}>
                            <img
                                className={cardStyles.imagemModal}
                                src={carro?.imagem}
                                alt={carro?.nome} />
                        </div>
                        <div className={cardStyles.infosContainer}>
                            <img src={carro?.iconeMarca} alt="icone" />
                            <h4>{carro?.nome}</h4>
                            <div>
                                <span>{carro?.ano}</span>
                                <p className={cardStyles.descricao}>{carro?.descricao}</p>
                                <div className={cardStyles.infos}>
                                    <p><FaCar className={cardStyles.iconeCarro} /> {carro?.tipo}</p>
                                    <p><GiCarSeat className={cardStyles.iconeCarro} /> {carro?.assentos}</p>
                                    <p><GiCarDoor className={cardStyles.iconeCarro} /> {carro?.portas}</p>
                                    <p><BsFillFuelPumpFill className={cardStyles.iconeCarro} /> {carro?.combustivel}</p>
                                </div>
                                <p className={cardStyles.preco}>R$ {carro?.preco},00 / dia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerCampos}>
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
                    <Fieldset>
                        <label htmlFor="campo-telefone">Telefone</label>
                        <MaskedInput
                            id="campo-telefone"
                            className={`${inputMaskStyles.inputMask} ${errors ? inputMaskStyles.error : ''}`}
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            placeholder="Ex: (DD) XXXXX-XXXX"
                            type="text"
                            {...register('telefone', {
                                onChange: (e) => {
                                    const cleanedValue = cleanMask(e.target.value);
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
                        <label htmlFor="campo-nome">Nome do Cartão</label>
                        <Input
                            placeholder="Nome do Cartão"
                            id="campo-nome"
                            type="text"
                            $error={!!errors.nome}
                            {...register('nome')}
                        />
                        {errors.email && (
                            <MenssagemErro>
                                {errors.nome?.message}
                            </MenssagemErro>
                        )}
                    </Fieldset>
                    <Fieldset>
                        <label htmlFor="campo-cartao">Número do Cartão</label>
                        <MaskedInput
                            id="campo-cartao"
                            className={`${inputMaskStyles.inputMask} ${errors ? inputMaskStyles.error : ''}`}
                            mask={[/[0-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                            placeholder="Ex: 1111 1111 1111 1111"
                            type="text"
                            {...register('numeroCartao', {
                                onChange: (e) => {
                                    const cleanedValue = cleanMask(e.target.value);
                                    setValue("numeroCartao", cleanedValue);
                                }
                            })}
                        />
                        {errors.telefone && (
                            <MenssagemErro>
                                {errors.numeroCartao?.message}
                            </MenssagemErro>
                        )}
                    </Fieldset>
                    <div className={styles.campoDataCvc}>
                        <Fieldset>
                            <label htmlFor="campo-validade">Validade</label>
                            <MaskedInput
                                id="campo-validade"
                                className={`${inputMaskStyles.inputMask} ${errors ? inputMaskStyles.error : ''}`}
                                mask={[/[0-9]/, /\d/, '/', /\d/,/\d/]}
                                placeholder="Ex: "
                                type="text"
                                {...register('validade', {
                                    onChange: (e) => {
                                        const cleanedValue = cleanMask(e.target.value);
                                        setValue("validade", cleanedValue);
                                    }
                                })}
                            />
                            {errors.telefone && (
                                <MenssagemErro>
                                    {errors.validade?.message}
                                </MenssagemErro>
                            )}
                        </Fieldset>
                        <Fieldset>
                            <label htmlFor="campo-cvc">CVC</label>
                            <Input
                                placeholder="Ex: 123"
                                id="campo-cvc"
                                type="text"
                                $error={!!errors.nome}
                                {...register('cvc')}
                            />
                            {errors.cvc && (
                                <MenssagemErro>
                                    {errors.cvc?.message}
                                </MenssagemErro>
                            )}
                        </Fieldset>
                    </div>
                    <h2 className={styles.valor}>Valor: R$ {carro?.preco},00</h2>
                    <Botao>Alugar</Botao>
                </div>
            </Formulario>
            <ModalSalvou nomeInfo="Compra Realizada Com Sucesso!"/>
        </section>
    )
}

export default CheckoutCarros;