import "./App.css";
import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changefirstHandler(event) {
  //   // console.log("printing first name...");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changelastHandler(event) {
  //   // console.log("printing last name...");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  function changeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  // console.log(formData);

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing form data");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        />

        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
