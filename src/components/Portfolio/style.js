import styled from 'styled-components'
import media from '../../media';

export const Container = styled.div`
    display: flex;
    flex: 1;
    ${media.lg`
    flex-direction: column;
    justify-content: center;
    align-items:center;
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
        width: 100%;
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
export const Image = styled.img`
    padding: 5px;
    width: 230px;
`;
export const WrapperProgressBar = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 40px 10px;
    flex:1
`;




export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    ${media.lg`
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
    min-height: 0;
    width: 100%;

`} 
`;
export const Block = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 60px;
    ${media.lg`
        padding-right: 0px;
    `} 
`;
export const Line = styled.hr`
   display: block;
   height: 2px;
   border: 0;
   border-top: 3px solid #F8BB10;
   padding: 0;
   width: 100px; 
`;

export const TitleProject = styled.h2`
    font-weight: 500;
    margin-top: 10px;
`;
export const SliderWrap = styled.div`
    position: relative;
    div {
        position: unset !important;
    }
    ${media.lg`
        display: flex;
        flex: 1;
    `}
`;
export const Description = styled.p`
    font-weight: 300;
    max-width: 600px;
`;

