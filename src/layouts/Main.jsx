import {Component} from "react";
import SubscribeForm from "../components/SubscribeForm";

import "react-bootstrap";

export default class Main extends Component {
    render() {
        return (
            <main className="Main mt-4 col-md-5 offset-md-1">
                <SubscribeForm />
            </main>
        );
    }
}