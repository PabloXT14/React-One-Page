import { FormEvent, useState } from "react";
import { Container } from "./style";

interface FormaData {
    name: string;
}


export function Contact() {
    const [formDatas, setFormData] = useState({})

    function handleForm(event: FormEvent) {
        event.preventDefault();
    }



    return (
        <Container>
            <h2>Entrar em Contato</h2>
            <form onSubmit={handleForm}>
                <input type="text" name="name" placeholder="Nome" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <input type="tel" name="tel" placeholder="Telefone" required />
                <textarea name="message" placeholder="Mensagem..." required>
                </textarea>
                <button type="submit">
                    Enviar mensagem
                </button>
            </form>
        </Container>
    );
}