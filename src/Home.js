import { useState } from "react";
import { useAlert } from "react-alert";
import Modal from "react-awesome-modal";

const Home = () => {
    
  const alert = useAlert();
  const [name, setName] = useState("");
  const [crushname, setCrushName] = useState("");
  const [state, setState] = useState(false);

  function closeModal() {
    setState(false);
    window.location.reload();
  }

  function changeName(event) {
    setName(event.target.value);
  }

  function changeCrushName(event) {
    setCrushName(event.target.value);
    return event.target.value;
  }

  function handleClick(event) {
    if (!name) {
      alert.show("Please enter your names first");
    } else {
      setState(true);
    }
  }

  return (
    <div className="home">
      <h1 className="title"> Love Calculator </h1>

      <div className="container">
        <div className="name">
          <div className="yourname">
            <h3>Enter your name</h3>
            <input onChange={changeName} type="text" class="no-outline" value={name} />
          </div>
          <div className="crushname">
            <h3>Enter your crush name</h3>
            <input onChange={changeCrushName} type="text" class="no-outline" value={crushname} />
          </div>
        </div>

        <div className="heart">
          <img src={"/images/heart.png"} alt="heart-img" />
          <button className="click" onClick={handleClick}>
            <h1>Click Me</h1>
          </button>
        </div>
      </div>

      <Modal
        visible={state}
        width="400"
        height="500"
        effect="fadeInUp"
        onClickAway={closeModal}
      >
        <div>
          <h1 className="result">Wooho!! {name},  {crushname} loves you 3000</h1>
          <img className="result-img" src="https://www.smileysapp.com/gif-emoji/wink.gif" alt="result-img" />
          <button className="result-btn" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
