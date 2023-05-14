import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
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
