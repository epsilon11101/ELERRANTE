import { Fragment } from "react";
import "./App.scss";
import Header from "./Components/Layout/Header/Header";
import Banner from "./Components/Layout/Main/Banner/Banner";
import Form from "./Components/Layout/Main/Form/Form";

function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Form />
    </Fragment>
  );
}

export default App;
