import arrow from "../assets/arrow.png";
import arrowWhite from "../assets/arrow3.png";

function serviceCard({ text1, text2, textColor, cardColor, image, arrowType }) {
  const type = arrowType ? arrowType.toLowerCase() : "";
  const arrowImage = type === "white" ? arrowWhite : arrow;
  const arrowTextColor = type === "white" ? "text-white" : "text-black";

  return (
    <div
      className={`lg:max-w-[600px] p-8 flex items-center ${cardColor} justify-between border rounded-3xl shadow-[0px_3px_0px_0px_#000000]`}
    >
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-start font-spaceSemiBold text-2xl">
          <p className={`${textColor} rounded-md p-1`}>{text1}</p>
          <p className={`${textColor} rounded-md p-1`}>{text2}</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={arrowImage} alt="arrow" className="h-10" />
          <p className={`font-spaceRegular ${arrowTextColor}`}>Learn More</p>
        </div>
      </div>
      <img src={image} alt="service-img" className="h-24 sm:h-32" />
    </div>
  );
}

export default serviceCard;
