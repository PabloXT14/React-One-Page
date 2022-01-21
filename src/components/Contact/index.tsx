import { FormEvent, useState } from "react";
import { Container } from "./style";

const FormsubDatas = {
    email: 'pabloxt14@gmail.com',
    redirectPage: 'http://localhost:3000/message'
}

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');

    function handleForm(event: FormEvent) {
        //event.preventDefault();
    }



    return (
        <Container id="contact">
            <h2>Entrar em Contato</h2>
            <form
                onSubmit={handleForm}
                action={`https://formsubmit.co/${FormsubDatas.email}`}
                method="POST"
            >
                {/* Formsubmit - Reposta ao cliente */}
                <input
                    type="hidden"
                    name="_autoresponse"
                    value="Recebi sua mensagem, obrigado por acessar meu projeto teste, espero que tenha gostado, se puder compartilhe com os amigos 😊😊😊!"
                />
                {/* Pagina de Redirecionamento */}
                <input
                    type="hidden"
                    name="_next"
                    value={FormsubDatas.redirectPage}
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={event => setName(event.target.value)}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <input
                    type="tel"
                    name="telephone"
                    placeholder="Telefone"
                    onChange={event => setTel(event.target.value)}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Mensagem..."
                    onChange={event => setMessage(event.target.value)}
                    required
                >
                </textarea>

                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </Container>
    );
}