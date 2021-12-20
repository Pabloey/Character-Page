export default function Item(props) {
  return (
    <div>
      <button onClick={() => props.history.push(`/chars/${props.match.params.id}/build`)}>Leave a build</button>
    </div>
  );
}
