const Card = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
