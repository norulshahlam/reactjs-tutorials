import { useContext } from "react";
import GreatGrandChild from "./GreatGrandChild";
import { UserContext } from "./UserProvider";

const Grandchild = () => {
  const { count, setCount } = useContext(UserContext);
  return (
    <div className="border rounded-md text-center p-10 m-10 bg-red-300">
      <h1>From Grandchild component</h1>
      <span className="m-4">{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add one more!
      </button>
      <GreatGrandChild/>
    </div>
  );
};

export default Grandchild;
