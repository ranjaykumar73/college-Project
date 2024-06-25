import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import { downloadExcel } from 'react-export-table-to-excel';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconFile from '../../../components/Icon/IconFile';
import IconPrinter from '../../../components/Icon/IconPrinter';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';
import IconEye from '../../../components/Icon/IconEye';

const rowData = [
    {
        id: 1,
        Date: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        email: 'carolinejensen@zidant.com',
        dob: '2004-05-28',

        phone: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        Date: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        email: 'celestegrant@polarax.com',
        dob: '1989-11-19',

        phone: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 3,
        Date: 3,
        firstName: 'Tillman',
        lastName: 'Forbes',
        email: 'tillmanforbes@manglo.com',
        dob: '2016-09-05',

        phone: '+1 (969) 496-2892',
        isActive: false,
        age: 26,
        company: 'APPLIDECK',
    },
    {
        id: 4,
        Date: 4,
        firstName: 'Daisy',
        lastName: 'Whitley',
        email: 'daisywhitley@applideck.com',
        dob: '1987-03-23',

        phone: '+1 (861) 564-2877',
        isActive: true,
        age: 21,
        company: 'VOLAX',
    },
    {
        id: 5,
        Date: 5,
        firstName: 'Weber',
        lastName: 'Bowman',
        email: 'weberbowman@volax.com',
        dob: '1983-02-24',

        phone: '+1 (962) 466-3483',
        isActive: false,
        age: 26,
        company: 'ORBAXTER',
    },
    {
        id: 6,
        Date: 6,
        firstName: 'Buckley',
        lastName: 'Townsend',
        email: 'buckleytownsend@orbaxter.com',
        dob: '2011-05-29',

        phone: '+1 (884) 595-2643',
        isActive: true,
        age: 40,
        company: 'OPPORTECH',
    },
    {
        id: 7,
        Date: 7,
        firstName: 'Latoya',
        lastName: 'Bradshaw',
        email: 'latoyabradshaw@opportech.com',
        dob: '2010-11-23',

        phone: '+1 (906) 474-3155',
        isActive: true,
        age: 24,
        company: 'GORGANIC',
    },
    {
        id: 8,
        Date: 8,
        firstName: 'Kate',
        lastName: 'Lindsay',
        email: 'katelindsay@gorganic.com',
        dob: '1987-07-02',

        phone: '+1 (930) 546-2952',
        isActive: true,
        age: 24,
        company: 'AVIT',
    },
    {
        id: 9,
        Date: 9,
        firstName: 'Marva',
        lastName: 'Sandoval',
        email: 'marvasandoval@avit.com',
        dob: '2010-11-02',
        phone: '+1 (927) 566-3600',
        isActive: false,
        age: 28,
        company: 'QUILCH',
    },
    {
        id: 10,
        Date: 10,
        firstName: 'Decker',
        lastName: 'Russell',
        email: 'deckerrussell@quilch.com',
        dob: '1994-04-21',

        phone: '+1 (846) 535-3283',
        isActive: false,
        age: 27,
        company: 'MEMORA',
    },
    {
        id: 11,
        Date: 11,
        firstName: 'Odom',
        lastName: 'Mills',
        email: 'odommills@memora.com',
        dob: '2010-01-24',

        phone: '+1 (995) 525-3402',
        isActive: true,
        age: 34,
        company: 'ZORROMOP',
    },
    {
        id: 12,
        Date: 12,
        firstName: 'Sellers',
        lastName: 'Walters',
        email: 'sellerswalters@zorromop.com',
        dob: '1975-11-12',

        phone: '+1 (830) 430-3157',
        isActive: true,
        age: 28,
        company: 'ORBOID',
    },
    {
        id: 13,
        Date: 13,
        firstName: 'Wendi',
        lastName: 'Powers',
        email: 'wendipowers@orboid.com',
        dob: '1979-06-02',

        phone: '+1 (863) 457-2088',
        isActive: true,
        age: 31,
        company: 'SNORUS',
    },
    {
        id: 14,
        Date: 14,
        firstName: 'Sophie',
        lastName: 'Horn',
        email: 'sophiehorn@snorus.com',
        dob: '2018-09-20',
        phone: '+1 (885) 418-3948',
        isActive: true,
        age: 22,
        company: 'XTH',
    },
    {
        id: 15,
        Date: 15,
        firstName: 'Levine',
        lastName: 'Rodriquez',
        email: 'levinerodriquez@xth.com',
        dob: '1973-02-08',
        phone: '+1 (999) 565-3239',
        isActive: true,
        age: 27,
        company: 'COMTRACT',
    },
    {
        id: 16,
        Date: 16,
        firstName: 'Little',
        lastName: 'Hatfield',
        email: 'littlehatfield@comtract.com',
        dob: '2012-01-03',
        phone: '+1 (812) 488-3011',
        isActive: false,
        age: 33,
        company: 'ZIDANT',
    },
    {
        id: 17,
        Date: 17,
        firstName: 'Larson',
        lastName: 'Kelly',
        email: 'larsonkelly@zidant.com',
        dob: '2010-06-14',
        phone: '+1 (892) 484-2162',
        isActive: true,
        age: 20,
        company: 'SUREPLEX',
    },
    {
        id: 18,
        Date: 18,
        firstName: 'Kendra',
        lastName: 'Molina',
        email: 'kendramolina@sureplex.com',
        dob: '2002-07-19',
        phone: '+1 (920) 528-3330',
        isActive: false,
        age: 31,
        company: 'DANJA',
    },
    {
        id: 19,
        Date: 19,
        firstName: 'Ebony',
        lastName: 'Livingston',
        email: 'ebonylivingston@danja.com',
        dob: '1994-10-18',
        phone: '+1 (970) 591-3039',
        isActive: false,
        age: 33,
        company: 'EURON',
    },
    {
        id: 20,
        Date: 20,
        firstName: 'Kaufman',
        lastName: 'Rush',
        email: 'kaufmanrush@euron.com',
        dob: '2011-07-10',
        phone: '+1 (924) 463-2934',
        isActive: false,
        age: 39,
        company: 'ILLUMITY',
    },
    {
        id: 21,
        Date: 21,
        firstName: 'Frank',
        lastName: 'Hays',
        email: 'frankhays@illumity.com',
        dob: '2005-06-15',
        phone: '+1 (930) 577-2670',
        isActive: false,
        age: 31,
        company: 'SYBIXTEX',
    },
    {
        id: 22,
        Date: 22,
        firstName: 'Carmella',
        lastName: 'Mccarty',
        email: 'carmellamccarty@sybixtex.com',
        dob: '1980-03-06',
        phone: '+1 (876) 456-3218',
        isActive: true,
        age: 21,
        company: 'ZEDALIS',
    },
    {
        id: 23,
        Date: 23,
        firstName: 'Massey',
        lastName: 'Owen',
        email: 'masseyowen@zedalis.com',
        dob: '2012-03-01',
        phone: '+1 (917) 567-3786',
        isActive: false,
        age: 40,
        company: 'DYNO',
    },
    {
        id: 24,
        Date: 24,
        firstName: 'Lottie',
        lastName: 'Lowery',
        email: 'lottielowery@dyno.com',
        dob: '1982-10-10',

        phone: '+1 (912) 539-3498',
        isActive: true,
        age: 36,
        company: 'MULTIFLEX',
    },
    {
        id: 25,
        Date: 25,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 26,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 27,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 28,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 29,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 30,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
    {
        id: 25,
        Date: 31,
        firstName: 'Addie',
        lastName: 'Luna',
        email: 'addieluna@multiflex.com',
        dob: '1988-05-01',

        phone: '+1 (962) 537-2981',
        isActive: true,
        age: 32,
        company: 'PHARMACON',
    },
];

const col = ['id', 'firstName', 'lastName', 'company', 'age', 'dob', 'email', 'phone'];

const AttendanceProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Export Table'));
    });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item: any) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.company.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.dob.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const header = ['Id', 'Firstname', 'Lastname', 'Email', 'Start Date', 'Phone No.', 'Age', 'Company'];

    const formatDate = (date: any) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    function handleDownloadExcel() {
        downloadExcel({
            fileName: 'table',
            sheet: 'react-export-table-to-excel',
            tablePayload: {
                header,
                body: rowData,
            },
        });
    }

    const exportTable = (type: any) => {
        let columns: any = col;
        let records = rowData;
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
            <div className="flex justify-evenly ">
                <div className="bg-gray-200 text-lg py-2 px-2 rounded">
                    <div>Total Present</div>
                    <div className="text-center">31</div>
                </div>
                <div className="bg-gray-200 text-lg py-2 px-2 rounded">
                    <div>Total Late</div>
                    <div className="text-center">2</div>
                </div>
                <div className="bg-gray-200 text-lg py-2 px-2 rounded">
                    <div>Total Absent</div>
                    <div className="text-center">1</div>
                </div>
                <div className="bg-gray-200 text-lg  py-2 px-2 rounded">
                    <div>Total Half Day</div>
                    <div className="text-center">3</div>
                </div>
                <div className="bg-gray-200 text-lg  py-2 px-2 rounded">
                    <div>Total Holiday</div>
                    <div className="text-center">1</div>
                </div>
            </div>
            <div className="mt-4 flex gap-5  lg:flex-row flex-col">
                <label htmlFor="year" className="ltr:mr-2 rtl:ml-2 w-2 mb-0 mt-2">
                    Year
                </label>
                <select id="year" className="form-select w-20 " name="year">
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2025">2025</option>
                </select>
                <div className="flex gap-5 mt-2">
                    <div>
                        Present:<span className="font-bold text-green-700">P</span>
                    </div>
                    <div>
                        Absent:<span className="font-bold text-red-700">A</span>
                    </div>
                    <div>
                        Late:<span className="font-bold text-[#8a6d3b]">L</span>
                    </div>
                    <div>
                        Half Day:<span className="font-bold text-[#8a6d3b]">F</span>
                    </div>
                    <div>
                        Holiday:<span className="font-bold text-black">H</span>
                    </div>
                </div>
            </div>
            <div className="mt-6">
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
                            //     accessor: 'id',
                            //     title: 'Payslip#',
                            //     render: ({  id }) => (
                            //     <div className="text-primary underline hover:no-underline font-semibold">{`${id}`}</div>
                            //     ),
                            //     sortable: true,
                            // },
                            // { accessor: 'Payslip', title: 'Payslip#', sortable: true },
                            { accessor: 'Date', title: 'Date/Month', render: ({ Date }) => <div>{Date}</div> },
                            { accessor: 'age', title: 'Jan' },
                            { accessor: 'age', title: 'Feb' },
                            { accessor: 'age', title: 'March' },
                            { accessor: 'age', title: 'April' },
                            { accessor: 'age', title: 'May' },
                            { accessor: 'age', title: 'June' },
                            { accessor: 'age', title: 'July' },
                            { accessor: 'age', title: 'Aug' },
                            { accessor: 'age', title: 'Sep' },
                            { accessor: 'age', title: 'Oct' },
                            { accessor: 'age', title: 'Nov' },
                            { accessor: 'age', title: 'Dec' },
                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>
        </div>
    );
};

export default AttendanceProfile;
