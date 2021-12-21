import axios from "axios";
import { useState } from "react";

export default function Item(props) {
  const [editOn, setEditOn] = useState(true);

  const switchEdit = () => {
    if (editOn) setEditOn(false);
    else setEditOn(true);
  };

  console.log(editOn);

  const handleDelete = async (e) => {
    const res = await axios.delete(`http://localhost:3001/api/chars/builds/${e.target.name}`);
    const response = await axios.get(`http://localhost:3001/api/chars/builds/${props.match.params.id}`);
    props.setCharBuilds(response.data.builds);
  };

  return (
    <div>
      <div>
        {editOn ? (
          props.charBuilds.map((e, i) => (
            <div key={i}>
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item1}.png`} alt={e.item1} />
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item2}.png`} alt={e.item2} />
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item3}.png`} alt={e.item3} />
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item4}.png`} alt={e.item4} />
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item5}.png`} alt={e.item5} />
              <img src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item6}.png`} alt={e.item6} />
              <button onClick={handleDelete} name={e._id}>
                X
              </button>
              <button onClick={() => switchEdit()}>Edit</button>
            </div>
          ))
        ) : (
          <button onClick={() => switchEdit()}>Cancel</button>
        )}
      </div>
    </div>
  );
}
