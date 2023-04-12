import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  padding: 8px 30px;
  margin: 0 10px;
  background-color: var(--MainColor);
  color: #fff;
  border-radius: 45px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--HoverColor);
  }
`;

export default Button;
