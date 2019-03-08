import React from 'react';
import Contact from '../Contact';
import {
    Container,
    Name,
    Surname,
    Profession,
    Line
} from './style';
import OnScrollAnimation from '../OnScrollAnimation';
const InfoProfile = ({ name, surname, data }) => {
    return (
        <Container>
            <OnScrollAnimation>
                <Name>{name}</Name>
                <Surname>{surname}</Surname>
                <Profession>{`Estudiante avanzado en Análisis de Sistemas`}</Profession>
                <Line />
                <Contact data={data} />
            </OnScrollAnimation>
        </Container>
    )
}

export default InfoProfile;