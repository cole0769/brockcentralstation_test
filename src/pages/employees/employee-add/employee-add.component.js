import React, {useState} from 'react'

export default function AddEmployee() {
    const [page, setPage] = useState(1);

    return (
        <div className='add-employee'>
            {/* progress bar */}
            <div className='progress-bar'>
                progress bar
            </div>
            {/* form content */}
            <div className='form-inputs'>
                {page === 1 && 'i am page 1'}
                {page === 1 && 'i am page 2'}
                {page === 1 && 'i am page 3'}
                {page === 1 && 'i am page 4'}
            </div>
        </div>
    );
}

