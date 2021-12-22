import { useState } from "react";
import axios from "axios";
import EditBuild from "./EditBuild";
import { BASE_URL } from "../globals";

//BuildList is showing the list of builds from database
export default function Item(props) {
  //Tern op to show edit form or not
  const [editOn, setEditOn] = useState(true);
  const [editId, setEditId] = useState();

  const switchEdit = (e) => {
    if (editOn) {
      setEditOn(false);
      setEditId(e._id);
    } else {
      setEditOn(true);
      setEditId();
    }
  };
  //--------------------------------------------------------------------------

  // This is where delete button is being handled, deleting per _id, controller deleteBuild @ route BASE_URL/chars/builds/:id.
  const handleDelete = async (e) => {
    const res = await axios.delete(`${BASE_URL}/chars/builds/${e.target.name}`);
    const response = await axios.get(`${BASE_URL}/chars/builds/${props.match.params.id}`);
    props.setCharBuilds(response.data.builds);
  };

  //--------------------------------------------------------------------------

  //Mapping through props.charBuilds which is Riot's API with their item codes and images. With a delete and edit button.
  return (
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
            <button onClick={() => switchEdit(e)}>{e._id}</button>
          </div>
        ))
      ) : (
        <EditBuild {...props} items={props.items} editId={editId} switchEdit={switchEdit} />
      )}
    </div>
  );
}
