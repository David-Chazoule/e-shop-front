import { TypeButton } from "../../Datas/TypeButton";

function Choicebox(props) {
  return (
    <div className="choicebox">
      {TypeButton &&
        TypeButton.map((elem) => (
          <div
            className="choice-title-img"
            key={elem.name}
            onClick={() => props.setType(elem.type)}
            title={elem.name}
          >
            <img
              className="img-choice"
              src={elem.image}
              alt={elem.name}
              title={elem.name}
            />
            <p className="choice-title">{elem.name}</p>
          </div>
        ))}
    </div>
  );
}

export default Choicebox;
