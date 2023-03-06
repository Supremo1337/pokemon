import styled from "styled-components";
import { useState } from "react";

interface CheckboxProps {
  checked?: unknown;
}

export const CheckboxContainer = styled.div<CheckboxProps>`
  padding-left: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 16%;
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})<CheckboxProps>`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  user-select: none;
`;

export const StyledCheckbox = styled.label<CheckboxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${(props) => (props.checked ? "#000" : "")};
  border: ${(props) => (props.checked ? "" : "1px solid")};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  div {
    display: ${(props) => (props.checked ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;

export default function CheckBox() {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  return (
    <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <StyledCheckbox checked={checked}>
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 20 20' width='20px' height='20px'%3E%3Cg id='surface115629650'%3E%3Crect x='0' y='0' width='20' height='20' style='fill:rgb(0%25,0%25,0%25);fill-opacity:1;stroke:none;'/%3E%3Cpath style=' stroke:none;fill-rule:nonzero;fill:rgb(100%25,100%25,100%25);fill-opacity:1;' d='M 17.988281 3.992188 C 17.8125 4 17.648438 4.070312 17.527344 4.195312 L 7.332031 14.390625 L 3.136719 10.195312 C 2.972656 10.019531 2.722656 9.949219 2.488281 10.011719 C 2.253906 10.074219 2.074219 10.253906 2.011719 10.488281 C 1.949219 10.722656 2.019531 10.972656 2.195312 11.136719 L 6.863281 15.804688 C 7.121094 16.066406 7.542969 16.066406 7.804688 15.804688 L 18.472656 5.136719 C 18.667969 4.945312 18.726562 4.652344 18.621094 4.398438 C 18.511719 4.148438 18.261719 3.984375 17.988281 3.992188 Z M 17.988281 3.992188 '/%3E%3C/g%3E%3C/svg%3E%0A")`,
          }}
        ></div>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}
