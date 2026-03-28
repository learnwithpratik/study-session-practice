import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SessionContext } from "../context/SessionContext";

const SessionForm = ({setToggle}) => {
  const { register, handleSubmit, reset } = useForm();
  const { addSession } = useContext(SessionContext);

  const onSubmit = (data) => {
    const newSession = {
      ...data,
      id: Date.now(),
      duration: Number(data.duration),
      // subject: data.subject,
    };

    addSession(newSession);
    reset();
    setToggle(true)
  };

  return (
    <div className="w-full bg-zinc-800">
      <div className="bg-zinc-900 pt-[6%] h-screen">
        <div className=" w-full flex items-center flex-col justify-center">
          <h1 className="text-3xl px-2 py-3 font-semibold text-white">
            Create Session Form
          </h1>
          <form
            action=""
            className="w-[30%] h-auto flex flex-col items-center justify-center p-4 space-y-2 shadow-[0px_15px_20px_rgba(0,0,0,0.2)] bg-white rounded-xl border border-blue-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-78 justify-center">
              <label htmlFor="topic" className="font-semibold px-2 py-2">
                Topic
              </label>
              <input
                {...register("topic", { required: true })}
                type="text"
                className="border px-2 py-2 bg-white"
                placeholder="Topic"
              />
            </div>
            <div className="flex flex-col w-78 justify-center">
              <label htmlFor="subject" className="font-semibold px-2 py-2">
                Subject
              </label>
              <select
                {...register("subject", { required: true })}
                name="subject"
                className="border py-2 px-2 active:border-none bg-white"
                id=""
              >
                <option value="">Select Subject</option>
                <option value="DSA">DSA</option>
                <option value="Web Dev">Web Dev</option>
                <option value="DBMS">DBMS</option>
                <option value="OS">OS</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="flex flex-col w-78 justify-center">
              <label htmlFor="duration" className="font-semibold px-2 py-2">
                Duration
              </label>
              <input
                {...register("duration", { required: true, min: 1, max: 10 })}
                type="number"
                className="border px-2 py-2 bg-white"
                placeholder="Duration of session"
              />
            </div>

            <div className="flex flex-col w-78 justify-center">
              <label htmlFor="subject" className="font-semibold px-2 py-2">
                Priority
              </label>
              <select {...register("priority", { required: true })}>
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="flex flex-col w-78 justify-center">
              <label htmlFor="duration" className="font-semibold px-2 py-2">
                Date
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                className="border px-2 py-2 bg-white"
                placeholder="Duration of session"
              />
            </div>

            <div className="w-full text-center mt-3 text-white">
              <button className="w-78 px-2 py-3 bg-blue-600 text-md mb-3 rounded-md">
                Add Session
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
