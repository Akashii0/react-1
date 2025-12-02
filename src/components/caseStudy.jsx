import arrow from "../assets/arrow2.png";

function caseStudy() {
  return (
    <div className="mt-40">
      <div className="flex flex-col sm:flex-row gap-10 items-center mb-15">
        <p className="font-spaceBold text-4xl bg-brand p-1 rounded-md">
          Case Studies
        </p>
        <p className="font-spaceRegular text-center sm:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <br className="hidden lg:visible" /> Success through Our Case Studies
        </p>
      </div>
      <div className="py-4 sm:py-15 px-8 sm:px-0 bg-brand-dark rounded-4xl flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-brand-gray">
        <div className="flex flex-col gap-5 sm:px-15 py-5 sm:pb-0">
          <p className="font-spaceRegular text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-brand font-spaceMedium text-[18px]">
              Learn more
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:px-15 py-5 sm:pb-0">
          <p className="font-spaceRegular text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-brand font-spaceMedium text-[18px]">
              Learn more
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:px-15 py-5 sm:pb-0">
          <p className="font-spaceRegular text-white">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-brand font-spaceMedium text-[18px]">
              Learn more
            </p>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default caseStudy;
