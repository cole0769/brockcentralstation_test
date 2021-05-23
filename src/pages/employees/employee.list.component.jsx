import React from 'react';

import './employee.list.styles.scss';

export const EmployeeList = props => (
    <div className='employee-list-container'>
        <div className="employee-image">
            <img alt={props.employee.name} src={`https:/robohash.org/${props.employee.id}?set=set4&size=90x90`} />
            <div className="employee-details">
                <h1> {props.employee.name} </h1>
                <p> {props.employee.role} </p>
                <p> {props.employee.email} </p>
            </div>
        </div>
        <hr class="rounded"/>
    </div>
);