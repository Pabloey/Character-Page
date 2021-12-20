import { useEffect, useState } from "react";
import axios from "axios";

export const Build = (props) => {
  const [items, setItems] = useState({});

  const [newBuild, setNewBuild] = useState({
    item1: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
    item6: "",
    build_id: props.match.params.id,
  });

  const [testBuild, setTestBuild] = useState({})

  const itemArray = Object.entries(items);

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/item.json`);
      setItems(response.data.data);
    };
    getItemDetails();
  }, [props.charId]);

  const handleChange = (e) => {
    setNewBuild({ ...newBuild, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTestBuild(newBuild)
  };

  console.log(testBuild)

  return (
    <div>
      <form>
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
        <button type="submit">Submit</button>
        <button onClick={() => props.switchForm()}>Cancel</button>
      </form>
    </div>
  );
};
