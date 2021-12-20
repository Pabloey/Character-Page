import { useEffect, useState } from "react";
import axios from "axios";

const Item = (props) => {
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
      {itemArray.map((e, i) => {
        // console.log(e[0] + e[1].name); // displays number and name
        return <p>{e[0]} {e[1].name}</p>;
      })}
    </div>
  );
};

export default Item;
