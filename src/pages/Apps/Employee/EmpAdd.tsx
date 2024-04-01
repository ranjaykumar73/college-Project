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

const CustomAdd = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Invoice Add'));
    // });

    const [activeTab4, setActiveTab4] = useState<any>(1);
    
    const [formdata, setFormData] = useState({
        first_name: '',
        last_name: '',
        father_name: '',
        mother_name: '',
        email: '',
        date_of_birth: '',
        phone_number: '',
        gender: '',
        admission_no: '',
        roll_no: '',
        category: '',
        religion: '',
        cast: '',
        admission_data: '',
        aadhar_number:'',
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

    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="mb-5 w-full">
                <div className="inline-block w-full ">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab4 === 1 ? 'w-[11%]' : activeTab4 === 2 ? 'w-[39%]' : activeTab4 === 3 ? 'w-[62%]' : 'w-[88%]'}
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
                                <span className={`${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2`}>Home</span>
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
                                <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Home2</span>
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
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>About</span>
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
                        {activeTab4 === 1 && (
                            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                <div className="flex justify-between flex-wrap px-4">
                                    <div className="mb-6 lg:w-1/2 w-full">
                                        <div className="text-primary text-xl font-bold">Staff Registration Form</div>
                                    </div>
                                </div>
                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                <form
                                  
                                >
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
                                                <div className="mt-10 flex  gap-5 lg:flex-row flex-col ">
                                                    <label className=' className="ltr:mr-2 rtl:ml-2 w-16  mb-0"'>Gender</label>
                                                    <select className="form-select flex-1" required>
                                                        <option>Select Gender</option>
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                    </select>
                                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-24  mb-0">
                                                        Date of Birth
                                                    </label>
                                                    <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
                                                    <label htmlFor="reciever-email" className="ltr:mr-2 rtl:ml-2 w-10  mb-0">
                                                        Email
                                                    </label>
                                                    <div className="w-56">
                                                        <input id="reciever-email" type="email" name="reciever-email" className="form-input flex-1" placeholder="Enter Email" required />
                                                    </div>
                                                    <label htmlFor="phoneMask" className="ltr:mr-2 rtl:ml-2 w-24 mb-0">
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

                                                <div className="mt-10 flex  gap-5 lg:flex-row flex-col">
                                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-20 mb-0">
                                                        Employee Id
                                                    </label>
                                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder=" Employee Id" required />
                                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-6  mb-0">
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

                                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-16  mb-0">
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
                                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-16  mb-0">
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
                                                    {/* <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter your Roll No" /> */}
                                                </div>

                                                <div className="mt-10 flex gap-5  lg:flex-row flex-col">
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
                                                    <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                        Caste
                                                    </label>
                                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Caste" required />
                                                </div>
                                                <div className="mt-10 flex  gap-5 lg:flex-row flex-col">
                                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                        Joining Date
                                                    </label>
                                                    <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
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
                                                    <input id="reciever-name" type="text" name="reciever-name" className="form-input flex-1" placeholder="Enter Aadhar Number" required />
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
                        )}
                        {activeTab4 === 2 && (
                            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                <div className="flex justify-between flex-wrap px-4">
                                    <div className="mb-6 lg:w-1/2 w-full">
                                        <div className="text-primary text-xl font-bold">Personal details</div>
                                    </div>
                                </div>
                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                <div className="mt-8 px-4">
                                    <div className="flex justify-between lg:flex-row flex-col">
                                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                            <div className="text-lg font-bold">Present Address </div>
                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address line 1" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <select id="country" name="country" className=" form-select flex-1">
                                                    <option value="">Choose Country</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="New-Zealand">New Zealand</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American-Samoa">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British">British Virgin Islands</option>
                                                    <option value="Brunei">Brunei</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Cape">Cape Verde</option>
                                                    <option value="Cayman">Cayman Islands</option>
                                                    <option value="Central-African">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Costa-Rica">Costa Rica</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czechia">Czechia</option>
                                                    <option value="Côte">Côte d'Ivoire</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El-Salvador">El Salvador</option>
                                                    <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong-Kong">Hong Kong SAR China</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Laos">Laos</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macedonia">Macedonia</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Moldova">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar (Burma)</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="North-Korea">North Korea</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian">Palestinian Territories</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russia">Russia</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Réunion">Réunion</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San-Marino">San Marino</option>
                                                    <option value="Saudi-Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra-Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon-Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South-Africa">South Africa</option>
                                                    <option value="South-Korea">South Korea</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri-Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syria">Syria</option>
                                                    <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania">Tanzania</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-Leste">Timor-Leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="UAE">United Arab Emirates</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Vietnam">Vietnam</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter State" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter your City" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                            </div>

                                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                            <div className="text-lg font-bold py-5">Permanent Address </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address line 1" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <select id="country" name="country" className=" form-select flex-1">
                                                    <option value="">Choose Country</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="New-Zealand">New Zealand</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American-Samoa">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British">British Virgin Islands</option>
                                                    <option value="Brunei">Brunei</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Cape">Cape Verde</option>
                                                    <option value="Cayman">Cayman Islands</option>
                                                    <option value="Central-African">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Costa-Rica">Costa Rica</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czechia">Czechia</option>
                                                    <option value="Côte">Côte d'Ivoire</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El-Salvador">El Salvador</option>
                                                    <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong-Kong">Hong Kong SAR China</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Laos">Laos</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macedonia">Macedonia</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Moldova">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar (Burma)</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="North-Korea">North Korea</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian">Palestinian Territories</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russia">Russia</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Réunion">Réunion</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San-Marino">San Marino</option>
                                                    <option value="Saudi-Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra-Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon-Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South-Africa">South Africa</option>
                                                    <option value="South-Korea">South Korea</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri-Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syria">Syria</option>
                                                    <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania">Tanzania</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-Leste">Timor-Leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="UAE">United Arab Emirates</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Vietnam">Vietnam</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter State" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter your City" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                            </div>

                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />

                                            <div className="text-lg font-bold ">Emergency Contact Details</div>
                                            <div className=" flex justify-around  items-center mt-4 lg:flex-row flex-col">
                                                <div>
                                                    <label>First Name</label>
                                                    <input type="text" className="form-input " placeholder="First Name" />
                                                </div>
                                                <div>
                                                    <label>Last Name</label>
                                                    <input type="text" className="form-input " placeholder="Last Name" />
                                                </div>
                                                <div>
                                                    <label>Phone Number</label>
                                                    <MaskedInput
                                                        id="phoneMask"
                                                        type="text"
                                                        placeholder="Enter your Phone Number"
                                                        className="form-input flex-1"
                                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                    />
                                                </div>
                                                <div>
                                                    <label>Relationship</label>
                                                    <input type="text" className="form-input " placeholder="ex. Mother,Father,etc" />
                                                </div>
                                            </div>
                                            {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                            <div className="text-lg font-bold py-5">Address Of Person To Contact In Case Of Emergency</div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address line 1" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Street Address
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Street Address Line 2" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Country
                                                </label>
                                                <select id="country" name="country" className=" form-select flex-1">
                                                    <option value="">Choose Country</option>
                                                    <option value="United States">United States</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="New-Zealand">New Zealand</option>
                                                    <option value="Afghanistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American-Samoa">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British">British Virgin Islands</option>
                                                    <option value="Brunei">Brunei</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Cape">Cape Verde</option>
                                                    <option value="Cayman">Cayman Islands</option>
                                                    <option value="Central-African">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Costa-Rica">Costa Rica</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czechia">Czechia</option>
                                                    <option value="Côte">Côte d'Ivoire</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican">Dominican Republic</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El-Salvador">El Salvador</option>
                                                    <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guernsey">Guernsey</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong-Kong">Hong Kong SAR China</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Iran">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Laos">Laos</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macedonia">Macedonia</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Moldova">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montenegro">Montenegro</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar (Burma)</option>
                                                    <option value="Namibia">Namibia</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherlands">Netherlands</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="North-Korea">North Korea</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau">Palau</option>
                                                    <option value="Palestinian">Palestinian Territories</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russia">Russia</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="Réunion">Réunion</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="San-Marino">San Marino</option>
                                                    <option value="Saudi-Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Serbia">Serbia</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra-Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon-Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South-Africa">South Africa</option>
                                                    <option value="South-Korea">South Korea</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri-Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syria">Syria</option>
                                                    <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania">Tanzania</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Timor-Leste">Timor-Leste</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="UAE">United Arab Emirates</option>
                                                    <option value="Uruguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Vietnam">Vietnam</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    State
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter State" />
                                            </div>
                                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    City
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter your City" />

                                                <label htmlFor="reciever-name" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                                    Postal/Zip code
                                                </label>
                                                <input id="reciever-address" type="text" name="reciever-address" className="form-input flex-1" placeholder="Enter Postal/Zip code" />
                                            </div>

                                            <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                            <div className="text-lg font-bold">Bank Details:</div>
                                            <div className="lg:w-1/2 w-full  ">
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="acno" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Account Number
                                                    </label>
                                                    <input id="acno" type="text" name="acno" className="form-input flex-1" placeholder="Enter Account Number" />
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="bank-name" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Bank Name
                                                    </label>
                                                    <input id="bank-name" type="text" name="bank-name" className="form-input flex-1" placeholder="Enter Bank Name" />
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="swift-code" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        IFSC Code
                                                    </label>
                                                    <input id="swift-code" type="text" name="swift-code" className="form-input flex-1" placeholder="Enter IFSC Code" />
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="iban-code" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Branch Name
                                                    </label>
                                                    <input id="iban-code" type="text" name="iban-code" className="form-input flex-1" placeholder="Enter Branch Name" />
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <label htmlFor="country" className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                                        Country
                                                    </label>
                                                    <select id="country" name="country" className="form-select flex-1">
                                                        <option value="">Choose Country</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Sweden">Sweden</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="Norway">Norway</option>
                                                        <option value="New-Zealand">New Zealand</option>
                                                        <option value="Afghanistan">Afghanistan</option>
                                                        <option value="Albania">Albania</option>
                                                        <option value="Algeria">Algeria</option>
                                                        <option value="American-Samoa">Andorra</option>
                                                        <option value="Angola">Angola</option>
                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Armenia">Armenia</option>
                                                        <option value="Aruba">Aruba</option>
                                                        <option value="Austria">Austria</option>
                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                        <option value="Bahamas">Bahamas</option>
                                                        <option value="Bahrain">Bahrain</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Barbados">Barbados</option>
                                                        <option value="Belarus">Belarus</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Belize">Belize</option>
                                                        <option value="Benin">Benin</option>
                                                        <option value="Bermuda">Bermuda</option>
                                                        <option value="Bhutan">Bhutan</option>
                                                        <option value="Bolivia">Bolivia</option>
                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                        <option value="Botswana">Botswana</option>
                                                        <option value="Brazil">Brazil</option>
                                                        <option value="British">British Virgin Islands</option>
                                                        <option value="Brunei">Brunei</option>
                                                        <option value="Bulgaria">Bulgaria</option>
                                                        <option value="Burkina">Burkina Faso</option>
                                                        <option value="Burundi">Burundi</option>
                                                        <option value="Cambodia">Cambodia</option>
                                                        <option value="Cameroon">Cameroon</option>
                                                        <option value="Cape">Cape Verde</option>
                                                        <option value="Cayman">Cayman Islands</option>
                                                        <option value="Central-African">Central African Republic</option>
                                                        <option value="Chad">Chad</option>
                                                        <option value="Chile">Chile</option>
                                                        <option value="China">China</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Comoros">Comoros</option>
                                                        <option value="Costa-Rica">Costa Rica</option>
                                                        <option value="Croatia">Croatia</option>
                                                        <option value="Cuba">Cuba</option>
                                                        <option value="Cyprus">Cyprus</option>
                                                        <option value="Czechia">Czechia</option>
                                                        <option value="Côte">Côte d'Ivoire</option>
                                                        <option value="Djibouti">Djibouti</option>
                                                        <option value="Dominica">Dominica</option>
                                                        <option value="Dominican">Dominican Republic</option>
                                                        <option value="Ecuador">Ecuador</option>
                                                        <option value="Egypt">Egypt</option>
                                                        <option value="El-Salvador">El Salvador</option>
                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                        <option value="Eritrea">Eritrea</option>
                                                        <option value="Estonia">Estonia</option>
                                                        <option value="Ethiopia">Ethiopia</option>
                                                        <option value="Fiji">Fiji</option>
                                                        <option value="Finland">Finland</option>
                                                        <option value="France">France</option>
                                                        <option value="Gabon">Gabon</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Ghana">Ghana</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="Grenada">Grenada</option>
                                                        <option value="Guatemala">Guatemala</option>
                                                        <option value="Guernsey">Guernsey</option>
                                                        <option value="Guinea">Guinea</option>
                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                        <option value="Guyana">Guyana</option>
                                                        <option value="Haiti">Haiti</option>
                                                        <option value="Honduras">Honduras</option>
                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                        <option value="Hungary">Hungary</option>
                                                        <option value="Iceland">Iceland</option>
                                                        <option value="India">India</option>
                                                        <option value="Indonesia">Indonesia</option>
                                                        <option value="Iran">Iran</option>
                                                        <option value="Iraq">Iraq</option>
                                                        <option value="Ireland">Ireland</option>
                                                        <option value="Israel">Israel</option>
                                                        <option value="Italy">Italy</option>
                                                        <option value="Jamaica">Jamaica</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Jordan">Jordan</option>
                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                        <option value="Kenya">Kenya</option>
                                                        <option value="Kuwait">Kuwait</option>
                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                        <option value="Laos">Laos</option>
                                                        <option value="Latvia">Latvia</option>
                                                        <option value="Lebanon">Lebanon</option>
                                                        <option value="Lesotho">Lesotho</option>
                                                        <option value="Liberia">Liberia</option>
                                                        <option value="Libya">Libya</option>
                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                        <option value="Lithuania">Lithuania</option>
                                                        <option value="Luxembourg">Luxembourg</option>
                                                        <option value="Macedonia">Macedonia</option>
                                                        <option value="Madagascar">Madagascar</option>
                                                        <option value="Malawi">Malawi</option>
                                                        <option value="Malaysia">Malaysia</option>
                                                        <option value="Maldives">Maldives</option>
                                                        <option value="Mali">Mali</option>
                                                        <option value="Malta">Malta</option>
                                                        <option value="Mauritania">Mauritania</option>
                                                        <option value="Mauritius">Mauritius</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Moldova">Moldova</option>
                                                        <option value="Monaco">Monaco</option>
                                                        <option value="Mongolia">Mongolia</option>
                                                        <option value="Montenegro">Montenegro</option>
                                                        <option value="Morocco">Morocco</option>
                                                        <option value="Mozambique">Mozambique</option>
                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                        <option value="Namibia">Namibia</option>
                                                        <option value="Nepal">Nepal</option>
                                                        <option value="Netherlands">Netherlands</option>
                                                        <option value="Nicaragua">Nicaragua</option>
                                                        <option value="Niger">Niger</option>
                                                        <option value="Nigeria">Nigeria</option>
                                                        <option value="North-Korea">North Korea</option>
                                                        <option value="Oman">Oman</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Palau">Palau</option>
                                                        <option value="Palestinian">Palestinian Territories</option>
                                                        <option value="Panama">Panama</option>
                                                        <option value="Papua">Papua New Guinea</option>
                                                        <option value="Paraguay">Paraguay</option>
                                                        <option value="Peru">Peru</option>
                                                        <option value="Philippines">Philippines</option>
                                                        <option value="Poland">Poland</option>
                                                        <option value="Portugal">Portugal</option>
                                                        <option value="Puerto">Puerto Rico</option>
                                                        <option value="Qatar">Qatar</option>
                                                        <option value="Romania">Romania</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Rwanda">Rwanda</option>
                                                        <option value="Réunion">Réunion</option>
                                                        <option value="Samoa">Samoa</option>
                                                        <option value="San-Marino">San Marino</option>
                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                        <option value="Senegal">Senegal</option>
                                                        <option value="Serbia">Serbia</option>
                                                        <option value="Seychelles">Seychelles</option>
                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Slovakia">Slovakia</option>
                                                        <option value="Slovenia">Slovenia</option>
                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                        <option value="Somalia">Somalia</option>
                                                        <option value="South-Africa">South Africa</option>
                                                        <option value="South-Korea">South Korea</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                        <option value="Sudan">Sudan</option>
                                                        <option value="Suriname">Suriname</option>
                                                        <option value="Swaziland">Swaziland</option>
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                        <option value="Tajikistan">Tajikistan</option>
                                                        <option value="Tanzania">Tanzania</option>
                                                        <option value="Thailand">Thailand</option>
                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                        <option value="Togo">Togo</option>
                                                        <option value="Tonga">Tonga</option>
                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                        <option value="Tunisia">Tunisia</option>
                                                        <option value="Turkey">Turkey</option>
                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                        <option value="Uganda">Uganda</option>
                                                        <option value="Ukraine">Ukraine</option>
                                                        <option value="UAE">United Arab Emirates</option>
                                                        <option value="Uruguay">Uruguay</option>
                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                        <option value="Vanuatu">Vanuatu</option>
                                                        <option value="Venezuela">Venezuela</option>
                                                        <option value="Vietnam">Vietnam</option>
                                                        <option value="Yemen">Yemen</option>
                                                        <option value="Zambia">Zambia</option>
                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>

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

                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                            </div>
                        )}

                        {activeTab4 === 3 && (
                            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                                <div className="flex justify-between flex-wrap px-4">
                                    <div className="mb-6 lg:w-1/2 w-full">
                                        <div className="text-primary text-xl font-bold"> Upload Document </div>
                                    </div>
                                </div>

                                <div className="mt-8 px-4">
                                    <div className="flex justify-between lg:flex-row flex-col">
                                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                            <div className="space-y-2 p-4  text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                <div className="flex justify-evenly mt-5 lg:flex-row flex-col gap-4">
                                                    <div>
                                                        <label className="text-lg">Upload Resume</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input " />
                                                    </div>
                                                    <div>
                                                        <label className="text-lg">Upload Joining Letter</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input" />
                                                    </div>
                                                    <div>
                                                        <label className="text-lg">Upload Resignation Letter</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input " />
                                                    </div>
                                                    <div>
                                                        <label className="text-lg">Upload Other Documents</label>
                                                        <input type="file" accept="image/png, image/jpeg, .pdf" className="form-input" />
                                                    </div>
                                                </div>
                                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                                <div className="mt-8 px-4">
                                                    <label htmlFor="notes">Remarks</label>
                                                    <textarea id="notes" name="notes" className="form-textarea min-h-[130px]" placeholder="Notes...."></textarea>
                                                </div>
                                            </div>

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

                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                            </div>
                        )}
                        {/* <p className="mb-5">{activeTab4 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

                                    <p className="mb-5">{activeTab4 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

                                    <p className="mb-5">{activeTab4 === 3 && 'Wonderful transition effects.'}</p> */}
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
