import { useState } from "react";
import { Container } from "./style";

const ALL_CARDS = [
    {
        imageBackground: "#FF6363",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    },
    {
        imageBackground: "#63ECFF",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    },
    {
        imageBackground: "#F363FF",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    },
    {
        imageBackground: "#63FF73",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    },
    {
        imageBackground: "#FFDD63",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    },
    {
        imageBackground: "#6663FF",
        title: "Título do Card",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl."
    }

];

interface Cards {
    imageBackground: string;
    title: string;
    description: string;
}


export function Main() {
    const [cards, setCards] = useState<Cards[]>(ALL_CARDS);

    return (
        <Container>
            {cards.map((card, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="image-card"
                            style={{ backgroundColor: `${card.imageBackground}` }}
                        >
                        </div>
                        <div className="description-card">
                            <h3 className="title-card">{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}