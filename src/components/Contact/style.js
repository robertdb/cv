import styled from 'styled-components'
import media from '../../media';
export const Container = styled.div`
    display: flex;
    flex:1;
    justify-content: space-between;
    ${media.lg`
    font-size: 14px
    flex-wrap: wrap;
    aling-items:center;
    justify-content: center;
    text-align: center;
 `} 
`;
export const Block = styled.div`
    margin-right: 8px;
    ${media.lg`
        text-aling: center;
        width: 100%;
        margin: 10px 0px;
    `}
`;
export const Key = styled.div`
    margin: 15px 0px;
    font-weight: bold;
    color: #727272;
    font-size: 15px
    ${media.lg`
    font-size: 14px
    font-weight: bold;
    margin: 0px 0px;
 `} 
`;
export const Value = styled.div`
    color: #939393;
    font-size: 15px;
    ${media.lg`
    font-size: 14px
 `} 
`;

