import React, { Component } from 'react';
import {
    Container,
    WrapperOne,
    WrapperTwo,
    Title,
    Wrapper
} from './style';
import "react-step-progress-bar/styles.css";
import Contact from '../Contact';

class ContactContainer extends Component {
    render() {
        const { contact } = this.props;
        return (

            <Wrapper>
                <Contact data={contact} />
            </Wrapper>

        );
    }
}

export default ContactContainer;