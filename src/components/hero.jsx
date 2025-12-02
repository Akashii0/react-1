import illustration from "../assets/illustration1.png";
import client1 from "../assets/amazon.png";
import client2 from "../assets/dribble.png";
import client3 from "../assets/hubspot.png";
import client4 from "../assets/notion.png";
import client5 from "../assets/netflix.png";
import client6 from "../assets/zoom.png";

function Hero() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row mt-10 lg:mt-15 lg:justify-between">
        <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-10">
          <p className="font-spaceBold text-center lg:text-left text-6xl lg:text-7xl">
            Navigating the <br className="hidden lg:visible" /> digital
            landscape <br className="hidden lg:visible" /> for success
          </p>
          <img
            src={illustration}
            alt="illustration1"
            className="block sm:hidden"
          />
          <p className="font-spaceRegular text-center lg:text-left text-[16px] lg:text-3xl">
            Our digital marketing agency helps businesses{" "}
            <br className="hidden lg:visible" /> grow and succeed online through
            a range of <br className="hidden lg:visible" /> services including
            SEO, PPC, social media marketing,{" "}
            <br className="hidden lg:visible" /> and content creation.
          </p>
          <button className="mt-4 sm:mt-0 font-spaceRegular lg:text-3xl bg-brand-dark rounded-xl text-white py-4 px-8">
            Book a consultation
          </button>
        </div>
        <img
          src={illustration}
          alt="illustration1"
          className="hidden sm:block"
        />
      </div>

      <div className="grid grid-cols-2 gap-y-6 place-items-center lg:flex lg:justify-between mt-16 lg:mt-24">
        <img src={client1} alt="client-1" />
        <img src={client2} alt="client-2" />
        <img src={client3} alt="client-3" />
        <img src={client4} alt="client-4" />
        <img src={client5} alt="client-5" />
        <img src={client6} alt="client-6" />
      </div>
    </div>
  );
}

export default Hero;
