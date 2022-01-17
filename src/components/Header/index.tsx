import { Container } from "./style";
import ImageHeader from '../../assets/image-header.svg';


export function Header() {
    return (
        <Container>
            <div className="apresentation">
                <h1>Passaros do Presente</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam veniam pariatur, unde libero quibusdam exercitationem, optio maxime soluta doloribus eos eaque eius quasi! Accusantium quod incidunt facilis reiciendis laudantium!</p>
                <button>botão</button>
            </div>
            <img src={ImageHeader} alt="Imagem de Passaros" />
        </Container>
    );
}