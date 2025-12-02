import icon from "../assets/linkedin.png";

function teamCard({ img, name, title, text }) {
  return (
    <div className="border rounded-4xl xl:w-[500px] xl:h-76 divide-y divide-black p-10 shadow-[0px_3px_0px_0px_#000000]">
      <div className="flex items-start justify-between gap-5 pb-6">
        <div className="flex items-end gap-5">
          <img src={img} alt="person" />
          <div>
            <p className="font-spaceMedium">{name}</p>
            <p className="font-spaceRegular">{title}</p>
          </div>
        </div>
        <img src={icon} alt="linkedin" />
      </div>

      <p className="font-spaceRegular pt-6">{text}</p>
    </div>
  );
}

export default teamCard;
