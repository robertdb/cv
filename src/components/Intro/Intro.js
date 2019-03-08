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
        const { image, name, surname } = this.props;
        return (
            <Container>
                <WrapperOne>
                    <PictureProfile image={image} />
                </WrapperOne>
                <WrapperTwo>
                    <InfoProfile
                        name={name}
                        surname={surname}
                        data={[
                            { key: 'Email', value: 'robertdibejar@gmail.com' },
                            { key: 'Celular', value: '(011) 1161781402' },
                            { key: 'Dni', value: '19047655' },
                            { key: 'Cuil', value: '20-19047655-4' },
                            { key: 'Fecha de nacimiento', value: '10/02/1990' },
                        ]}
                    />
                </WrapperTwo>
            </Container>
        );
    }
}

export default Intro;