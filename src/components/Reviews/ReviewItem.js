import "./RevieItem.css";
const ReviewItem = (props) => {
  return (
    <div className="review-box">
      <div className="review">
        <p className="review-details">{props.item.text}</p>
        <h6>{props.item.customerName}</h6>
        <p>{props.item.title}</p>
      </div>
      <div className="client-img">
        <img src={props.item.imageURL} alt="" />
      </div>
    </div>
  );
};

export default ReviewItem;
