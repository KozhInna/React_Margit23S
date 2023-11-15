import { useState } from "react";
import Home from "./routes/Home";
import Persons from "./routes/Persons";
import About from "./routes/About";
import Root from "./routes/Rout";
import ErrorPage from "./routes/ErrorPage";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  //state which has an array with 3 people
  const [persons, setPersons] = useState([
    { id: 1, name: "Inna", title: "CEO", age: 40 },
    { id: 2, name: "Michael", title: "sub-CEO", age: 38 },
    { id: 3, name: "Finn", title: "kid", age: 1 },
  ]);

  //setTitle doesn't change state
  const [title, setTitle] = useState("Hello world");
  const [search, setSearch] = useState("");

  /*  function clickHandler() {
    setTitle("Foxes for ever");
  } */

  function removeHandler(id) {
    console.log(id);
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  }

  function searchingHandler(e) {
    setSearch(e.target.value);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/persons",
          element: (
            <Persons
              searchingHandler={searchingHandler}
              removeHandler={removeHandler}
              search={search}
              persons={persons}
            />
          ),
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    //fragment instead of covering <div>
    <>
      <RouterProvider router={router} />
      {/*   <Header logo="Inna Kozhina" />
      <main className="main">
        <h1>{title}</h1>do
        <input type="text" placeholder="Type" onChange={searchingHandler} />
        <h2>This is my application</h2>
        <img src={react}></img>
        <div className="my-image"></div>
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
        <button onClick={clickHandler}>Click me</button>
      </main>

      <Footer copyright="Copyright ©" /> */}
    </>
  );
}

export default App;
