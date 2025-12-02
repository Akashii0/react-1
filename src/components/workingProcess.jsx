import ProcessCard from "../components/processCard";

function workingProcess() {
  return (
    <div className="mt-40">
      <div className="flex flex-col sm:flex-row gap-10 items-center mb-15">
        <p className="font-spaceBold text-4xl bg-brand p-1 rounded-md">
          Our Working Process
        </p>
        <p className="font-spaceRegular text-center sm:text-left">
          Step-by-Step Guide to Achieving <br className="hidden lg:visible" />{" "}
          Your Business Goals
        </p>
      </div>

      <div className="space-y-6">
        <ProcessCard
          num={"01"}
          name={"Consultation"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
        <ProcessCard
          num={"02"}
          name={"Research and Strategy Development"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
        <ProcessCard
          num={"03"}
          name={"Implementation"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
        <ProcessCard
          num={"04"}
          name={"Monitoring and Optimization"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
        <ProcessCard
          num={"05"}
          name={"Reporting and Communication"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
        <ProcessCard
          num={"06"}
          name={"Continual Improvement"}
          text={`During the initial consultation, we will discuss your business goals and objectives, 
            target audience, and current marketing efforts. 
            This will allow us to understand your needs and tailor our services to best fit your requirements.`}
        />
      </div>
    </div>
  );
}

export default workingProcess;
