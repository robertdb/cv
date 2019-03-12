import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    WrapperProgressBar
} from './style';
import "react-step-progress-bar/styles.css";
import ProgressBar from '../ProgressBar';
import OnScrollAnimation from '../OnScrollAnimation';
class DualComponent extends Component {
    state = {
        active: false
    }
    render() {
        const { title, bg, children } = this.props;
        return (
            <Container>

                <WrapperOne bg={bg}>
                    <Title>{title}</Title>
                </WrapperOne>
                <WrapperTwo>
                    {children}
                </WrapperTwo>

            </Container>
        );
    }
}

export default DualComponent;