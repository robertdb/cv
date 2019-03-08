import styled from 'styled-components'
import media from '../../media';
export const Container = styled.div`
    display: flex;
    flex: 1;
    ${media.lg`
        flex-direction: column;
    `} 
`;
export const WrapperOne = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    background-color: ${({ bg }) => bg};
    ${media.lg`
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
        padding-left: 12px;
        h2{
            margin: 0;
            padding: 15px 0px;
        }
    `} 
`;
export const WrapperTwo = styled.div`
    width: 100%;
    flex: 2;
    background-color:#fcfcfc;
    
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
    padding: 50px 30px 0 0;
`;
export const WrapperProgressBar = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 40px 20px;
    ${media.lg`
        padding: 15px 10px;
    `} 
`;

export const Description = styled.p`
    font-weight: 300;
    max-width: 900px;
    padding: 40px 20px;
    font-size: 1.7rem;
    color: #727272;
    ${media.lg`
    padding: 15px 10px;
`} 
}
`;
