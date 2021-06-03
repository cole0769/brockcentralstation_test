import React from 'react';

import './employee.card.styles.scss';

export const EmployeeCard = props => (
    <div className='employee-card-container'>
        <img alt={props.employee.name} src={`https:/robohash.org/${props.employee.id}?set=set1&size=90x90`} />
            <div className='emloyee-details'>
                <h1> {props.employee.name} </h1>
                <p> {props.employee.role} </p>
                <p> {props.employee.email} </p>
                <p> {props.employee.company.name} </p>
                <p> {props.employee.address.city} </p>
            </div>
    </div>
);