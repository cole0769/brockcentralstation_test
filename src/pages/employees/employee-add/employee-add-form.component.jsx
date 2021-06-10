import { useState } from 'react';
import './employee-add-form.styles.scss'

const EmployeeAddForm  = () => {
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [department, setDepartment] = useState();
    const [location, setLocation] = useState('Tempe, Arizona');
    const [hired, setHired] = useState();
    const [birthdate, setBirtdate] = useState();
    const [photo, setPhoto] = useState();
    const [tagline, setTagline] = useState();
    const [bio, setBio] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const addemployee = { name, role, department, location, hired, birthdate, photo, tagline, bio };
        
        // net ninja #29. Need to go back to setting up a JSON data source.
    }

    return (
    <div className='add-employee-form'>
        <h3>Add New Employee</h3>
        <div className='inputs'>
            <form onSubmit={handleSubmit}>
                <label>name:</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>role:</label>
                <input 
                        type="text" 
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                <label>department:</label>
                <input 
                        type="text" 
                        required
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                <label>location:</label>
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value='Tempe, Arizona'>Tempe, Arizona</option>
                        <option value='Terrel, Texas'>Terrel, Texas</option>
                        <option value='Danville, Virginia'>Danville, Virginia</option>
                    </select> 
                <label>Hired:</label>
                <input 
                        type="date" 
                        required
                        value={hired}
                        onChange={(e) => setHired(e.target.value)}
                    />
                <label>Birthday:</label>
                <input 
                        type="date" 
                        required
                        value={birthdate}
                        onChange={(e) => setBirtdate(e.target.value)}
                    />
                <label>photo:</label>
                <input 
                        type="file"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)} 
                    />
                <label>Inspired Quote:</label>
                <input 
                        type="text" 
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                <label></label>
                <label>Bio:</label>
                <textarea
                        onChange={(e) => setBio(e.target.value)} 
                        value={bio}
                    /> 
                <button>Add Employee</button>
                <p>{name}</p>
                <p>{role} for {department} department located in {location}</p>
                <p>{tagline}</p>
                <p>hired: {hired}</p>
                <p>Born: {birthdate}</p>
                <p>Bio: {bio}</p>
            </form>
        </div>

    </div>)
};

export default EmployeeAddForm;