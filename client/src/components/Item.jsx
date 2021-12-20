export default function Item(props) {
console.log(props.charId);
  return (
    <div>
      <button onClick={() => props.history.push(`/chars/${props.charId}/build`)}>Leave a build</button>
    </div>
  );
}
