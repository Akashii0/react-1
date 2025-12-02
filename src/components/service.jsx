import ServiceCard from "../components/serviceCard";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";

function service() {
  return (
    <div className="flex flex-col mt-35">
      <div className="flex flex-col sm:flex-row gap-10 items-center mb-15">
        <p className="font-spaceBold text-4xl bg-brand p-1 rounded-md">
          Services
        </p>
        <p className="font-spaceRegular text-center sm:text-left">
          At our digital marketing agency, we offer a range of services to
          <br className="hidden lg:visible" />
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-8">
        <ServiceCard
          text1={"Pay-per-click"}
          text2={"advertising"}
          image={icon2}
          textColor={"bg-white"}
          cardColor={"bg-brand"}
        />
        <ServiceCard
          text1={"Search engine"}
          text2={"optimization"}
          image={icon1}
          textColor={"bg-brand"}
          cardColor={"bg-brand-gray"}
        />
        <ServiceCard
          text1={"Social Media"}
          text2={"Marketing"}
          image={icon3}
          textColor={"bg-white"}
          cardColor={"bg-brand-dark"}
          arrowType={"white"}
        />
        <ServiceCard
          text1={"Email"}
          text2={"Marketing"}
          image={icon4}
          textColor={"bg-white"}
          cardColor={"bg-brand-gray"}
        />
        <ServiceCard
          text1={"Analytics and"}
          text2={"Tracking"}
          image={icon6}
          textColor={"bg-brand"}
          cardColor={"bg-brand-dark"}
          arrowType={"white"}
        />
        <ServiceCard
          text1={"Content"}
          text2={"Creation"}
          image={icon5}
          textColor={"bg-white"}
          cardColor={"bg-brand"}
        />
      </div>
    </div>
  );
}

export default service;
