import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  background-color: var(--MainColor);
  color: #fff;
  border-radius: 45px;
  text-transform: capitalize;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--HoverColor);
  }
`;

export default Button;
