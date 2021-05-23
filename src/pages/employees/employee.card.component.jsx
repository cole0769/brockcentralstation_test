import React from 'react';

import './employee.card.styles.scss';

export const EmployeeCard = props => (
    <div className='employee-card-container'>
        <img alt={props.employee.name} src={`https:/robohash.org/${props.employee.id}?set=set4&size=180x180`} />
        <h1> {props.employee.name} </h1>
        <p> {props.employee.role} </p>
        <p> {props.employee.email} </p>
    </div>
);