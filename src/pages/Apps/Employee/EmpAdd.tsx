import {  useState } from 'react';
import IconThumbUp from '../../../components/Icon/IconThumbUp';
import IconHome from '../../../components/Icon/IconHome';
import Registration from './Registration';
import Address from './Address';
import UploadDocument from './UploadDocument';
import IconNotesEdit from '../../../components/Icon/IconNotesEdit';
import IconNotes from '../../../components/Icon/IconNotes';

const CustomAdd = () => {


    const [activeTab4, setActiveTab4] = useState<any>(1);
    function nextHandler(){
        activeTab4 === 4 ? null : setActiveTab4(activeTab4 + 1);
    }

    function backHandler(){
        activeTab4 <= 1  ? null : setActiveTab4(activeTab4 - 1);
    }

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
                                    <IconNotesEdit />
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
                                    <IconNotes className="w-5 h-5" />
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
                        {activeTab4 === 1 && <Registration nextHandler={nextHandler}/>}
                        {activeTab4 === 2 && <Address nextHandler={nextHandler} backHandler={backHandler}/>}
                        {activeTab4 === 3 && <UploadDocument nextHandler={nextHandler} backHandler={backHandler}/>}
                    </div>
                    {/* <div className="flex justify-between mt-10 px-10">
                        <button type="button" className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab4(activeTab4 - 1)}>
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                            onClick={nextHandler}
                        >
                            {activeTab4 === 4 ? 'Finish' : 'Next'}
                        </button>   
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CustomAdd;
