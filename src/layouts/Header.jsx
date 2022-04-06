import {Component} from "react";

export default class Header extends Component {
    render() {
        return(
            <header className="d-md-flex flex-column col-md-4 text-left header-text-align ">
                <h1 className="text-white fw-bolder offset-md-1 fs-title">Learn to code by watching others</h1>
                <p className="text-white fw-4 mt-3 offset-md-1">See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how developers think is invaluable.
                </p>
            </header>
        );
    }0
}