import { useEffect, useState } from "react";
import axios from "axios";

export default function Item(props) {
  const [items, setItems] = useState({});
  const itemArray = Object.entries(items);

  let fileNumber = [];

  let myObject = {};

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/item.json`);
      setItems(response.data.data);
    };
    getItemDetails();
  }, [props.charId]);

  itemArray.map((e, i) => {
    fileNumber.push();
  });

  return (
    <div>
      <select>
        {itemArray.map((e, i) => (
          // console.log(e[0] + e[1].name); // displays number and name
          <option value={e[0]}>{e[1].name}</option>
        ))}
      </select>
    </div>
  );
}
