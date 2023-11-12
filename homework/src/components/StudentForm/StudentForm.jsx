import React, {useState, useRef} from 'react';
import TextFieldMUI from '@mui/material/TextField';

import service from '../../services/students';

function StudentForm({liftingStudentItem}) {

    const [newStudentItem, setNewStudentItem] = useState({
        name: '',
        mark: 0,
        qualified: false
    });

    const handleName = (e) => setNewStudentItem(actual => ({...actual, name: e.target.value}));
    const handleMark = (e) => setNewStudentItem(actual => ({...actual, mark: e.target.value}));
    const handleQualified = (e) => setNewStudentItem(actual => ({...actual, qualified: e.target.checked}));

    const handleSubmit = async (e) => {
        e.preventDefault();

        let addedStudentItem = await service.post(newStudentItem);
        console.log(addedStudentItem);
        liftingStudentItem(addedStudentItem);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <TextFieldMUI type="text" required value={newStudentItem.name} onChange={handleName} />
            </label>
            <label>
                Mark: <input type="number" defaultValue={newStudentItem.mark} onChange={handleMark} />
            </label>
            <label>
                Qualified: <input type="checkbox" defaultChecked={newStudentItem.qualified} onChange={handleQualified} />
            </label>
            <button>Add Student</button>
        </form>
    );
}

export default StudentForm;