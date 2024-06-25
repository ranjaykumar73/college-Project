import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconPrinter from '../../../components/Icon/IconPrinter';
import IconDownload from '../../../components/Icon/IconDownload';
import { jsPDF } from 'jspdf';

const EmpPreview1 = () => {
    return (
        <div>
            <div >
                <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    {/* <hr/> */}
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Phone
                        </label>
                        <div className=" flex-1">9852463851</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Emergency Contact Number
                        </label>
                        <div className=" flex-1">9852463851</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Email
                        </label>
                        <div className=" flex-1">ranjay@gmail.com</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Gender
                        </label>
                        <div className=" flex-1">Male</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Date of Birth
                        </label>
                        <div className=" flex-1">01/01/1988</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Marital Status
                        </label>
                        <div className=" flex-1">Married</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Father Name
                        </label>
                        <div className=" flex-1">Will Black</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Mother Name
                        </label>
                        <div className=" flex-1">Mini Black</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Qualification
                        </label>
                        <div className=" flex-1">MS</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Work Experience
                        </label>
                        <div className=" flex-1">15Yrs</div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            Note
                        </label>
                        <div className=" flex-1"></div>
                    </div>
                    <hr />
                    <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                        <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                            PAN Number
                        </label>
                        <div className=" flex-1">ALWPG5809L</div>
                    </div>

                    <hr />
                </div>
                <div className="text-lg font-bold bg-gray-300 px-2"> Address Details </div>
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                        Present Address
                    </label>
                    <div className=" flex-1">9837 Temple Apartment</div>
                </div>
                <hr />
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                        Permanent Address
                    </label>
                    <div className=" flex-1">9837 Temple Apartment</div>
                </div>
                <hr />
            <div className="text-lg font-bold bg-gray-300 px-2 mt-4">Bank Details </div>
            <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                       Account Title
                    </label>
                    <div className=" flex-1">98</div>
                </div>
                <hr />
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                    Bank Name
                    </label>
                    <div className=" flex-1">Union Bank</div>
                </div>
                <hr />
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                    Bank Branch Name
                    </label>
                    <div className=" flex-1">New Delhi</div>
                </div>
                <hr />
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                    Bank Account Number
                    </label>
                    <div className=" flex-1">989852459616589956</div>
                </div>
                <hr />
                <div className="py-2 px-4 flex gap-5  lg:flex-row flex-col hover:bg-gray-100">
                    <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-56 mb-0">
                    IFSC Code
                    </label>
                    <div className=" flex-1">BARC1290</div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default EmpPreview1;
