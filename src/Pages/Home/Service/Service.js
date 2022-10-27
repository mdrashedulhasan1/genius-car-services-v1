import React from 'react';

const Service = ({service}) => {
    const {name, img} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Service;