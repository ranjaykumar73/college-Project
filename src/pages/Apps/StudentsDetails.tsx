import React, { useState, ChangeEvent, FormEvent } from 'react';
import IconSearch from '../../components/Icon/IconSearch';
import CustomList from './Invoice/CustomList ';

interface StudentDetails {
    rollnumber: string;
    studentName: string;
    department: string;
    admissionDate: string;
}

const StudentsDetails: React.FC = () => {
    const [value, setValue] = useState<StudentDetails>({
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
            {/* <div className="flex justify-evenly border py-5 rounded-lg shadow-md bg-white">
                <div>
                    <label>Roll No.</label>
                    <input type="text" placeholder="Roll No." name="rollnumber" value={value.rollnumber} className="form-input p-2 border rounded-md outline-none" onChange={handleOnChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="studentName" value={value.studentName} className="form-input p-2 border rounded-md outline-none" onChange={handleOnChange} />
                </div>
                <div>
                    <label>Department</label>
                    <input type="text" name="department" value={value.department} placeholder="Department" className="form-input p-2 border rounded-md outline-none" onChange={handleOnChange} />
                </div>
                <div>
                    <label>Admission Date</label>
                    <input
                        type="date"
                        placeholder="Admission Date"
                        name="admissionDate"
                        value={value.admissionDate}
                        className="form-input p-2 border rounded-md outline-none"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mt-7">
                    <button type="button" className="btn btn-primary">
                        Search
                    </button>
                </div>
            </div> */}

            {/* <div className="relative w-1/2 mt-6">
                <label>Search by keywords </label>
                <input type="text" className="form-input peer ltr:pr-9 rtl:pl-9" placeholder="Search by Student name, Enroll Number, Registration Id etc." />
                
                <div className="absolute ltr:right-2 rtl:left-2 top-1/2 -translate-y-1/2 peer-focus:text-primary mt-3 cursor-pointer">
                    <IconSearch />
                </div>
            </div> */}
            <div className="mt-4">
                <CustomList />
            </div>
        </div>
    );
};

export default StudentsDetails;
