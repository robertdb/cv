import React from 'react';
import {
    Container,
    Block,
    Key,
    Value
} from './style';
import OnScrollAnimation from '../OnScrollAnimation';
const Contact = ({ data }) => {
    return (
        <Container>

            {data.map((item, index) => {
                const { key, value } = item;
                return (
                    <Block key={index}>
                        <OnScrollAnimation>
                            <Key>{key}</Key>
                            <Value>{value}</Value>
                        </OnScrollAnimation>
                    </Block>
                );
            })}

        </Container>
    )
}

export default Contact;