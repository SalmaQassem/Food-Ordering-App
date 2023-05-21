import classes from "./SelectorInput.module.css";
import SelectorItem from "./SelectorItem";

const SelectorInput = (props) => {
  const clickOpenHandler = () => {
    props.onOpen();
  };
  const clickSelectorHandler = (value) => {
    props.changeSelector(value);
  };
  return (
    <div
      className={
        props.isSelectorOpened
          ? `${classes.select} ${classes.opened}`
          : !props.isValid && props.isTouched
          ? `${classes.select} ${classes.invalid}`
          : classes.select
      }
      onClick={clickOpenHandler}
    >
      {props.selector === "" ? props.default : props.selector}
      <ul className={classes.ul}>
        <li
          className={
            props.selector === ""
              ? `${classes.firstItem} ${classes.selected}`
              : classes.firstItem
          }
        >
          {props.default}
        </li>
        {props.data.map((item) => (
          <SelectorItem
            key={item.id}
            data={item.value}
            selector={props.selector}
            default={props.default}
            clickSelector={clickSelectorHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectorInput;
