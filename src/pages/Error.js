import React from "react";
import { Link } from 'react-router-dom';
import './style.css';

const Error = () => {
    return (
        <section className="error-page section">
            <div className="error-container">
                <h1>Oops! It's dead af</h1>
                <Link to="/" className="btn btn-primary">
                    Back Home motherfucker 
                </Link>
            </div>
        </section>
    );
}

export default Error;
