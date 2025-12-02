import { useState } from "react";
import illustration from "../assets/illustration3.png";

function contactUs(params) {
  const [selected, setSelected] = useState("say-hi"); // default selected

  return (
    <div className=" mt-40">
      <div className="flex  flex-col sm:flex-row gap-10 items-center">
        <p className="font-spaceBold text-4xl bg-brand p-1 rounded-md">
          Contact Us
        </p>
        <p className="font-spaceRegular text-center sm:text-left">
          Connect with Us: Let's Discuss Your {""}
          <br className="hidden lg:visible" />
          digital Marketing Needs
        </p>
      </div>
      <div className="mt-15 relative flex">
        <div className="w-full bg-brand-gray rounded-3xl pt-10 lg:pt-14 pb-20 px-8 lg:px-24 flex flex-col gap-8">
          <div className="flex gap-10 font-spaceRegular">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelected("say-hi")}
                className={`w-6 h-6 border-4 border-white ${
                  selected === "say-hi" ? "bg-brand" : "bg-brand-gray"
                } rounded-full shadow-[0px_0px_1px_1px_#000000]`}
              ></button>
              <p>Say Hi</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelected("quote")}
                className={`w-6 h-6 border-4 border-white ${
                  selected === "quote" ? "bg-brand" : "bg-brand-gray"
                } rounded-full shadow-[0px_0px_1px_1px_#000000]`}
              ></button>
              <p>Get a quote</p>
            </div>
          </div>

          <div className="lg:max-w-[35%] flex flex-col gap-5">
            <div className="font-spaceRegular">
              <p>Name</p>
              <input
                type="text"
                placeholder="Name"
                className="w-full py-3 px-6 bg-white border rounded-xl"
              />
            </div>
            <div className="font-spaceRegular">
              <p>Email*</p>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-6 bg-white border rounded-xl"
              />
            </div>
            <div className="font-spaceRegular">
              <p>Message*</p>
              <textarea
                type="text"
                placeholder="Message"
                className="w-full h-44 py-3 px-6 resize-none bg-white border rounded-xl"
              />
            </div>
            <button className="py-4 rounded-xl bg-brand-dark text-brand-gray font-spaceRegular">
              Send Message
            </button>
          </div>
        </div>

        <img
          src={illustration}
          alt="illustration3"
          className="hidden sm:block absolute right-0"
        />
      </div>
    </div>
  );
}

export default contactUs;
