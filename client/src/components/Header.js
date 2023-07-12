import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href = "/auth/github">Login With Github</a>
                        </li>
                        <li>
                            <a href = "/auth/google">Login With Google</a>
                        </li>
                    </ul>
                );
            default:
                return [
                    <li key = "1">
                        <Payments />
                    </li>,
                    <li key = "2">
                        <a href = "/api/logout">Logout</a>
                    </li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className = "nav-wrapper">
                    <Link 
                        to = {this.props.auth ? '/surveys' : '/'} 
                        className = "left brand-logo"
                    >
                        FeedbackFusion
                    </Link>
                    <ul className = "right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
