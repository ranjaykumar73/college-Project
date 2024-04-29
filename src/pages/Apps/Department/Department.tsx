import { useState } from 'react';
import IconPencil from '../../../components/Icon/IconPencil';
import IconTrash from '../../../components/Icon/IconTrash';
import IconPencilPaper from '../../../components/Icon/IconPencilPaper';
import Swal from 'sweetalert2';
interface Todo {
    text: string;
    id: string;
 
}

const Department = () => {
    const [department, setDepartment] = useState<Todo[]>([]);
    const [text, setText] = useState<string>('');
    const [edit, setEdit] = useState<string>(null);

    // Function to handle input change
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    // Function to show alert notification
    const showAlert = async (type: number) => {
        if (type === 1) {
            const toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: 'success',
                title: 'Saved successfully',
                padding: '10px 20px',
            });
        }
    };

     // Function to add or edit department item
    const addTodo = (data: string) => {
        if (edit) {
            const editedData = department.map((todo) => (todo.id === edit ? { ...todo, text: data } : todo)); // Update the department item with the edited text
            setDepartment(editedData); // Update department state
            setText(''); // Clear input text
            setEdit('');  // Exit edit mode
        } else if (text !== '') {
            const payLoad: Todo = {
                text: data,
                id: new Date().getTime().toString(),
               
            };
            setDepartment([...department, payLoad]);// Add new department item to the list  
            setText('');// Clear input text
            showAlert(1); // Show success alert
        }
    };

      // Function to handle form submission

    const handleOnSubmit = () => {
        addTodo(text); // Add or edit department item
    };

     // Function to handle editing a department item
    const handleEdit = (id: string) => {
        setEdit(id);  // Set edit mode to the id of the item being edited
        const Edit = department.find((todo) => todo.id === id); // Find the item being edited
        setText(Edit.text); // Set input text to the text of the item being edited
    };

     // Function to handle editing a department item
    const deleteList = (id: string) => {
         // Filter out the department item with the given id
        const tempDepartments = department.filter((element) => element.id !== id);
        setDepartment(tempDepartments); // Update department state
    };

    return (
        <div>
            <div className="flex xl:flex-row flex-col gap-2.5">
                <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6">
                    <div className="text-primary text-xl font-bold ml-6">Add Department</div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                    <div className="flex justify-between flex-wrap px-4">
                        <div className="mb-6  w-full">
                            <label className="ltr:mr-2 rtl:ml-2 w-28 mb-0 font-bold">Name:-</label>
                            <input type="text" value={text} className="form-input flex-1" placeholder="Enter Department" onChange={handleOnChange} />
                        </div>
                    </div>
                    <hr className="border-white-light dark:border-[#1b2e4b] my-2" />
                    <button type="button" onClick={handleOnSubmit} className="btn btn-primary ml-[492px]">
                        Save
                    </button>
                </div>
                {/* list of department */}
                <div className="xl:w-1/2 w-full xl:mt-0 mt-6">
                    <div className="panel mb-5">
                        <div className="text-primary text-xl font-bold ml-6">List of Department</div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <div className="flex justify-between">
                            <div className="font-bold">Name:</div>
                            <div className="font-bold">Action</div>
                        </div>
                        <hr className="border-white-light dark:border-[#1b2e4b] my-6" />
                        <ul>
                            {department.map((item) => (
                                <li key={item.id}>
                                    {item.text}
                                    <div className="flex justify-end gap-7 -mt-[20px]">
                                        <div className="cursor-pointer" onClick={() => handleEdit(item.id)}>
                                            <IconPencilPaper />
                                        </div>
                                        <div onClick={() => deleteList(item.id)} className="cursor-pointer">
                                            <IconTrash />
                                        </div>
                                    </div>
                                    <hr className="border-white-light dark:border-[#1b2e4b] my-2" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Department;
