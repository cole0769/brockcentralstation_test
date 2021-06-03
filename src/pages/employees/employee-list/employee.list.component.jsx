import React from 'react';

import './employee.list.styles.scss';

export const EmployeeList = props => (
    <div className='employee-list-container'>
        <div className="employee-image">
            <img alt={props.employee.name} src={`https:/robohash.org/${props.employee.id}?set=set1&size=90x90`} />
            <div className='employee-name'>
                <h1> {props.employee.name} </h1>
            </div>
            <div className="employee-details">
                <p> {props.employee.role} </p>
                <p> email: {props.employee.email} </p>
                <p> division: {props.employee.company.name} </p>
                <p> location: {props.employee.address.city} </p>
            </div>
        </div>
        <hr class="rounded"/>
    </div>
);