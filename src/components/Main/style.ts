import styled from 'styled-components';

export const Container = styled.main`
    padding: 9rem 6.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem 6rem;


    .card {
        max-width: 19.5rem;
        display: flex;
        flex-direction: column;

        background: #FFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        transition: all .3s linear;

        &:hover {
            transform: translateY(-0.7rem) scale(1.03);
        }

        .image-card {
            min-height: 13.8rem;
            background: var(--purple);
        }

        .description-card {
            padding: 1.9rem;

            .title-card {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--gray-dark);
                margin-bottom: 1.6rem;
            }

            p {
                width: 100%;
                color: var(--gray);
                font-weight: 400;
                font-size: 1.1rem;
                line-height: 1.8rem;
            }
        }
    }

    @media (max-width: 900px) {
        & {
            padding: 5rem 1rem;
            gap: 2rem;
        }
    }
`;