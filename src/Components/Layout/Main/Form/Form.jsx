import React from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Input/Select";
import classes from "./Form.module.scss";

const Form = () => {
  const DUMMY_OPTIONS = [
    { id: "1", value: "Cancun" },
    { id: "2", value: "Playa del carmen" },
    { id: "3", value: "Merida" },
  ];

  return (
    <section className={classes.section}>
      <Card className={classes.section__content}>
        <form action="">
          <Select
            options={DUMMY_OPTIONS}
            title="entrega"
            id="entrega"
            name="entrega"
          />
          <Input id="entrega" type="date" label="De" />
          <Select
            options={DUMMY_OPTIONS}
            title="devolucion"
            id="devolucion"
            name="devolucion"
          />
          <Input id="entrega" type="date" label="Hasta" />
          <Button type="button">reservar</Button>
        </form>
      </Card>
    </section>
  );
};

export default Form;
