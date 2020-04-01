
import React from 'react';
import App from 'next/app';
import Modal from '../components/Modal';
import Container from '../components/Container';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            isModal: true
        };
    }

    closeModal = () => {
        this.setState({ isModal: false });
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                {this.state.isModal && <Modal closeModal={this.closeModal} />}
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp;