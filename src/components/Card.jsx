const Card = ({ name, title, age, id, click }) => {
  return (
    <div
      className="card"
      style={age < 2 ? { background: "yellow" } : { background: "green" }}
    >
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>

      <p className={age < 2 ? "pink-age" : "yellow-age"}>Age: {age}</p>
      <p>ID: {id}</p>
      <button onClick={click}>delete</button>
    </div>
  );
};
export default Card;
/* props - property in React */
/* .name, .title, .age - just a placeholder, can be with any name */
//conditionally changing styles
{
  /*   {age < 2 ? (
        <p style={{ color: "blue" }}>Age: {age}</p>
      ) : (
        <p style={{ color: "red" }}>Age: {age}</p>
      )} */
}
