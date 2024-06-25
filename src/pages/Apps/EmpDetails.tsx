import React, { useState, ChangeEvent, FormEvent } from 'react';
import IconSearch from '../../components/Icon/IconSearch';
import CustomList from './Invoice/CustomList ';
import EmpList from './Employee/EmpList';

interface EmpDetails {
    rollnumber: string;
    studentName: string;
    department: string;
    admissionDate: string;
}

const EmpDetails = () => {
    const [value, setValue] = useState<EmpDetails>({
        rollnumber: '',
        studentName: '',
        department: '',
        admissionDate: '',
    });

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value: inputValue } = e.target;
        setValue((prevState) => ({ ...prevState, [name]: inputValue }));
    };

    const handleOnSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div>
            <div className="mt-">
                <EmpList />
            </div>
        </div>
    );
};

export default EmpDetails;
