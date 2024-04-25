import { useState } from "react";
import IconTrash from "../../../components/Icon/IconTrash";
import IconPencilPaper from "../../../components/Icon/IconPencilPaper";
import IconX from "../../../components/Icon/IconX";

interface Todo {
    text: string;
    id: string;
    status: boolean;
}

const LeaveType = () => {
    const [LeaveType, setLeaveType] = useState<Todo[]>([]);
    const [text, setText] = useState<string>("");
    const [edit, setEdit] = useState<string>(null);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addTodo = (data: string) => {
        if (edit) {
            const editedData = LeaveType.map((todo) => todo.id === edit ? ({ ...todo, text: data }) : todo);
            setLeaveType(editedData);
            setText("");
            setEdit('');
        } else if (text !== "") {
            const payLoad: Todo = {
                text: data,
                id: new Date().getTime().toString(),
                status: false
            }
            setLeaveType([...LeaveType, payLoad]);
            setText("");
        }
    }

    const handleOnSubmit = () => {
        addTodo(text);
       
    };

    const handleEdit = (id: string) => {
        setEdit(id);
        const Edit = LeaveType.find(todo => todo.id === id);
        setText(Edit.text);
    }

    const deleteList = (id: string) => {
        const tempDepartments = LeaveType.filter((element) => element.id !== id);
        setLeaveType(tempDepartments);
        window.confirm("Are you Sure Delete Confirm?")
    };

    return (
        <div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className='text-primary text-xl font-bold ml-6'>Add Leave Type</div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between flex-wrap px-4">

                        <div className="mb-6  w-full">
                            { LeaveType.length !== 0 && <div className="flex items-center p-3.5 rounded text-success bg-success-light dark:bg-success-dark-light">
                            <span className="ltr:pr-2 rtl:pl-2">
                                <strong className="ltr:mr-1 rtl:ml-1">Record save Successfully</strong>
                            </span>
                            <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
                                <IconX className="w-5 h-5" />
                            </button>
                        </div>}
                            <label className="ltr:mr-2 rtl:ml-2 w-28 mb-0 font-bold">Name:-</label>
                            <input type="text" value={text} className="form-input flex-1" placeholder="Enter Department" onChange={handleOnChange} />
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-2" />
                    <button type="button" onClick={handleOnSubmit} className="btn btn-primary ml-[492px]">Save</button>
                </div>
                {/* list of department */}
                <div className="xl:w-1/2 w-full xl:mt-0 mt-6">
                    <div className="panel mb-5">
                        <div className='text-primary text-xl font-bold ml-6'>Leave Type List</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="flex justify-between">
                            <div className="font-bold">Name:</div>
                            <div className="font-bold">Action</div>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <ul>
                            {LeaveType.map((item) => (
                                <li key={item.id}>
                                    {item.text}
                                    <div className="flex justify-end gap-7 -mt-[20px]">
                                        <div className="cursor-pointer" onClick={() => handleEdit(item.id)}><IconPencilPaper /></div>
                                        <div onClick={() => deleteList(item.id)} className="cursor-pointer"><IconTrash /></div>
                                    </div>
                                    <hr className="border-white-light dark:border-[#1b2e4b] my-2" />
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveType;
