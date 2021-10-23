import { useContext } from "react";
import { UserContext } from "./userContext";

const Grandchild = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="border">
      <h1>From Grandchild component</h1>
      <p>{user}</p>
      <button onClick={() => setUser(user + 1)}>Add one more!</button>
    </div>
  );
};

export default Grandchild;
 