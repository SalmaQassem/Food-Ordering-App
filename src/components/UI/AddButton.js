import styled from "styled-components";

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: var(--MainColor);
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--HoverColor);
  }
`;

export default AddButton;
