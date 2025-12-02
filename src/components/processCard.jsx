import button1 from "../assets/plus.png";
import button2 from "../assets/minus.png";
import { useState } from "react";

function processCard({ num, name, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${
        open ? "bg-brand" : "bg-brand-gray"
      } rounded-4xl py-8 px-5 sm:px-10 border-black border ${
        open ? "divide-y" : "divide-y-0"
      } shadow-[0px_3px_0px_0px_#000000]`}
    >
      <div className={`flex justify-between ${open ? "pb-4" : ""}`}>
        <div className="flex items-center gap-5">
          <p className="font-spaceBold text-4xl sm:text-6xl">{num}</p>
          <p className="font-spaceMedium text-xl sm:text-3xl max-w-[50%] sm:max-w-max">
            {name}
          </p>
        </div>
        <button onClick={() => setOpen((prev) => !prev)} className="shrink-0">
          <img
            src={open ? button2 : button1}
            alt="dropdown"
            className="h-10 w-10 sm:h-auto sm:w-auto"
          />
        </button>
      </div>

      {open && <p className="font-spaceRegular max-w-[95%] pt-4">{text}</p>}
    </div>
  );
}

export default processCard;
