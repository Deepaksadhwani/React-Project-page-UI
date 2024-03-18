const Card = (props) => {
  return (
    <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
      <img src={props.image} className="" alt="" />
      <div className="py-4">
        <p className="text-white font-semibold text-lg px-2 leading-6">
          {props.title}
        </p>
        <p className="mt-2 px-2 text-white">{props.description}</p>
        <div className="relative">
          <a
            href={props.link}
            className="font-semibold bottom text-yellow-200  "
          >
            Click here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
