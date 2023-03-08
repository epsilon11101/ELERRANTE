import React from "react";

import Section from "../../../UI/Section/Section";

import classes from "./Adventure.module.scss";
import Info from "../../../UI/Card/Info";
import Button from "../../../UI/Button/Button";

import r1 from "../../../../assets/remolques/remolque1.jpg";
import r2 from "../../../../assets/remolques/remolque2.jpg";
import r3 from "../../../../assets/remolques/remolque3.jpg";

const Adventure = () => {
  const DUMMY_ADVENTURES = [
    {
      id: "d1",
      src: r1,
      title: "camper van",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempore in, cupiditate nemo voluptates, consectetur officia facilis voluptatibus pariatur veniam ut maxime! Adipisci veniam rerum molestiae repellendus dolor mollitia a?",
    },
    {
      id: "d2",
      src: r2,
      title: "Jeep Wrangler 4x4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempore in, cupiditate nemo voluptates, consectetur officia facilis voluptatibus pariatur veniam ut maxime! Adipisci veniam rerum molestiae repellendus dolor mollitia a?",
    },
    {
      id: "d3",
      src: r3,
      title: "Pick Up RAM 4X4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempore in, cupiditate nemo voluptates, consectetur officia facilis voluptatibus pariatur veniam ut maxime! Adipisci veniam rerum molestiae repellendus dolor mollitia a?",
    },
  ];

  const info_cards = DUMMY_ADVENTURES.map((card) => {
    return (
      <Info
        key={card.id}
        src={card.src}
        title={card.title}
        description={card.description}
      />
    );
  });

  return (
    <Section className={classes.section} title="plan adventure">
      {info_cards}
      <Button>reservar</Button>
    </Section>
  );
};

export default Adventure;
