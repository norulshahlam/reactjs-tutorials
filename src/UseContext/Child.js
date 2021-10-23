import Grandchild from "./Grandchild";

const Child = () => {
  return (
    <div className="border">
      <h1>From Child component</h1>
      <Grandchild />
    </div>
  );
};

export default Child;
 