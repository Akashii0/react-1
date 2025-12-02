// import logo from "../assets/logo2.png";
import logo2 from "../assets/Ayria_2.png";
import icon1 from "../assets/linkedin.png";
import icon2 from "../assets/facebook.png";
import icon3 from "../assets/twitter.png";

function footer() {
  return (
    <div className="mt-30 px-8 lg:px-15 py-10 bg-brand-dark rounded-t-[48px]">
      {/* Footer's header lol */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between ">
        <img src={logo2} alt="logo" className="h-12" />
        <div className="flex flex-col lg:flex-row items-center font-spaceLight gap-4 lg:gap-15 text-brand-gray underline">
          <p>About Us</p>
          <p>Services</p>
          <p>Use Cases</p>
          <p>Pricing</p>
          <p>Blog</p>
        </div>
        <div className="hidden lg:flex h-8 gap-5">
          <img src={icon1} alt="linkedin" />
          <img src={icon2} alt="facebook" />
          <img src={icon3} alt="twitter" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-12">
        <div className="flex flex-col items-start gap-5 font-spaceRegular text-brand-gray">
          <p className="px-1 rounded-[10px] font-spaceBold bg-brand text-black">
            Contact Us:
          </p>
          <p>Email: abdulkid151@gmail.com</p>
          <p>Phone: +234 70 3198 1905</p>
          <p>
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center px-10 py-8 lg:py-0 rounded-2xl gap-4 font-spaceMedium bg-[#292A32]">
          <input
            type="email"
            placeholder="Email"
            className="w-full lg:w-auto border py-3 px-6 rounded-xl text-brand-gray"
          />
          <button className="w-full lg:w-auto py-3 px-6 rounded-xl bg-brand">
            Subscribe to news
          </button>
        </div>
      </div>

      <div className="my-10 h-px bg-brand-gray"></div>

      <div className="flex flex-col lg:flex-row items-center font-spaceLight text-brand-gray gap-10">
        <p className="text-center">
          &copy; 2025 Ayria Technologies. All Rights Reserved.
        </p>
        <p className="underline">Privacy Policy</p>
      </div>
    </div>
  );
}

export default footer;
