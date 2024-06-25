import React, { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../../../store/themeConfigSlice';
import IconFile from '../../../components/Icon/IconFile';
import IconPrinter from '../../../components/Icon/IconPrinter';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconEdit from '../../../components/Icon/IconEdit';
import IconEye from '../../../components/Icon/IconEye';
import ModalPaySlip from './ModalPaySlip';


interface SampleData {
    id: number;
    firstName: string;
    role: string;
    department:string;
    attendance: string;
    attendance_date: string;
    phone:string;
    address: Address;
    note: string;
    source: string;
    isActive: boolean;
    age: number;
    company: string;
}


const Payroll = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Lalit',
            role: 'Admin',
            attendance: 'present',
            attendance_date: '2024-05-28',
            designation:'super-admin',
            phone:'9852463851',
            status: { tooltip: 'genrated', color: 'danger' },
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
            name: 'Ranjay Kumar',
            role: 'super-admin',
            attendance: 'absent',
            attendance_date: '2024-04-28',
            designation:'accountant',
            phone:'9852463851',
            status: { tooltip: 'Paid', color: 'success' },
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
            id: 3,
            name: 'Rahul',
            role: 'Teacher',
            department: 'Academic',
            phone: '9863232323',
            attendance: 'late',
            attendance_date: '2024-06-28',
            designation:'faculty',
            status: { tooltip: 'Paid', color: 'success' },
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
    ]);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setPageTitle('Basic Table'));
    // });
    // const [page, setPage] = useState(1);
    // const PAGE_SIZES = [10, 20, 30, 50, 100];
    // const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    // const initialRecords = sampleData.slice(0, pageSize);
    // const [recordsData, setRecordsData] = useState([]);
    const col = ['id', 'name', 'leave_type', 'leave_date', 'days', 'email', 'apply_date',];
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'id'));
    const [recordsData, setRecordsData] = useState([]);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });
    const [modal5, setModal5] = useState<boolean>(false);
    useEffect(() => {
        setPage(1);
    }, [pageSize]);
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
        // Filter data based on the selected values
        const selectedMonthObject = new Date(formData.attendance_date);
        const selectedMonth = selectedMonthObject.getMonth();
        const filteredData = items.filter((item) => {
            console.log(formData.role,"formrole")
            console.log(item.role,"itemrole")
            console.log(formData.attendance_date,"formattendance")
            console.log(item.attendance_date,"itemattendance")
            return (formData.role === '' || item.role === formData.role) &&
                (new Date(item.attendance_date).getMonth() === selectedMonth);  
        });
        setRecordsData(filteredData);
        console.log(filteredData)
        // console.log("search button clicked")
        // // let filteredData: SampleData[] = sampleData;
        // console.log(filteredData,"filter")
        // const selectedMonthObject = new Date(formData.attendance_date)
        // const selectedMonth = selectedMonthObject.getMonth()
        // console.log(selectedMonth, 'selectedMOnth')
        // if (formData.role !== 'Select Role' && formData.attendance_date !== '') {
        //     filteredData = filteredData.filter(item => item.role === formData.role && new Date(item.attendance_date).getMonth() === selectedMonth);
        //    // console.log('filteredDataadjshad', filteredData)
        //    // console.log("sscsjchudc")
        // } else if (formData.role !== 'Select Role') {
        //     filteredData = filteredData.filter(item => item.role === formData.role);
        //     //console.log("rrrrrrrrrrrrrr")
        // } else if (formData.attendance_date !== '') {
        //     filteredData = filteredData.filter(item => item.attendance_date === formData.attendance_date);
        //    // console.log("eeeeeeeeeeeeeeee")
        // }
        //    // console.log(filteredData,"filteredData")
        // setRecordsData(filteredData);
    };
    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    //asfswdfwf

    // useEffect(() => {
    //     const from = (page - 1) * pageSize;
    //     const to = from + pageSize;
    //     setRecordsData([...initialRecords.slice(from, to)]);
    // }, [page, pageSize, initialRecords]);

    // useEffect(() => {
    //     setInitialRecords(() => {
    //         return items.filter((item: any) => {
    //             return (
    //                 item.invoice.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.name.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.email.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.apply_date.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.leave_type.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.amount.toLowerCase().includes(search.toLowerCase()) ||
    //                 item.status.tooltip.toLowerCase().includes(search.toLowerCase())
    //             );
    //         });
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const header = ['id', 'name', 'leave_type', 'leave_date', 'days', 'email', 'apply_date', 'tooltip'];

    // const formatDate = (date: any) => {
    //     if (date) {
    //         const dt = new Date(date);
    //         const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
    //         const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
    //         return day + '/' + month + '/' + dt.getFullYear();
    //     }
    //     return '';
    // };

    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecordsData(items.filter((user) => user.id !== id));
                setInitialRecords(items.filter((user) => user.id !== id));
                setItems(items.filter((user) => user.id !== id));
                setSearch('');
                setSelectedRecords([]);
            } else {
                let selectedRows = selectedRecords || [];
                const ids = selectedRows.map((d: any) => {
                    return d.id;
                });
                const result = items.filter((d) => !ids.includes(d.id as never));
                setRecordsData(result);
                setInitialRecords(result);
                setItems(result);
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: items,
            },
        });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = items;
        let filename = 'table';

        let newVariable: any;
        newVariable = window.navigator;

        if (type === 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type === 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            // eslint-disable-next-line array-callback-return
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                rowhtml += '<tr>';
                // eslint-disable-next-line array-callback-return
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type === 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            // eslint-disable-next-line array-callback-return
            records.map((item: any) => {
                // eslint-disable-next-line array-callback-return
                columns.map((d: any, index: any) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data1 = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link1 = document.createElement('a');
                link1.setAttribute('href', data1);
                link1.setAttribute('download', filename + '.txt');
                link1.click();
            } else {
                var blob1 = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob1, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: any) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };

    return (
        <div>
            <div className="panel flex justify-between items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                <div className="ltr:mr-3 text-primary  text-xl flex justify-between flex-wrap font-bold rtl:ml-3">Payroll</div>
            </div>
                    <div className="panel mt-4 px-0 flex-1 ">      
                    <form>
                        <div className="mt-8 px-4">
                            <div className="flex justify-between lg:flex-row flex-col">
                                <div className=" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                                    <div className="flex gap-5 -mt-4 lg:flex-row flex-col">
                                        <label htmlFor="role" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Role
                                        </label>
                                        <select id="role" className="form-select flex-1" value={formData.role} name="role" onChange={handleonChange}>
                                            <option value="Select Role">Select Role </option>
                                            <option value="Admin">Admin</option>
                                            <option value="Teacher">Teacher</option>
                                            <option value="Accountant">Accountant</option>
                                            <option value="Librarian">Librarian</option>
                                            <option value="Receptionist">Receptionist</option>
                                            <option value="super-admin">Super Admin</option>
                                        </select>
                                        <label htmlFor="attendance_date" className="ltr:mr-2 rtl:ml-2 w-28  mb-0">
                                            Month & Year
                                        </label>
                                        <input type="month" id="attendance_date" value={formData.attendance_date} name="attendance_date" className="form-input flex-1" onChange={handleonChange} />
                                        <button type="button" className="btn btn-primary gap-2 float-end" onClick={handleSearch}>
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {recordsData.length != 0 && (
                    <div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="text-primary text-xl font-bold px-4">Staff List</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        {/* <div className="mt-4 flex gap-5  lg:flex-row flex-col"></div> */}
                                <ModalPaySlip modal5={modal5} setModal5={setModal5}/>
                        <div className="px-4 mt-6">
                            <div className="flex md:items-center justify-between md:flex-row flex-col mb-4.5 gap-5">
                                <div className="flex items-center flex-wrap">
                                    <button type="button" onClick={() => exportTable('csv')} className="btn btn-primary btn-sm m-1 ">
                                        <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                        CSV
                                    </button>
                                    <button type="button" onClick={() => exportTable('txt')} className="btn btn-primary btn-sm m-1">
                                        <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                        TXT
                                    </button>

                                    <button type="button" className="btn btn-primary btn-sm m-1" onClick={handleDownloadExcel}>
                                        <IconFile className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                        EXCEL
                                    </button>

                                    <button type="button" onClick={() => exportTable('print')} className="btn btn-primary btn-sm m-1">
                                        <IconPrinter className="ltr:mr-2 rtl:ml-2" />
                                        PRINT
                                    </button>
                                </div>

                                <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div className="datatables">
                                <DataTable
                                    highlightOnHover
                                    className="whitespace-nowrap table-hover"
                                    records={recordsData}
                                    columns={[
                                        // {
                                        //     accessor: 'Emp id',
                                        //     title: 'Emp id',
                                        //     render: ({ emp_id,id }) => (
                                        //         <NavLink to="/apps/emppreview">
                                        //             <div className="text-primary underline hover:no-underline font-semibold">{`${emp_id}`}</div>
                                        //         </NavLink>
                                        //     ),
                                        //     sortable: true,
                                        // },
                                        {
                                            accessor: 'name',
                                            sortable: true,
                                            render: ({ name, id }) => (
                                                <div className="flex items-center font-semibold">
                                                    <div className="p-0.5 bg-white-dark/30 rounded-full w-max ltr:mr-2 rtl:ml-2">
                                                        <img className="h-8 w-8 rounded-full object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                                    </div>
                                                    <div>{name}</div>
                                                </div>
                                            ),
                                        },
                                        {
                                            accessor: 'role',
                                            sortable: true,
                                            render: ({ role }) => (
                                                <div>
                                                    <div>{role}</div>
                                                </div>
                                            ),
                                        },
                                        {
                                            accessor: 'department',
                                            sortable: true,

                                            render: ({ department }) => (
                                                <div>
                                                    <div>{department}</div>
                                                </div>
                                            ),
                                        },
                                        {
                                            accessor: 'designation',
                                            sortable: true,
                                            render: ({ designation }) => (
                                                <div>
                                                    <div>{designation}</div>
                                                </div>
                                            ),
                                        },
                                      
                                        {
                                            accessor: 'Phone ',
                                            sortable: true,
                                            titleClassName: 'text-right',
                                            render: ({ phone }) => <div className="text-right font-semibold">{`${phone}`}</div>,
                                        },

                                        {
                                            accessor: 'status',
                                            sortable: true,
                                            render: ({ status }) => <span className={`badge badge-outline-${status.color} `}>{status.tooltip}</span>,
                                        },
                                        {
                                            accessor: 'action',
                                            title: 'Actions',
                                            sortable: false,
                                            textAlignment: 'center',
                                            render: ({ id }) => (
                                                <div className="flex gap-4 items-center w-max mx-auto">
                                                    <Tippy content="Edit">
                                                        <div onClick={() => setModal5(true)} className="flex hover:text-info">
                                                            <IconEye className="w-4.5 h-4.5" />
                                                        </div>
                                                    </Tippy>
                                                    {/* <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
                                            <IconEye />
                                        </NavLink> */}
                                                    <Tippy content="Delete">
                                                        {/* <NavLink to="" className="flex"> */}
                                                        <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                                            <IconTrashLines />
                                                        </button>
                                                        {/* </NavLink> */}
                                                    </Tippy>
                                                </div>
                                            ),
                                        },
                                    ]}
                                    totalRecords={initialRecords.length}
                                    recordsPerPage={pageSize}
                                    page={page}
                                    onPageChange={(p) => setPage(p)}
                                    recordsPerPageOptions={PAGE_SIZES}
                                    onRecordsPerPageChange={setPageSize}
                                    sortStatus={sortStatus}
                                    onSortStatusChange={setSortStatus}
                                    selectedRecords={selectedRecords}
                                    onSelectedRecordsChange={setSelectedRecords}
                                    minHeight={200}
                                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                />
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Payroll;
