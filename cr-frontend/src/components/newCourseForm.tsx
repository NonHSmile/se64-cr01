import React, { useState } from 'react';

type NewCourseFormProps = {
};

const NewCourseForm = (props: NewCourseFormProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('');
    const [newCourseTitle, setNewCourseTitle] = useState<string>('');

    const handleNewCourseNumberChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseNumber(e.target.value);
      };
    
    const handleSave = () =>{
        alert(`${newCourseNumber} -- ${newCourseTitle}`)
    };
    
    return (
        <div>
            Number: <input value={newCourseNumber} onChange={handleNewCourseNumberChange} /><br />
            Title: <input value={newCourseTitle} onChange={(e) => {setNewCourseTitle(e.target.value);}} /><br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseForm;