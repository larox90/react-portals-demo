import Child from './Child';
function Parent () {
  return (
    <div className="Parent">
      <p>parent component</p>
      <hr />
      <Child />
    </div>
  );
}

export default Parent;