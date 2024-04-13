import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';
import IconEye from '../../../components/Icon/IconEye';
import ModalApplyLeave from './ModalApplyLeave';
import { boolean } from 'yup';

const ApplyLeave = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Invoice List'));
    });
    const [items, setItems] = useState([
        {
            id: 1,
            invoice: '081451',
            name: 'Laurie Fox',
            leave_type:'sick Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'lauriefox@company.com',
            apply_date: '15 Dec 2020',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 2,
            invoice: '081452',
            name: 'Alexander Gray',
            leave_type:'casual Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'alexGray3188@gmail.com',
            apply_date: '20 Dec 2020',
            amount: '9852463851',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 3,
            invoice: '081681',
            name: 'James Taylor',
            leave_type:'sick Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'jamestaylor468@gmail.com',
            apply_date: '27 Dec 2020',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 4,
            invoice: '082693',
            name: 'Grace Roberts',
            leave_type:'sick Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'graceRoberts@company.com',
            apply_date: '31 Dec 2020',
            amount: '9852463851',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 5,
            invoice: '084743',
            name: 'Donna Rogers',

            leave_type:'Meternity Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'donnaRogers@hotmail.com',
            apply_date: '03 Jan 2021',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 6,
            invoice: '086643',
            name: 'Amy Diaz',
            leave_type:'Meternity Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'amy968@gmail.com',
            apply_date: '14 Jan 2020',
            amount: '9852463851',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 7,
            invoice: '086773',
            name: 'Nia Hillyer',
            leave_type:'casual Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'niahillyer666@comapny.com',
            apply_date: '20 Jan 2021',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 8,
            invoice: '087916',
            name: 'Mary McDonald',
            leave_type:'Meternity Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'maryDonald007@gamil.com',
            apply_date: '25 Jan 2021',
            amount: '9852463851',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 9,
            invoice: '089472',
            name: 'Andy King',
            leave_type:'Meternity Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'kingandy07@company.com',
            apply_date: '28 Jan 2021',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 10,
            invoice: '091768',
            name: 'Vincent Carpenter',
            leave_type:'Medical  Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'vincentcarpenter@gmail.com',
            apply_date: '30 Jan 2021',
            amount: '7479407010',
            status: { tooltip: 'Pending', color: 'danger' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 11,
            invoice: '095841',
            name: 'Kelly Young',
            leave_type:'casual Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'youngkelly@hotmail.com',
            apply_date: '06 Feb 2021',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
        {
            id: 12,
            invoice: '098424',
            name: 'Alma Clarke',
            leave_type:'sick Leave',
            leave_date:'15 april 2024 - 18 april 2024',
            days:'4',
            email: 'alma.clarke@gmail.com',
            apply_date: '10 Feb 2021',
            amount: '9852463851',
            status: { tooltip: 'Approve', color: 'success' },
            profile: 'profile-1.jpeg',
        },
    ]);

    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecords(items.filter((user) => user.id !== id));
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
                setRecords(result);
                setInitialRecords(result);
                setItems(result);
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'invoice'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);
    const [modal6,setModal6]=useState<boolean>(false)
    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'firstName',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return items.filter((item) => {
                return (
                    item.invoice.toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.leave_date.toLowerCase().includes(search.toLowerCase()) ||
                    item.amount.toLowerCase().includes(search.toLowerCase()) ||
                    item.status.tooltip.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus]);

    return (
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
            <div className="invoice-table">
                <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-2">
                        {/* <button type="button" className="btn btn-danger gap-2" onClick={() => deleteRow()}>
                            <IconTrashLines />
                            Delete
                        </button> */}
                        <div onClick={() => setModal6(true)} className="btn btn-primary gap-2 cursor-pointer">
                            <IconPlus />
                            Apply Leave
                        </div>
                        <ModalApplyLeave modal6={modal6} setModal6={setModal6}/>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="datatables pagination-padding">
                    <DataTable
                        className="whitespace-nowrap table-hover invoice-table"
                        records={records}
                        columns={[
                            // {
                            //     accessor: 'Emp id',
                            //     sortable: true,
                            //     render: ({ invoice }) => (
                            //         <NavLink to="/apps/invoice/preview">
                            //             <div className="text-primary underline hover:no-underline font-semibold">{`${invoice}`}</div>
                            //         </NavLink>
                            //     ),
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
                                accessor: 'leave type',
                                sortable: true,
                                render:({leave_type})=>(
                                    <div>
                                        <div>{leave_type}</div>
                                    </div>
                                )
                            },
                            {
                                accessor: 'leave Date',
                                sortable: true,
                                render:({leave_date})=>(
                                    <div>
                                        <div>{leave_date}</div>
                                    </div>
                                )
                            },
                            {
                                accessor: 'Days',
                                sortable: true,
                                render:({days})=>(
                                    <div>
                                        <div>{days}</div>
                                    </div>
                                )
                            },
                            {
                                accessor: 'Apply date',
                                sortable: true,
                                render:({apply_date})=>(
                                    <div>
                                        <div>{apply_date}</div>
                                    </div>
                                )
                            },
                            // {
                            //     accessor: 'Phone ',
                            //     sortable: true,
                            //     titleClassName: 'text-right',
                            //     render: ({ amount, id }) => <div className="text-right font-semibold">{`${amount}`}</div>,
                            // },
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
                                        {/* <NavLink to="/apps/invoice/edit" className="flex hover:text-info">
                                            <IconEdit className="w-4.5 h-4.5" />
                                        </NavLink> */}
                                        <NavLink to="/apps/invoice/preview" className="flex hover:text-primary">
                                            <IconEye />
                                        </NavLink>
                                        {/* <NavLink to="" className="flex"> */}
                                        <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                            <IconTrashLines />
                                        </button>
                                        {/* </NavLink> */}
                                    </div>
                                ),
                            },
                        ]}
                        highlightOnHover
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
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ApplyLeave;

// https://www.jotform.com/form-templates/student-registration-form
// https://www.jotform.com/form-templates/alumni-registration-form