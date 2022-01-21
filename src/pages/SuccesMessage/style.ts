import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--purple-light);
    display: grid;
    place-content: start center;
    padding-top: 10rem; 

    .message {
        max-width: 30rem;
        background: #FFF;
        padding: 3rem 4rem;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            text-align: center;
            font-size: 1.2rem;
        }

        a {
            text-decoration: none;
            margin-top: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;

            height: 3.12rem;
            border: none;
            border-radius: 0.3rem;
            
            background: var(--purple);
            color: #FFF;
            font-family: 'Lato', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;

            box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);

            transition: all .2s linear;

            &:hover {
                transform: scale(1.07);
                letter-spacing: 0.3rem;
            }
        }
    }

    
`;