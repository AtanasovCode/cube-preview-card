import image from "./assets/image-equilibrium.jpg";
import eth from "./assets/icon-ethereum.svg";
import clock from "./assets/icon-clock.svg";
import avatar from "./assets/image-avatar.png";

const App = () => {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div
        className="
        bg-card flex flex-col max-w-[90%] p-6 rounded-xl text-white
        md:max-w-[50%] lg:max-w-[25%]
      "
      >
        <div className="rounded-xl overflow-hidden">
          <img src={image} alt="image preview of nft" />
        </div>

        <div className="mt-5">
          <div className="font-bold text-xl mb-4">Equilibrium #3429</div>
          <div className="text-softBlue mb-4">
            Our equilibrium collection promotes balance and calm.
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-center text-cyan">
              <img src={eth} alt="ethereum icon" className="mr-3" />
              <div>0.041 ETH</div>
            </div>

            <div className="flex items-center justify-center text-softBlue">
              <img src={clock} alt="icon of a clock" className="mr-3" />
              <div>3 days left</div>
            </div>
          </div>

          <div className="flex items-center justify-start mb-5">
            <img
              src={avatar}
              alt="avatar image"
              className="mr-3 w-8 rounded-full border border-solid border-white"
            />
            <div className="text-white">
              <span className="text-softBlue">Creation of</span> Jules Wyvern
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
