import React from 'react';
import { EmployeeList } from '../employee-list/employee.list.component';
import './employee.card-list.styles.scss';

export const EmployeeCardList = props => (
        <div className='employee-card-list'>
           {props.employees.map(employee => (
                <EmployeeList key={employee.id} employee={employee} /> 
            ))} 
        </div>
);
 