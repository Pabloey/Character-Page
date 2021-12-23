import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../globals";

export const Build = (props) => {
  const [newBuild, setNewBuild] = useState({
    item1: "1001",
    item2: "1001",
    item3: "1001",
    item4: "1001",
    item5: "1001",
    item6: "1001",
    build_id: props.match.params.id,
  });

  const itemArray = Object.entries(props.items);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${BASE_URL}/chars/builds/${props.match.params.id}`, newBuild);
    const resAgain = await axios.get(`${BASE_URL}/chars/builds/${props.match.params.id}`);
    props.setCharBuilds(resAgain.data.builds);
    props.switchForm();
  };

  const handleChange = (e) => {
    setNewBuild({ ...newBuild, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div>
          <button className="submit-buttons" type="submit">
            Submit
          </button>
          <button className="submit-buttons" onClick={() => props.switchForm()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
