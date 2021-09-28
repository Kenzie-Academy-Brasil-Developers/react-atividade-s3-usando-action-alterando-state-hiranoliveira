import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");

  const nome = useSelector((state) => {
    console.log(state.user);
    return state.user;
  });

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => handleClick()}>Change</button>
      <p>{nome.name}</p>
    </div>
  );
};

export default UserCard;
