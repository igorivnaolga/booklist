import React from "react";
import Image from "./Image";
import Title from "./Title";
import Author from "./Author";

export default function Book() {
  return (
    <div className="Book">
      <article>
        <Image />
        <Title />
        <Author />
      </article>
    </div>
  );
}
