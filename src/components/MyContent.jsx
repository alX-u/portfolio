import alien from "../assets/alien.png";

const MyContent = () => {
  return (
    <>
      <div className="hello_title">
        <h1>Salutations!</h1>
        <h1>
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
