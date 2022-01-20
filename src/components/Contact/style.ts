import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

export const Container = styled.div`
    background: var(--purple-light);
    padding: 5rem;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 3.17rem;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 30rem;

        input, textarea {
            width: 100%;
            border: none;
            border-radius: 0.37rem;

            font-size: 1.1rem;
            font-weight: 400;
            font-family: 'Lato', sans-serif;
            color: var(--gray-dark);
            
            transition: all .15s linear;

            &:focus {
                border: 1.5px solid var(--purple);
                outline: 2px solid ${transparentize(0.7, `#6C63FF`)};
            }
        }

        input {
            height: 4rem;
            margin-bottom: 1rem;
            padding: 1rem;
        }

        textarea {
            min-height: 11rem;
            padding: 1.25rem 1rem;
            margin-bottom: 2rem;
            resize: none;
        }

        button {
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

    @media (max-width: 900px) {
        padding: 5rem 1rem;
    }
`; 