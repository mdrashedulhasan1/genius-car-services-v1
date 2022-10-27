import React from 'react';
import { useState } from 'react';

const Footer = () => {
    const [year, setYear] = useState((new Date().getFullYear()));
    return (
        <div>
            <p><small>copyright@{year}</small></p>
        </div>
    );
};

export default Footer;