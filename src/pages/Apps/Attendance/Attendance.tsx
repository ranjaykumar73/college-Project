import React from 'react';

const Attendance = () => {
    return (
        <div>
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                <div className="flex  flex-wrap px-4">
                    <div className="text-primary text-xl font-bold">Select Criteria</div>
                </div>
                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                <form>
                    <div className="mt-8 px-4">
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
                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Attendane Date
                                    </label>

                                    <input id="reciever-number" type="date" name="reciever-number" className="form-input flex-1" placeholder="Enter Phone number" required />
                                </div>
                                <button type="button" className="btn btn-primary mt-5 ml-[1065px]">
                                    Search
                                </button>
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
        </div>
    );
};

export default Attendance;
