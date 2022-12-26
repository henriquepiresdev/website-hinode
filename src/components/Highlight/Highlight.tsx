import React from "react";
import { ButtonComponent } from "../Button";
import IHighlightProps from "../interfaces/highlight.interface";
import { SectionHighlight } from "./styles";

export const Highlight = ({
  title,
  paragraph,
  contentButton,
  image,
  slice,
}: IHighlightProps) => {
  return (
    <SectionHighlight slice={slice}>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
        <article>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div>
            <p>{paragraph}</p>
          </div>
          <ButtonComponent>{contentButton}</ButtonComponent>
        </article>
      </div>
    </SectionHighlight>
  );
};
