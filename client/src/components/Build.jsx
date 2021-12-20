import { useEffect, useState } from "react";
import axios from "axios";

export const Build = (props) => {
  const [items, setItems] = useState({});
  const itemArray = Object.entries(items);

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/item.json`);
      setItems(response.data.data);
    };
    getItemDetails();
  }, [props.charId]);

  return (
    <div>
      <div>
        <select name="item1">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item2">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item3">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item4">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item5">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
        <select name="item6">
          {itemArray.map((e, i) => (
            <option key={i} value={e[0]}>
              {e[1].name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => props.history.push(`/chars/${props.match.params.id}`)}>Cancel</button>
    </div>
  );
};
