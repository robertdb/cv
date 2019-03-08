import React, { Component } from 'react';
import { Line } from 'rc-progress';
import {
    Container,
    Ability,
    Title,
    Percentage
} from './style';


class ProgressBar extends Component {
    constructor() {
        super();
        this.state = {
            percent: 0,
        };
    }

    increase = () => {
        const { percentage } = this.props;
        const percent = this.state.percent + 1;
        if (percent > percentage) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 10);
    }

    componentWillReceiveProps({ active }) {
        if (active) {
            this.increase();
        }
    }
    render() {
        const { percentage, title } = this.props;
        const { percent } = this.state;
        return (
            <Container>
                <Ability>
                    <Percentage>{`${percent}%`}</Percentage>
                    <Title>{title}</Title>
                </Ability>
                <Line
                    percent={percent}
                    strokeWidth="1"
                    strokeColor="#F8BB10"
                />
            </Container>
        );
    }
}

export default ProgressBar;