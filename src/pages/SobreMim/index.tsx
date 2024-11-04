import CabecalhoPagina from "../../components/CabecalhoPagina";
import styles from './SobreMim.module.css';
import {
    FaReact,
    FaJs,
    FaBootstrap,
    FaGitAlt,
    FaPhoneAlt,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const SobreMim = () => {
    return (
        <>
            <CabecalhoPagina nomePagina="Sobre Mim" />
            <section className={styles.sobreMim}>
                <div className={styles.divImagem}>
                    <img src="/imagens/bruno-foto.jpg" alt="Foto de Bruno" />
                </div>
                <div className={styles.divTexto}>
                    <article>
                        <h2>Olá, eu me chamo Bruno Hebert</h2>
                        <h3>Desenvolvedor Front End</h3>
                        <p>
                            Atualmente sou estudante de Ciência da Computação na Unipê
                            - Centro Universitário de João Pessoa.
                            Conheci o mundo da tecnologia e desenvolvimento por amar
                            criar coisas novas, eficientes, funcionais, bonitas e
                            intuitivas. Atualmente tenho trabalhado como freelancer nos
                            últimos 8 meses e como estagiário há 6 meses. Minha
                            especialidade inclui React, HTML, CSS, Sass, Tailwind css,
                            JavaScript (ES6) e Bootstrap.
                        </p>
                        <p>
                            Possuo foco em desenvolvimento com HTML, CSS, JavaScript,
                            React dentre outras tecnologias que uso para criar aplicações
                            web de alto nível e valor.
                        </p>
                        <p>
                            Sou consistente em aprender uma nova linguagem e me adaptar à
                            qualquer mudança e superar qualquer desafio!
                        </p>
                    </article>
                    <article>
                        <h3>Experiência</h3>
                        <div className={styles.experiencia}>
                            <div>
                                <p>Freelancer, João Pessoa-PB</p>
                                <p className={styles.tempo}>Janeiro 2024 - Presente</p>
                            </div>
                            <div>
                                <p>Estágio, Híbrido - Fábrica de Software - UNIPÊ</p>
                                <p className={styles.tempo}>Março 2024 - Presente</p>
                                <ul>
                                    <li>Criação de páginas de destino, dashboards e aplicações web utilizando o Next Js e as linguagens de programação TypeScript e React.</li>
                                    <li>Participação em reuniões com a equipe, discutindo novos processos para melhorar a eficiência e a qualidade do serviço.</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article className={styles.tecnologias}>
                        <h3>Tecnologias</h3>
                        <ul>
                            <li><FaReact className={styles.icone} />React</li>
                            <li><FaJs className={styles.icone} />JavaScript (ES6)</li>
                            <li><SiTypescript className={styles.icone} />TypeScript</li>
                            <li><RiTailwindCssFill className={styles.icone} />Tailwind CSS</li>
                            <li><FaBootstrap className={styles.icone} />Bootstrap</li>
                            <li><FaGitAlt className={styles.icone} />Git / Github</li>
                        </ul>
                    </article>
                    <article className={styles.contato}>
                        <h3>Contato</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/BrunoVesp" target="_blank">
                                    <FaGithub className={styles.icone} />https://github.com/BrunoVesp
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100011252202148&locale=pt_BR" target="_blank">
                                    <FaFacebook className={styles.icone} />Bruno Hebert
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/brunow_h/" target="_blank">
                                    <FaInstagram className={styles.icone} />@brunow_h
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/bruno-hebert-40b38827b/" target="_blank">
                                    <FaLinkedin className={styles.icone} />Bruno Hebert
                                </a>
                            </li>
                            <li><FaPhoneAlt className={styles.icone} />(87) 98857-6556</li>
                            <li><MdEmail className={styles.icone} />brunovesp30@gmail.com</li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    )
}

export default SobreMim;