import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="w-full h-[10%] bg-black text-white flex items-center justify-between px-[40px] py-3 fixed top-0 border-b border-b-zinc-600">
      <h1 className="font-bold uppercase">Study-Session</h1>

      <div className="flex items-center gap-4">
        <p
          className="bg-zinc-900/60 hover:bg-zinc-600/50 duration-150 cursor-pointer px-5 border border-zinc-100/35 py-1 rounded-md"
          onClick={() => setToggle(true)}
        >
          View Sessions
        </p>
        <p
          className="bg-zinc-900/60 hover:bg-zinc-600/50 duration-150 cursor-pointer px-5 border border-zinc-100/35 py-1 rounded-md"
          onClick={() => setToggle(false)}
        >
          Add Sessions
        </p>
      </div>
    </div>
  );
};

export default Navbar;
