import React, { Component } from 'react'
import { Button } from "react-bootstrap";

import "../assets/css/SubscribeButton.css";

export default class SubscribeButton extends Component {
    render() {
        return (
            <Button size="md" className='button-submit--green mt-3 fw-bold' type="submit">
                CLAIM YOUR FREE TRIAL
            </Button>
        );
    }
}