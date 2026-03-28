import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const SessionCard = ({ session }) => {
  const { deleteSession } = useContext(SessionContext);

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500 text-white";
      case "Medium":
        return "bg-orange-400 text-black";
      case "Low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="bg-zinc-900 w-[60%] p-4 rounded-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl ">{session.topic}</h1>
        <span
          className={`px-2 py-1 text-xs rounded capitalize ${getPriorityBadge(
            session.priority,
          )}`}
        >
          {session.priority}
        </span>
      </div>
    
    <div >
        <h2 className="capitalize font-medium text-xl">Subject : {session.subject}</h2>
        <span>{session.duration} Mins</span>
    </div>
    <div >
        <span>{session.date}</span>
    </div>
      <button className="bg-red-800 rounded-md py-2" onClick={() => deleteSession(session.id)}>
        Delete
      </button>
    </div>
  );
};

export default SessionCard;
