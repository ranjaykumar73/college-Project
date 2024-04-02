import { useState } from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import MaskedInput from 'react-text-mask';

const Registration = () => {
    const SubmittedForm = Yup.object().shape({
        first_name: Yup.string().required('Please fill the first name'),
        last_name: Yup.string().required('Please fill the last name'),
        father_name: Yup.string().required("Please fill the father's name"),
        mother_name: Yup.string().required("Please fill the mother's name "),
        gender: Yup.string().required('Please fill the gender'),
        date_of_birth: Yup.string().required('Please select date of birth'),
        email: Yup.string().required('Please fill the email address'),
        phone_number: Yup.string().required('Please fill the Mobile number'),
        employee_id: Yup.string().required('Please fill the Employee ID '),
        designation: Yup.string().required('Please fill the Designation'),
        department: Yup.string().required('Please fill the Department'),
        religion: Yup.string().required('Please fill the registraion'),
        category: Yup.string().required('Please fill the category'),
        cast: Yup.string().required('Please fill the cast'),
        joining_date: Yup.string().required('Please fill the Joining Date'),
        marital_status: Yup.string().required('Please fill the Marital Status'),
        aadhar_number: Yup.string().required('Please fill the Aadhar Number '),
    });

    return (
        <div>
            <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                father_name: '',
                mother_name: '',
                email: '',
                date_of_birth: '',
                phone_number: '',
                gender: '',
                employee_id: '',
                role: '',
                designation: '',
                department: '',
                category: '',
                religion: '',
                cast: '',
                joining_date: '',
                marital_status: '',
                aadhar_number: '',
                
            }}
            validationSchema={SubmittedForm}
                                onSubmit={() => {}}
            >
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div className="flex  flex-wrap px-4">
                    <div className="mb-6 lg:w-1/2 w-full">
                        <div className="text-primary text-xl font-bold">Staff Registration Form</div>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <form>
                    <div className="mt-8 px-4">
                        <div className="flex justify-between lg:flex-row flex-col">
                            <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        First Name
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1 " placeholder="Enter First Name" required />
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Last Name
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Last Name" required />
                                </div>
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Father's Name
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1 " placeholder="Enter Father Name" required />
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Mother's Name
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Mother Name" required />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col ">
                                    <label htmlFor="reciever-email" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Email
                                    </label>

                                    <input id="reciever-email" type="email" name="reciever-email" className="form-input flex-1" placeholder="Enter Email" required />

                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Phone Number
                                    </label>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        className="form-input flex-1"
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        required
                                    />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>Gender</label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Date of Birth
                                    </label>
                                    <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Employee Id
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder=" Employee Id" required />
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Role
                                    </label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Role </option>
                                        <option>Admin</option>
                                        <option>Teacher</option>
                                        <option>Accountant</option>
                                        <option>Libraian</option>
                                        <option>Receptionist</option>
                                        <option>Super Admin</option>
                                    </select>

                                    {/* <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter your Roll No" /> */}
                                </div>
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Designation
                                    </label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Designation</option>
                                        <option>Faculty</option>
                                        <option>Accountant</option>
                                        <option>Admin</option>
                                        <option>Receptionist</option>
                                        <option>Principle</option>
                                        <option>Director</option>
                                        <option>Librarian</option>
                                        <option>Technical Head</option>
                                    </select>
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Department
                                    </label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Department</option>
                                        <option>Academic</option>
                                        <option>Library</option>
                                        <option>Sports</option>
                                        <option>Science</option>
                                        <option>Commerece</option>
                                        <option>Arts</option>
                                        <option>Exam</option>
                                        <option>Admin</option>
                                        <option>Finance</option>
                                    </select>
                                </div>

                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Religion
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Religion" required />

                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Category
                                    </label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Category</option>
                                        <option>General</option>
                                        <option>OBC</option>
                                        <option>ST</option>
                                        <option>SC</option>
                                    </select>
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Caste
                                    </label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Caste" required />

                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Joining Date
                                    </label>
                                    <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Marital Status
                                    </label>
                                    <select className="form-select flex-1" required>
                                        <option>Select Marital Status</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Widowed</option>
                                        <option>Separated</option>
                                        <option>No Specific</option>
                                    </select>
                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Aadhar Number
                                    </label>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        className="form-input flex-1"
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                        required
                                    />
                                </div>
                                <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                    <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Pan Card</label>
                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Caste" required />
                                    <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Upload Photo</label>
                                    <input type="file" accept="image/png, image/jpeg,.pdf" className="form-input flex-1" />
                                </div>
                                {/* <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                               </div> */}
                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}

                                {/* <div className="flex  lg:flex-row flex-col sm:grid-cols-2 grid-cols-1 gap-4 ">
                                                <button type="button" className="btn btn-success gap-2">
                                                    <IconSave className="ltr:mr-2 rtl:ml-2 shrink-0" />
                                                    Save
                                                </button>
                                                <button className="btn btn-primary gap-2 px-10">Reset</button>
                                            </div> */}
                            </div>
                        </div>
                    </div>
                </form>
                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
            </div>
            </Formik>
        </div>
    );
};

export default Registration;
