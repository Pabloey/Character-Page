import { useEffect, useState } from "react";
import axios from "axios";

export default function Item(props) {
  const [charBuilds, setCharBuilds] = useState([]);

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/chars/builds/${props.match.params.id}`);
      setCharBuilds(response.data.builds);
    };
    getItemDetails();
  }, [setCharBuilds]);

  return (
    <div>
      {charBuilds.map((e, i) => (
        <div>
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item1}.png`} alt={e.item1} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item2}.png`} alt={e.item2} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item3}.png`} alt={e.item3} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item4}.png`} alt={e.item4} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item5}.png`} alt={e.item5} />
          <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item6}.png`} alt={e.item6} />
        </div>
      ))}
    </div>
  );
}
