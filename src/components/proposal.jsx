import illustration from "../assets/Illustration2.png";

function proposal() {
  return (
    <div className="sm:relative py-12 mt-20 flex items-center justify-between bg-brand-gray rounded-4xl max-h-[50%]">
      <div className="flex items-center sm:items-start flex-col gap-6 mx-4 sm:mx-0 sm:ml-15">
        <p className="text-center sm:text-left text-brand-dark font-spaceMedium text-3xl mb-5">
          Let's make things happen
        </p>
        <p className="text-center sm:text-left text-brand-dark font-spaceRegular text-xl">
          Contact us today to learn more about how our digital{" "}
          <br className="hidden lg:visible" />
          marketing services can help your business grow and{" "}
          <br className="hidden lg:visible" />
          succeed online.
        </p>
        <button className="font-spaceRegular text-xl bg-brand-dark rounded-xl text-white py-4 px-8">
          Get your free proposal
        </button>
      </div>
      <img
        src={illustration}
        alt="illustration2"
        className="hidden sm:block sm:absolute sm:right-0"
      />
    </div>
  );
}

export default proposal;
