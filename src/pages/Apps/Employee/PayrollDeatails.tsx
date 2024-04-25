import React from 'react';

const PayrollDeatails = ({ nextHandler, backHandler }) => {
    function submitForm() {
        alert('submitting....');
        nextHandler();
    }
    return (
        <div>
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div className="flex justify-between flex-wrap px-4">
                    <div className="mb-6 lg:w-1/2 w-full">
                        <div className="text-primary text-xl font-bold"> Payroll </div>
                    </div>
                </div>
                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                <div className="mt-8 px-4">
                    <div className="flex justify-between lg:flex-row flex-col">
                        <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="first_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    EPF No.
                                </label>

                                <input id="first_name" type="text" name="first_name" className="form-input flex-1 " placeholder="Enter EPF no" />

                                <label htmlFor="last_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Basic Salary
                                </label>

                                <input id="last_name" type="text" name="last_name" className="form-input flex-1" placeholder="Basic Salary" />
                                </div>
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                    <label htmlFor="father_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                        Work Shift
                                    </label>
                                    <div className="flex-1">
                                        <input id="father_name" type="text" name="father_name" className="form-input flex-1 " placeholder=" Work Shift" />
                                    </div>
                                    <label htmlFor="mother_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                        Work Location
                                    </label>
                                    <div className="flex-1">
                                        <input id="mother_name" type="text" name="mother_name" className="form-input flex-1" placeholder="Work Location" />
                                    </div>
                                </div>
                                <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                <div className="text-primary text-xl font-bold">Leaves</div>

                                <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="father_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Medical Leave
                                </label>
                                <div className="flex-1">
                                    <input id="father_name" type="text" name="father_name" className="form-input flex-1 " placeholder="Number of Leaves" />
                                </div>
                                <label htmlFor="mother_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Casual Leave
                                </label>
                                <div className="flex-1">
                                    <input id="mother_name" type="text" name="mother_name" className="form-input flex-1" placeholder="Number of Leaves" />
                                </div>
                            </div>
                            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                                <label htmlFor="father_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0">
                                    Maternity Leave
                                </label>
                                <div className="flex-1">
                                    <input id="father_name" type="text" name="father_name" className="form-input flex-1 " placeholder="Number of Leaves" />
                                </div>
                                <label htmlFor="mother_name" className="ltr:mr-2 rtl:ml-2 w-28 mb-0 ">
                                    Sick Leave
                                </label>
                                <div className="flex-1">
                                    <input id="mother_name" type="text" name="mother_name" className="form-input flex-1" placeholder="Number of Leaves" />
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
            <div className="flex justify-between mt-10 px-10">
                <button type="button" className={`btn btn-primary`} onClick={backHandler}>
                    Back
                </button>
                <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={submitForm}>
                    {'Next'}
                </button>
            </div>
        </div>
    );
};

export default PayrollDeatails;
