import React from 'react';
import { EmployeeCard } from './employee.card.component';
import './employee.card-list.styles.scss';

export const EmployeeCardList = props => (
        <div className='employee-card-list'>
           {props.employees.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} /> 
            ))} 
        </div>
);
