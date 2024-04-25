import { useState } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import MaskedInput from 'react-text-mask';

interface FormValues {
    first_name: string;
    last_name: string;
    father_name: string;
    mother_name: string;
    email: string;
    date_of_birth: string;
    phone_number: string;
    gender: string;
    employee_id: string;
    role: string;
    designation: string;
    department: string;
    category: string;
    religion: string;
    caste: string;
    joining_date: string;
    marital_status: string;
    aadhar_number: string;
    pan_card: string;
    upload_photo: string;
}
const Registration = ({ nextHandler }) => {
    // const [isFormValid, setIsFormValid] = useState(false);
    const SubmittedForm = Yup.object().shape({
        first_name: Yup.string().required('Please fill the first name'),
        last_name: Yup.string().required('Please fill the last name'),
        father_name: Yup.string().required("Please fill the father's name"),
        mother_name: Yup.string().required("Please fill the mother's name "),
        gender: Yup.string().required('Please select the gender'),
        date_of_birth: Yup.string().required('Please select date of birth'),
        email: Yup.string().email('Invalid Email').required('Please fill the email address'),
        phone_number: Yup.string()
            .matches(/^\(\d{3}\)\s\d{3}\s\d{4}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Mobile number'),
        employee_id: Yup.number().required('Please fill the Employee ID '),
        role: Yup.string().required('Please fill the Role'),
        designation: Yup.string().required('Please Select the Designation'),
        department: Yup.string().required('Please fill the Department'),
        religion: Yup.string().required('Please fill the registraion'),
        category: Yup.string().required('Please fill the category'),
        caste: Yup.string().required('Please fill the caste'),
        joining_date: Yup.string().required('Please fill the Joining Date'),
        marital_status: Yup.string().required('Please Select the Marital Status'),
        aadhar_number: Yup.string()
            .matches(/^\d{4}\s\d{4}\s\d{4}$/, 'Aadhar number must be exactly 12 digits')
            .required('Please fill the Aadhar Number'),
        pan_card: Yup.string()
            .matches(/^[A-Z0-9]{10}$/, 'Invalid Pan Card')
            .required('Please fill the PAN Number'),
        upload_photo: Yup.mixed().required('Please Select file '),
    });

    // Function to handle form submission
    const handleSubmit = (values: FormValues ) => {
        alert('submitting....')
        nextHandler();
    };

    return (
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
                caste: '',
                joining_date: '',
                marital_status: '',
                aadhar_number: '',
                pan_card: '',
                upload_photo: '',
            }}
            validationSchema={SubmittedForm}
            onSubmit={handleSubmit}
        >
            {({ errors, submitCount, touched, isValid }) => {
                // setIsFormValid(isValid);
                // if(isValid !== isFormValid){
                //     setIsFormValid(isValid)
                // }
                return (
                    <Form>
                        <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                            <div className="flex  flex-wrap px-4">
                                <div className="mb-6 lg:w-1/2 w-full">
                                    <div className="text-primary text-xl font-bold">Staff Registration Form</div>
                                </div>
                            </div>
                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                            <div className="mt-8 px-4">
                                <div className="flex justify-between lg:flex-row flex-col">
                                    <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                First Name
                                            </label>
                                            <div className=" flex-1 ">
                                                <Field  id="first_name" type="text" name="first_name" className="form-input flex-1 " placeholder="Enter First Name" />

                                                <ErrorMessage name="first_name" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="last_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Last Name
                                            </label>
                                            <div className="flex-1">
                                                <Field id="last_name" type="text" name="last_name" className="form-input flex-1" placeholder="Enter Last Name" required />
                                                <ErrorMessage name="last_name" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="father_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Father's Name
                                            </label>
                                            <div className="flex-1">
                                                <Field id="father_name" type="text" name="father_name" className="form-input flex-1 " placeholder="Enter Father Name" required />
                                                <ErrorMessage name="father_name" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="mother_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                                Mother's Name
                                            </label>
                                            <div className="flex-1">
                                                <Field id="mother_name" type="text" name="mother_name" className="form-input flex-1" placeholder="Enter Mother Name" required />
                                                <ErrorMessage name="mother_name" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col ">
                                            <label htmlFor="email" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Email
                                            </label>
                                            <div className="flex-1">
                                                <Field id="email" type="email" name="email" className="form-input flex-1" placeholder="Enter Email" required />
                                                <ErrorMessage name="email" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="phone_number" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Phone Number
                                            </label>
                                            <div className=" flex-1">
                                                <Field
                                                    id="phone_number"
                                                    type="text"
                                                    name="phone_number"
                                                  
                                                    render={({ field }) => (
                                                        <MaskedInput
                                                            {...field}
                                                            className="form-input"
                                                            placeholder="Enter Phone Number"
                                                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />
                                                    )}
                                                />
                                                <ErrorMessage name="phone_number" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="gender" className=' className="ltr:mr-2 rtl:ml-2 w-28  mb-0"'>
                                                Gender
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="gender" className="form-select flex-1" name="gender" required>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Others</option>
                                                </Field>
                                                <ErrorMessage name="gender" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="date_of_birth" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Date of Birth
                                            </label>
                                            <div className="flex-1">
                                                <Field id="date_of_birth" type="date" name="date_of_birth" className="form-input flex-1" required />
                                                <ErrorMessage name="date_of_birth" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="employee_id" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Employee Id
                                            </label>
                                            <div className="flex-1">
                                                <Field id="employee_id" type="number" name="employee_id" className="form-input flex-1" placeholder=" Employee Id" required />
                                                <ErrorMessage name="employee_id" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="role" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Role
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="role" name="role" className="form-select flex-1" required>
                                                    <option value="">Select Role </option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Teacher">Teacher</option>
                                                    <option value="Accountant">Accountant</option>
                                                    <option value="Libraian">Libraian</option>
                                                    <option value="Receptionist">Receptionist</option>
                                                    <option value="Super Admin">Super Admin</option>
                                                </Field>
                                                <ErrorMessage name="role" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="designation" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Designation
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="designation" name="designation" className="form-select flex-1" required>
                                                    <option value="">Select Designation</option>
                                                    <option value="Faculty">Faculty</option>
                                                    <option value="Accountant">Accountant</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Receptionist">Receptionist</option>
                                                    <option value="Principle">Principle</option>
                                                    <option value="Director">Director</option>
                                                    <option value="Librarian">Librarian</option>
                                                    <option value="Technical Head">Technical Head</option>
                                                </Field>
                                                <ErrorMessage name="designation" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="department" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Department
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="department" name="department" className="form-select flex-1" required>
                                                    <option value="">Select Department</option>
                                                    <option value="Academic">Academic</option>
                                                    <option value="Library">Library</option>
                                                    <option value="Sports">Sports</option>
                                                    <option value="Science">Science</option>
                                                    <option value="Commerece">Commerece</option>
                                                    <option value="Arts">Arts</option>
                                                    <option value="Exam">Exam</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="Finance">Finance</option>
                                                </Field>
                                                <ErrorMessage name="department" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                            <label htmlFor="religion" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Religion
                                            </label>
                                            <div className="flex-1">
                                                <Field id="religion" type="text" name="religion" className="form-input flex-1" placeholder="Enter Religion" required />
                                                <ErrorMessage name="religion" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="category" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Category
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="category" name="category" className="form-select flex-1" required>
                                                    <option value="">Select Category</option>
                                                    <option value="General">General</option>
                                                    <option value="OBC">OBC</option>
                                                    <option value="ST">ST</option>
                                                    <option value="SC">SC</option>
                                                </Field>
                                                <ErrorMessage name="category" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor=" caste" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Caste
                                            </label>
                                            <div className="flex-1">
                                                <Field id="caste" type="text" name="caste" className="form-input flex-1" placeholder="Enter Caste" required />
                                                <ErrorMessage name="caste" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="joining_date" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Joining Date
                                            </label>
                                            <div className="flex-1">
                                                <Field id="joining_date" type="date" name="joining_date" className="form-input flex-1" placeholder="Enter Phone number" required />
                                                <ErrorMessage name="joining_date" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="marital_status" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Marital Status
                                            </label>
                                            <div className="flex-1">
                                                <Field as="select" id="marital_status" name="marital_status" className="form-select flex-1" required>
                                                    <option value="">Select Marital Status</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="No Specific">No Specific</option>
                                                </Field>
                                                <ErrorMessage name="marital_status" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="aadhar_number" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                                Aadhar Number
                                            </label>
                                            <div className="flex-1">
                                                <Field
                                                    id="aadhar_number"
                                                    type="text"
                                                    name="aadhar_number"
                                                    placeholder="Enter Aadhar Number"
                                                    className="form-input flex-1"
                                                    render={({ field }) => (
                                                        <MaskedInput
                                                            {...field}
                                                            className='form-input'  placeholder="Enter Aadhar Number"  mask={[ /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                        />
                                                    )}
                                                />
                                                <ErrorMessage name="aadhar_number" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                        <div className="mt-4 flex  gap-5 lg:flex-row flex-col">
                                            <label htmlFor="pan_card" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Pan Card
                                            </label>
                                            <div className="flex-1">
                                                <Field id="pan_card" type="text" name="pan_card" className="form-input flex-1" placeholder="Enter PAN Number" required />
                                                <ErrorMessage name="pan_card" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                            <label htmlFor="upload_photo" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                Upload Photo
                                            </label>
                                            <div className="flex-1">
                                                <Field id="upload_photo" type="file" name="upload_photo" accept="image/png, image/jpeg,.pdf" className="form-input flex-1" />
                                                <ErrorMessage name="upload_photo" render={(msg) => <div className="text-red-500">{msg}</div>} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <button type="submit" onClick={handleSubmit}>Sbmit</button> */}
                        <div className="flex justify-between mt-10 px-10">
                            <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={handleSubmit}>
                                {'Next'}
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default Registration;
