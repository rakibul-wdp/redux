import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col mb-5">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="w-full rounded-md"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="description" className="mb-2">
          Description
        </label>
        <input
          type="text"
          id="description"
          {...register("description")}
          className="w-full rounded-md"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="deadline" className="mb-2">
          Deadline
        </label>
        <input
          type="date"
          id="date"
          {...register("date")}
          className="w-full rounded-md"
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="assign-to" className="mb-2">
          Assign to
        </label>
        <select
          id="assignedTo"
          {...register("assignedTo")}
          className="w-full rounded-md"
        >
          <option value="Abul">Abul</option>
          <option value="Babul">Babul</option>
          <option value="Cabul">Cabul</option>
          <option value="Dabul">Dabul</option>
          <option value="Ebul">Ebul</option>
          <option value="Fabul">Fabul</option>
          <option value="Gabul">Gabul</option>
          <option value="Habul">Habul</option>
          <option value="Ibul">Ibul</option>
          <option value="Jabul">Jabul</option>
          <option value="Kabul">Kabul</option>
          <option value="Labul">Labul</option>
        </select>
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="priority" className="mb-2">
          Priority
        </label>
        <select
          id="priority"
          {...register("priority")}
          className="w-full rounded-md"
        >
          <option value="hight" defaultValue>
            High
          </option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onCancel()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTaskModal;
