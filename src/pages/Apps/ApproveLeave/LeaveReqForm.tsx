import { useState } from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import MaskedInput from 'react-text-mask';

const LeaveReqForm = () => {
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
                            <div className="text-primary text-xl font-bold">Add Details</div>
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-1" />
                    <form>
                        <div className="mt-1 px-4">
                            <div className="flex justify-between lg:flex-row flex-col">
                                <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                
                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
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
                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Name
                                        </label>
                                        <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Name" required />
                                    </div>

                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Apply date
                                        </label>
                                        <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Leave Type
                                        </label>
                                        <select className="form-select flex-1" required>
                                            <option>Select Leave type </option>
                                            <option>Casual leave</option>
                                            <option>Sick Leave</option>
                                            <option>Meternity Leave</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                            Leave From Date
                                        </label>
                                        <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />

                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Leave to Date
                                        </label>
                                        <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />

                                        {/* <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter your Roll No" /> */}
                                    </div>
                                    <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Reason
                                        </label>
                                        <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                                        <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Note
                                        </label>
                                        <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                                    </div>

                                    <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                        <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">Attach Document</label>
                                   
                                        <input type="file" accept="image/png, image/jpeg,.pdf" className="form-input flex-1 " />
                                    
                                        <label className="ltr:mr-2 rtl:ml-2 w-28  mb-0">status</label>
                                        <div className='
                                         flex  gap-5 lg:flex-row flex-coln form-input flex-1'>
                                        <label className="flex items-center cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
                                            <span className="text-white-dark">Pending</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
                                            <span className="text-white-dark">Approve</span>
                                        </label>
                                        <label className="flex items-center cursor-pointer">
                                            <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
                                            <span className="text-white-dark">Disapprove</span>
                                        </label>
                                        </div>
                                        {/* <button type="button" className="btn btn-primary ml-[1052px]">Save</button> */}
                                    </div>
                                </div>
                            </div>
                    {/* <hr className="border-white-light dark:border-[#1b2e4b] my-1" /> */}
                        </div>
                    </form>
                </div>
            </Formik>
        </div>
    );
};

export default LeaveReqForm;
