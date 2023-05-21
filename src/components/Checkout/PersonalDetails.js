import classes from "./Info.module.css";

const PersonalDetails = () => {
  return (
    <div className={classes.container}>
      <h4>personal details</h4>
      <div className={classes.info}>
        <div className={classes.inputContainer}>
          <label className={classes.label}>first name</label>
          <input type="text" className={classes.input} />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>last name</label>
          <input type="text" className={classes.input} />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>company</label>
          <input type="text" className={classes.input} />
        </div>
        <div className={classes.inputContainer}>
          <label className={classes.label}>phone number</label>
          <input type="number" className={classes.input} />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
