import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  padding: 8px 30px;
  margin: 0 10px;
  background-color: #ffbe33;
  color: #fff;
  border-radius: 45px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e69c00;
  }
`;

export default Button;
