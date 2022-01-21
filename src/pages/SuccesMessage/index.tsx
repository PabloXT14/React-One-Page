import { Container } from "./style";
import { Link } from "react-router-dom";

export function SuccessMessage() {
    return (
        <Container>
            <div className="message">
                <p>
                    Mensagem enviado com sucesso👍
                    <br />
                    <br />
                    Volte para a página principal com o botão abaixo
                </p>
                <Link to="/">⬅ Voltar</Link>
            </div>
        </Container>
    );
}