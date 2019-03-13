import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    Description
} from './style';
import "react-step-progress-bar/styles.css";
import OnScrollAnimation from '../OnScrollAnimation';

class Self extends Component {
    render() {
        const { description } = this.props;
        return (

            <WrapperTwo>
                <OnScrollAnimation>
                    <Description>
                        {description}
                    </Description>
                </OnScrollAnimation>

            </WrapperTwo>

        );
    }
}

export default Self;