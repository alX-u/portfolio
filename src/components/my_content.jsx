import alien from "../assets/alien.png";

const MyContent = () => {
  return (
    <>
      <div className="hello_title_div">
        <h1 className="hello_title_text">Salutations!</h1>
        <h1 className="hello_title_text_description">
          My name is <span>Alejandro</span>
        </h1>
      </div>
      <div className="alien_img">
        {/* Añadir imagen del alien */}
        <img src={alien} alt="" />
      </div>
    </>
  );
};

export default MyContent;
