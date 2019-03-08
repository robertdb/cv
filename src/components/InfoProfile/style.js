import styled from 'styled-components'
import media from '../../media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-flow: column;
    padding: 40px 20px;
    ${media.lg`
    padding: 20px 20px;
 `} 
`;
export const Name = styled.h2`
    margin-bottom: 0;
    color: #939393;
    font-weight: bold;

    ${media.lg`
        text-align: center;
    `} 
`;

export const Surname = styled.h1`
    color: #F8BB10;
    text-transform: uppercase;
    ${media.lg`
    text-align: center;
 `} 
`;

export const Profession = styled.h2`
    color: #939393
    ${media.lg`
    text-align: center;
    font-size: 2rem;
 `} 
`;

export const Line = styled.hr`
`;
