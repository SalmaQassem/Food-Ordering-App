import classes from "./RevieItem.module.css";
const ReviewItem = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.review}>
        <p className={`${classes.p} ${classes.details}`}>{props.item.text}</p>
        <h4 className={classes.h4}>{props.item.customerName}</h4>
        <p className={classes.p}>{props.item.title}</p>
      </div>
      <div className={classes.imgContainer}>
        <img src={props.item.imageURL} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default ReviewItem;
