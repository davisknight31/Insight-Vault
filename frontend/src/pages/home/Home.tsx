import Button from "../../components/button/Button";

const Home: React.FC = () => {
  const clickFunction = () => {
    console.log("hit");
  };

  return (
    <div className="w-2/5 m-auto">
      <h1 className="text-5xl font-bold">Home</h1>
      <Button handleClick={clickFunction} label="Login"></Button>
    </div>
  );
};

export default Home;
