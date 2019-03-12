import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo
} from './style';
import PictureProfile from '../PictureProfile';
import InfoProfile from '../InfoProfile';

class Intro extends Component {
    render() {
        const { image, name, surname, contact, career } = this.props;
        return (
            <Container>
                <WrapperOne>
                    <PictureProfile image={image} />
                </WrapperOne>
                <WrapperTwo>
                    <InfoProfile
                        name={name}
                        surname={surname}
                        data={contact}
                        career={career}
                    />
                </WrapperTwo>
            </Container>
        );
    }
}

export default Intro;