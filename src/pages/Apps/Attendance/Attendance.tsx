import React, { useEffect, useState } from 'react';
import IconFile from '../../../components/Icon/IconFile';
import { DataTable } from 'mantine-datatable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';

interface Address {
    street: string;
    city: string;
    zipcode: number;
    geo: {
        lat: number;
        lng: number;
    };
}

interface SampleData {
    id: number;
    firstName: string;
    role: string;
    attendance: string;
    attendance_date: string;
    address: Address;
    note: string;
    source: string;
    isActive: boolean;
    age: number;
    company: string;
}

const sampleData: SampleData[] = [
    {
        id: 1,
        firstName: 'Lali',
        role: 'Admin',
        attendance: 'present',
        attendance_date: '2024-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: '',
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        firstName: 'Ranjay Kumar',
        role: 'super-admin',
        attendance: 'absent',
        attendance_date: '2024-04-24',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: <input type="text" className='form-input'/>,
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 3,
        firstName: 'Rahul',
        role: 'Teacher',
        attendance: 'late',
        attendance_date: '2024-04-24',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        note: '',
        source: 'N/A',
        isActive: true,
        age: 39,
        company: 'POLARAX',
        
    },
];

const Attendance = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Basic Table'));
    // });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const initialRecords = sampleData.slice(0, pageSize);
    const [recordsData, setRecordsData] = useState([]);
    const [formData, setFormData] = useState({
        role: '',
        attendance_date: '',
    });

    const handleonChange = (e) => {
        const { name, value } = e.target;
        console.log(name, 'namsd');
        console.log(value, 'value');
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSearch = () => {
        let filteredData: SampleData[] = sampleData;

        console.log(formData, 'form data');
        if (formData.role !== 'Select Role' && formData.attendance_date !== '') {
            filteredData = filteredData.filter((item) => item.role === formData.role && new Date(item.attendance_date).getTime() === new Date(formData.attendance_date).getTime());
        } else if (formData.role !== 'Select Role') {
            filteredData = filteredData.filter((item) => item.role === formData.role);
        } else if (formData.attendance_date !== '') {
            filteredData = filteredData.filter((item) => item.attendance_date === formData.attendance_date);
        }
        console.log(filteredData, 'filter');
        setRecordsData(filteredData);
    };
    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    // useEffect(() => {
    //     const from = (page - 1) * pageSize;
    //     const to = from + pageSize;
    //     setRecordsData(sampleData.slice(from, to));
    // }, [page, pageSize]);

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
                                    <select className="form-select flex-1" value={formData.role} name="role" onChange={handleonChange}>
                                        <option value="Select Role">Select Role </option>
                                        <option value="Admin">Admin</option>
                                        <option value="Teacher">Teacher</option>
                                        <option value="Accountant">Accountant</option>
                                        <option value="Librarian">Librarian</option>
                                        <option value="Receptionist">Receptionist</option>
                                        <option value="super-admin">Super Admin</option>
                                    </select>
                                    <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                        Attendane Date
                                    </label>

                                    <input id="reciever-number" value={formData.attendance_date} type="date" name="attendance_date" onChange={handleonChange} className="form-input flex-1" />
                                </div>
                                <button type="button" className="btn btn-primary mt-2 ml-[1065px] " onClick={handleSearch}>
                                    Search
                                </button>
                                {/* <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                                <div className="mt-4 flex gap-5  lg:flex-row flex-col"></div> */}
                            </div>
                        </div>
                    </div>
                </form>
                {recordsData.length != 0 && (
                    <div className="">
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="text-primary text-xl font-bold px-4">Staff</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                            <label htmlFor="reciever-number" className="ltr:mr-2 rtl:ml-2 px-4  mb-0">
                                Set attendance for all Staff as
                            </label>

                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="text-white-dark">Present</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="text-white-dark">Late</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="text-white-dark">Absent</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="text-white-dark">Half Day</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" name="custom_radio2" className="form-radio" />
                                <span className="text-white-dark">Holiday</span>
                            </label>
                            <button type="button" className="btn btn-primary mt-2 ml-[290px]">
                                <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                Save Attendance
                            </button>
                        </div>

                        <div className="datatables mt-4">
                            <DataTable
                                noRecordsText="No results match your search query"
                                highlightOnHover
                                className="whitespace-nowrap table-hover"
                                records={recordsData}
                                columns={[
                                    { accessor: 'id', title: 'ID' },
                                    { accessor: 'firstName', title: 'Name' },
                                    { accessor: 'role', title: 'Role' },
                                    { accessor: 'attendace' },
                                    { accessor: 'attendance_date', title: 'Date' },
                                    { accessor: 'note' },
                                ]}
                                totalRecords={recordsData.length}
                                recordsPerPage={pageSize}
                                page={page}
                                onPageChange={(p) => setPage(p)}
                                recordsPerPageOptions={PAGE_SIZES}
                                onRecordsPerPageChange={setPageSize}
                                minHeight={200}
                                paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Attendance;
