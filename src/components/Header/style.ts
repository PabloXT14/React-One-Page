import styled from 'styled-components';

export const Container = styled.header`
    padding: 0 6.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90vh;
    background: var(--purple-light);

    .apresentation {
        max-width: 33%;
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 2.25rem;//36px
            font-weight: 400;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.2rem;
            line-height: 2rem;
            margin-bottom: 3.75rem;
        }

        button {
            max-width: 155px;
            height: 50px;
            border: none;
            border-radius: 5px;
            background: var(--purple);

            box-shadow: 0px 5px 5px rgba(23, 23, 23, 0.1);
            transition: all .2s linear;

            &:hover {
                transform: scale(1.07);
                letter-spacing: 0.3rem;
            }

            a {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                font-size: 1.25rem;
                font-weight: 700;
                text-transform: capitalize;
                text-decoration: none;
                color: #FFF;
            }
        }
    }

    img {
        max-width: 31rem;
    }

    // RESPONSIVIDADE
    @media (max-width: 900px) {
        & {
            flex-direction: column;
            align-items: stretch;
            justify-content: space-between;
            /* gap: 5rem; */
            padding: 3rem 1.5rem 5.6rem;

            .apresentation {
                max-width: 100%;
            }

            img {
                align-self: center;
                width: 100%;
            }
        }
    }

`