import styled from 'styled-components'
import media from '../../media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    ${media.lg`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}     
`;

export const WrapperOne = styled.div`
    display: flex;
    flex: 1;
    background-color: #fbfbfb;

`;

export const WrapperTwo = styled.div`
display: flex;
flex: 2;
`;

