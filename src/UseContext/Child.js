import Grandchild from "./Grandchild";
import { useContext } from "react";
import { UserContext } from "./UserProvider";
const Child = () => {

  const { count, setCount } = useContext(UserContext);
  return (
    <div className="border rounded-md text-center p-10 m-10 bg-red-300">
      <h1>From Child component</h1>
      <span className="m-4">{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add one more!
      </button>
      <Grandchild />
    </div>
  );
};

export default Child;
 