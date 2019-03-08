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
class Skills extends Component {
    state = {
        active: false
    }
    render() {
        const { title, bg } = this.props;
        return (
            <Container>

                <WrapperOne bg={bg}>
                    <Title>{title}</Title>
                </WrapperOne>
                <WrapperTwo>
                    <OnScrollAnimation onEnterExec={() => this.setState({ active: true })} notAnimated>
                        <WrapperProgressBar>

                            <ProgressBar percentage={70} title={'Git'} active={this.state.active} />
                            <ProgressBar percentage={50} title={'Javascript'} active={this.state.active} />
                            <ProgressBar percentage={40} title={'React'} active={this.state.active} />
                            <ProgressBar percentage={40} title={'React Native'} active={this.state.active} />
                            <ProgressBar percentage={40} title={'Java'} active={this.state.active} />
                            <ProgressBar percentage={40} title={'Python'} active={this.state.active} />

                        </WrapperProgressBar>
                    </OnScrollAnimation>
                </WrapperTwo>

            </Container>
        );
    }
}

export default Skills;