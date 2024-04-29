import React from 'react';
import { ErrorMessage, Field, Formik ,Form} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    resume: string;
    joinig_letter: string;
    resignation_letter: string;
    other_document: string;
    remarks: string;
   
}


const UploadDocument = ({ nextHandler, backHandler }) => {

    const SubmittedForm = Yup.object().shape({
        resume: Yup.mixed().required('Please upload your resume'),
        joinig_letter: Yup.mixed().required('Please upload your joining letter'),
        resignation_letter: Yup.mixed().required('Please upload your resignation letter'),
        remarks: Yup.string().required('Please write a short note'),
       
    });

    function submitForm(values:FormValues) {
        alert('submitting....');
        nextHandler();
        console.log(values)
    }
    return (
        <Formik
        initialValues={{
            resume: '',
            joinig_letter: '',
            resignation_letter: '',
            other_document: '',
            remarks: '', 
        }}
        validationSchema={SubmittedForm}
        onSubmit={submitForm}
        >
            <Form>
        <div>
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
                                        <label className="text-lg" htmlFor='resume'>Upload Resume</label>
                                        <div className='flex-1'>
                                        <Field type="file" id='resume' name='resume' accept="image/png, image/jpeg, .pdf" className="form-input " />
                                        <ErrorMessage name="resume" render={(msg) => <div className="text-danger">{msg}</div>} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-lg" htmlFor='joinig_letter'>Upload Joining Letter</label>
                                        <div className='flex-1'>
                                        <Field type="file" id='joinig_letter' name='joinig_letter' accept="image/png, image/jpeg, .pdf" className="form-input" />
                                        <ErrorMessage name="joinig_letter" render={(msg) => <div className="text-danger">{msg}</div>} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-lg" htmlFor='resignation_letter'>Upload Resignation Letter</label>
                                        <div className='flex-1'>
                                        <Field type="file" id='resignation_letter' name='resignation_letter' accept="image/png, image/jpeg, .pdf" className="form-input " />
                                        <ErrorMessage name="resignation_letter" render={(msg) => <div className="text-danger">{msg}</div>} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-lg" htmlFor='other_document'>Upload Other Documents</label>
                                        <div className='flex-1'>
                                        <Field type="file" id='other_document' name='other_document' accept="image/png, image/jpeg, .pdf" className="form-input" />
                                        {/* <ErrorMessage name="other_document" render={(msg) => <div className="text-red-500">{msg}</div>} /> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" /> */}
                                <div className="mt-8 px-4">
                                    <label htmlFor="remarks">Remarks</label>
                                    <div className='flex-1'>
                                    <Field as="textarea" id="remarks" name="remarks" className="form-textarea min-h-[130px]" placeholder="Notes...."/>
                                     <ErrorMessage name="remarks" render={(msg) => <div className="text-danger">{msg}</div>} />
                                    </div>
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
                <button type="submit" className="btn btn-primary ltr:ml-auto rtl:mr-auto">
                    {'Finish'}
                </button>
            </div>
        </div>
        </Form>
        </Formik>
    );
};

export default UploadDocument;
