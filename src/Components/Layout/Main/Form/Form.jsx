import React from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import Input from "../../../UI/Input/Input";
import classes from "./Form.module.scss";

const Form = () => {
  return (
    <section className={classes.section}>
      <Card className={classes.section__content}>
        <form action="">
          <Input id="entrega" type="date" label="De" />
          <Input id="entrega" type="date" label="Hasta" />
          <Button type="button">reservar</Button>
        </form>
      </Card>
    </section>
  );
};

export default Form;
