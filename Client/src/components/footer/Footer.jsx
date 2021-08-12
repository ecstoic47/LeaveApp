import React from 'react';
import './footer.css';

export default function Footer() {

    return (
        <div className="footer">
            <p>Created and Maintained by Meridian Finance and Investment Limited</p>
            <p>©️ Copyright {new Date().getFullYear()}</p>
        </div>
    )
}
