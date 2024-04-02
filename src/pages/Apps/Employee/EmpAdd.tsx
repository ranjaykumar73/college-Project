import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconX from '../../../components/Icon/IconX';
import IconDownload from '../../../components/Icon/IconDownload';
import IconEye from '../../../components/Icon/IconEye';
import IconSave from '../../../components/Icon/IconSave';
import MaskedInput from 'react-text-mask';
import AnimateHeight from 'react-animate-height';
import IconCaretDown from '../../../components/Icon/IconCaretDown';
import IconThumbUp from '../../../components/Icon/IconThumbUp';
import IconUser from '../../../components/Icon/IconUser';
import IconHome from '../../../components/Icon/IconHome';
import Swal from 'sweetalert2';
import { Field, Form, Formik } from 'formik';
import { dA } from '@fullcalendar/core/internal-common';
import Registration from './Registration';
import Address from './Address';
import UploadDocument from './UploadDocument';

const CustomAdd: React.FC = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Invoice Add'));
    // });

    const [activeTab4, setActiveTab4] = useState<any>(1);

    const [formdata, setFormData] = useState<FormData>({
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
        present_address: {
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },
        permanent_address: {
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
        },
        emergency_contact: {
            first_name: '',
            last_name: '',
            relationship: '',
            Street_Address: '',
            Street_Address_Line_2: '',
            city: '',
            state: '',
            zipcode: '',
            country: '',
            emergency_number: '',
            emergency_email: '',
        },
        bank_details: {
            account_number: '',
            bank_name: '',
            ifsc_code: '',
            iban_number: '',
            bank_country: '',
        },
        remarks: '',
    });
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formdata,
    //         [name]: value,
    //     });
    // };
    interface FormData {
        first_name: string;
        last_name: string;
        father_name: string;
        mother_name: string;
        gender: string;
        date_of_birth: string;
        email: string;
        phone_number: string;
        employee_id: string;
        designation: string;
        department: string;
        religion: string;
        category: string;
        cast: string;
        joining_date: string;
        marital_status: string;
        aadhar_number: string;
    }
    const handleNextButtonClick = () => {
        const {
            first_name,
            last_name,
            father_name,
            mother_name,
            gender,
            date_of_birth,
            email,
            phone_number,
            employee_id,
            designation,
            department,
            religion,
            category,
            cast,
            joining_date,
            marital_status,
            aadhar_number,
        } = formdata as FormData;
        if (
            first_name.trim() !== '' &&
            last_name.trim() !== '' &&
            father_name.trim() !== '' &&
            mother_name.trim() !== '' &&
            gender.trim() !== '' &&
            date_of_birth.trim() !== '' &&
            email.trim() !== '' &&
            phone_number.trim() !== '' &&
            employee_id.trim() !== '' &&
            designation.trim() !== '' &&
            department.trim() !== '' &&
            religion.trim() !== '' &&
            category.trim() !== '' &&
            cast.trim() !== '' &&
            joining_date.trim() !== '' &&
            marital_status.trim() !== '' &&
            aadhar_number.trim() !== ''
        ) {
            console.log('all field are filld');
        } else {
            console.log('please fill in all field');
        }
    };
    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="mb-5 w-full">
                <div className="inline-block w-full ">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab4 === 1 ? 'w-[10%]' : activeTab4 === 2 ? 'w-[39%]' : activeTab4 === 3 ? 'w-[62%]' : 'w-[88%]'}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                        ></div>
                        <ul className="mb-5 grid grid-cols-4">
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(1)}
                                >
                                    <IconHome />
                                </button>
                                <span className={`${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2`}>Registration</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(2)}
                                >
                                    <IconHome />
                                </button>
                                <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Address</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(3)}
                                >
                                    <IconUser className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Documents</span>
                            </li>

                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 4 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                    onClick={() => setActiveTab4(4)}
                                >
                                    <IconThumbUp className="w-5 h-5" />
                                </button>
                                <span className={`${activeTab4 === 4 ? 'text-primary ' : ''}text-center block mt-2`}>Success</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {activeTab4 === 1 && <Registration />}
                        {activeTab4 === 2 && <Address />}

                        {activeTab4 === 3 && <UploadDocument />}
     
                    </div>
                    <div className="flex justify-between mt-10 px-10">
                        <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 - 1)}>
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                            onClick={() => {
                                activeTab4 === 4 ? null : setActiveTab4(activeTab4 + 1);
                            }}
                        >
                            {activeTab4 === 4 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomAdd;
