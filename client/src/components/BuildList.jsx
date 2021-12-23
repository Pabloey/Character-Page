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

  console.log(props.charBuilds);

  //--------------------------------------------------------------------------

  //Mapping through props.charBuilds which is Riot's API with their item codes and images. With a delete and edit button.
  return (
    <div className="buildlist">
      {editOn ? (
        props.charBuilds.map((e, i) => (
          <div className="buildlist-cont" key={i}>
            <div className="user-btns">
              <div className="userName">{e.userName}</div>
              <button className="delete-btn" onClick={handleDelete} name={e._id}>
                &#9746;
              </button>
              <button className="edit-btn" onClick={() => switchEdit(e)}>
                &#9997;
              </button>
            </div>
            <div>
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item1}.png`} alt={e.item1} />
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item2}.png`} alt={e.item2} />
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item3}.png`} alt={e.item3} />
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item4}.png`} alt={e.item4} />
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item5}.png`} alt={e.item5} />
              <img className="buildlist-items" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${e.item6}.png`} alt={e.item6} />
            </div>
          </div>
        ))
      ) : (
        <EditBuild {...props} items={props.items} editId={editId} switchEdit={switchEdit} />
      )}
    </div>
  );
}
