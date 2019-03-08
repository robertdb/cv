import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    Wrapper
} from './style';
import "react-step-progress-bar/styles.css";
import Contact from '../Contact';

class ContactContainer extends Component {
    render() {
        const { title, bg } = this.props;
        return (
            <Container>
                <WrapperOne bg={bg}>
                    <Title>{title}</Title>
                </WrapperOne>
                <WrapperTwo>
                    <Wrapper>
                        <Contact data={[
                            { key: 'Email', value: 'robertdibejar@gmail.com' },
                            { key: 'Celular', value: '(011) 1161781402' },
                            { key: 'Dni', value: '19047655' },
                            { key: 'Localidad', value: 'Capital Federal' },
                            { key: 'Fecha de nacimiento', value: '10/02/1990' },
                        ]} />
                    </Wrapper>
                </WrapperTwo>
            </Container>
        );
    }
}

export default ContactContainer;