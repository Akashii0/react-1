import TeamCard from "../components/teamCard";
import person1 from "../assets/person-1.png";
import person2 from "../assets/person-2.png";
import person3 from "../assets/person-3.png";
import person4 from "../assets/person-4.png";
import person5 from "../assets/person-5.png";
import person6 from "../assets/person-6.png";

function team() {
  return (
    <div className="relative mt-40 space-y-8">
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        <p className="font-spaceBold text-4xl bg-brand p-1 rounded-md">Team</p>
        <p className="font-spaceRegular text-center sm:text-left">
          Meet the skilled and experienced team behind our{" "}
          <br className="hidden lg:visible" /> successful digital marketing
          strategies
        </p>
      </div>

      <div className="mt-20 space-y-10 sm:space-y-0 lg:grid lg:grid-cols-[auto_auto_auto] lg:gap-y-32 lg:justify-between">
        <TeamCard
          img={person1}
          name={"John Smith"}
          title={"CEO and Founder"}
          text={
            "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          }
        />
        <TeamCard
          img={person2}
          name={"Jane Doe"}
          title={"Director of Operations"}
          text={
            "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          }
        />
        <TeamCard
          img={person3}
          name={"Michael Brown"}
          title={"Senior SEO Specialist"}
          text={
            "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          }
        />
        <TeamCard
          img={person4}
          name={"Emily Johnson"}
          title={"PPC Manager"}
          text={
            "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          }
        />
        <TeamCard
          img={person5}
          name={"Brian Williams"}
          title={"Social Media Specialist"}
          text={
            "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          }
        />
        <TeamCard
          img={person6}
          name={"Sarah Kim"}
          title={"Content Creator"}
          text={
            "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
          }
        />
      </div>
      <button className="absolute right-0 font-spaceRegular text-xl bg-brand-dark rounded-xl text-white py-4 px-8">
        See all team
      </button>
    </div>
  );
}

export default team;
