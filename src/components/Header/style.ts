import styled from 'styled-components';

export const Container = styled.header`
    padding: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90vh;
    background: var(--purple-light);

    .apresentation {
        max-width: 35%;
        display: flex;
        flex-direction: column;
    }

    img {
        width: 400px;
    }

`