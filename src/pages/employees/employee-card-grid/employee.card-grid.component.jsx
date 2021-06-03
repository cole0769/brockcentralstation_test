import React from 'react';
import { EmployeeCard } from '../employee-card/employee.card.component';
import './employee.card-grid.styles.scss';

export const EmployeeCardGrid = props => (
        <div className='employee-card-grid'>
           {props.employees.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} /> 
            ))} 
        </div>
);
