import React from 'react';

const UploadDocument = ({nextHandler, backHandler}) => {


    function submitForm(){
        alert('submitting....')
        nextHandler();
    }
    return <div>
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
                            <div className="flex justify-between mt-10 px-10">
                        <button type="button" className={`btn btn-primary`} onClick={backHandler}>
                            Back
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                            onClick={submitForm}
                        >
                            {'Next'}
                        </button>   
                    </div>
    </div>;
};

export default UploadDocument;
