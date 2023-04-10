import styled from "styled-components";

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #ffbe33;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }
`;

export default AddButton;
