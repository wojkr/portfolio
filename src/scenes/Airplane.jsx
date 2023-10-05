import airplanePic from "../assets/airplane.png";

// const runClock = () => {
//   setInterval(() => console.log("hey"), 100);
// };
// const airplane = document.getElementById("airplane");

const Airplane = ({ height }) => {
  return (
    <div
      className={`w-full h-[${height}] h-[140px] overflow-hidden z-[-10] relative`}
    >
      <div id="airplaneRadius" className="airplane">
        <div id="airplanePic">
          <img src={airplanePic} alt="" />
        </div>
      </div>
      <div id="airplaneRadius" className="airplane airplane-1">
        <div id="airplanePic">
          <img src={airplanePic} alt="" />
        </div>
      </div>
      <div id="airplaneRadius" className="airplane airplane-2">
        <div id="airplanePic">
          <img src={airplanePic} alt="" />
        </div>
      </div>
      <div id="airplaneRadius" className="airplane airplane-3">
        <div id="airplanePic">
          <img src={airplanePic} alt="" />
        </div>
      </div>
      <div id="airplaneRadius" className="airplane airplane-4">
        <div id="airplanePic">
          <img src={airplanePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Airplane;
