import { Container } from "./style";
import ImageHeader from '../../assets/image-header.svg';


export function Header() {
    return (
        <Container>
            <div className="apresentation">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.</p>
                <button>
                    <a href="#contact">
                        botão
                    </a>
                </button>
            </div>
            <img src={ImageHeader} alt="Imagem de Passaros" />
        </Container>
    );
}