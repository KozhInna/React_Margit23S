import Card from "../components/Card";

function Persons({ searchingHandler, persons, search, removeHandler }) {
  return (
    <>
      <input type="text" placeholder="Type" onChange={searchingHandler} />

      <div className="cards">
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((person) => (
            //function should be defined in Parent
            <Card
              key={person.id}
              {...person}
              //ananimous function
              click={() => removeHandler(person.id)}
            />
          ))}
      </div>
    </>
  );
}
export default Persons;
