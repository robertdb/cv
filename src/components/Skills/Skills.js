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
        const { data } = this.props;
        return (
            <OnScrollAnimation onEnterExec={() => this.setState({ active: true })} notAnimated>
                <WrapperProgressBar>
                    {data.map((item, index) => {
                        const { title, percentage } = item;
                        return (
                            <ProgressBar
                                key={index}
                                percentage={percentage}
                                title={title}
                                active={this.state.active}
                            />
                        );
                    })
                    }
                </WrapperProgressBar>
            </OnScrollAnimation>
        );
    }
}

export default Skills;