import "./RevieItem.css";
const ReviewItem = (props) => {
  return (
    <div className="review-box">
      <div className="review">
        <p className="review-details">{props.item.text}</p>
        <h4>{props.item.customerName}</h4>
        <p>{props.item.title}</p>
      </div>
      <div className="client-img">
        <img src={props.item.imageURL} alt="" />
      </div>
    </div>
  );
};

export default ReviewItem;
