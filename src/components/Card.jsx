const Card = (props) => {
  return (
    <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden">
      <img src={props.image} className="" alt="" />
      <div className="py-4">
        <p className="text-white font-semibold text-lg leading-6">
          {props.title}
        </p>
        <p className="mt-2 text-white">{props.description}</p>
        <a href={props.link}>Click here</a>
      </div>
    </div>
  );
};

export default Card;
