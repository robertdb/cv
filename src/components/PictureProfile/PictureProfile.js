import React from 'react';
import {
    Container,
    Image,
    WrapperImage
} from './style';

const PictureProfile = ({ image }) => {
    return (
        <Container>
            <WrapperImage>
                <Image src={image} alt="robertdiazbejar" />
            </WrapperImage>
        </Container>
    )
}

export default PictureProfile;