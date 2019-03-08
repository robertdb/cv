import React, { Component } from 'react';
import {
    Container,
    Image,
    CountDown,
    Title
} from './style';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDay: false,
            movieTime: ''
        };
    }

    getCountDown = () => {
        setInterval(() => {
            const { release } = this.props;
            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = release - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            this.setState({ movieTime: `${days}d ${hours}h ${minutes}m ${seconds}s` });

            // If the count down is over, write some text 
            if (distance < 0) {
                this.setState({ movieTime: `Movie Day!` });
            }
        }, 1000);
    }
    componentDidMount = () => {
        this.getCountDown();
    }

    render() {
        const { title, img } = this.props;
        const { movieTime } = this.state;
        return (
            <Container>
                <Title>
                    {title}
                </Title>
                <Image src={img} alt="event" />
                <CountDown>{movieTime}</CountDown>
            </Container>
        )
    }
}

export default Card;