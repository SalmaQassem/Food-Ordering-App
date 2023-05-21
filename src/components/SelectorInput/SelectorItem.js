import classes from "./SelectorItem.module.css";

const SelectorItem = (props) => {
  const selectorHandler = () => {
    props.clickSelector(props.data);
  };
  return (
    <li
      className={
        props.selector === props.data
          ? `${classes.li} ${classes.selected}`
          : classes.li
      }
      select={props.selector}
      onClick={selectorHandler}
    >
      {props.data}
    </li>
  );
};

export default SelectorItem;
