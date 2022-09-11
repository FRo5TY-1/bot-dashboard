import { useState } from "react";
import {
  EmbedContainer,
  SmallImgContainer,
  StyledInput,
  StyledTextArea,
} from "../styles/dashboard";

export const EmbedComponent = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <EmbedContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SmallImgContainer>
          <div style={{ top: "0", left: "0" }}>
            <img src="lol" alt="lol" />{" "}
          </div>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            style={{ display: "none" }}
          />
        </SmallImgContainer>
        <StyledInput
          placeholder="Author"
          onChange={(v) => setAuthor(v.target.textContent as string)}
        ></StyledInput>
      </div>
      <StyledInput
        placeholder="Title"
        onChange={(val) => setTitle(val.target.textContent as string)}
      ></StyledInput>
      <StyledTextArea placeholder="Description"></StyledTextArea>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <SmallImgContainer>
          <div style={{ top: "0", left: "0" }}>
            <img src="lol" alt="lol" />{" "}
          </div>
          <input
            type="file"
            accept="image/gif, image/jpeg, image/jpg, image/png"
            style={{ display: "none" }}
          />
        </SmallImgContainer>
        <StyledInput placeholder="Footer"></StyledInput>
      </div>
    </EmbedContainer>
  );
};
