import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";

export default function EditBuild(props) {
  const [newBuild, setNewBuild] = useState({
    item1: "1001",
    item2: "1001",
    item3: "1001",
    item4: "1001",
    item5: "1001",
    item6: "1001",
    build_id: props.match.params.id,
  });

  // Posting update to specific ID and getting b  ack the new list of builds. Flipping switchEdit to flip the tern-op
  //http://localhost:3001/api
  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${BASE_URL}/chars/builds/${props.editId}`, newBuild);
    const response = await axios.get(`${BASE_URL}/chars/builds/${props.match.params.id}`);
    props.setCharBuilds(response.data.builds);
    props.switchEdit();
  };

  //-------------------------------------------------------------------------
  const handleChange = (e) => {
    setNewBuild({ ...newBuild, [e.target.name]: e.target.value });
  };

  //Turning object props.items into an Array.
  const itemArray = Object.entries(props.items);

  //Mapping through Arrays to make 6 Select-options.
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <select name="item1" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item2" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item3" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item4" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item5" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item6" onChange={handleChange}>
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <button type="submit">Update</button>
        <button onClick={() => props.switchEdit()}>Cancel</button>
      </form>
    </div>
  );
}
