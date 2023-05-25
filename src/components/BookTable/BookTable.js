import classes from "./BookTable.module.css";
import Container from "../UI/Container";
import Overlay from "../UI/Overlay";
import Header from "../UI/Header";
import BookButton from "../UI/BookButton";
import Map from "../Map/Map";
import useInput from "../../hooks/useInput";
import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SelectorInput from "../SelectorInput/SelectorInput";
const DUMMYSELECTOR = [
  { id: "v1", value: "" },
  { id: "v2", value: "2" },
  { id: "v3", value: "3" },
  { id: "v4", value: "4" },
  { id: "v5", value: "5" },
];
const BookTable = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const {
    inputValue: nameValue,
    isInputTouched: isNameTouched,
    isInputValid: isNameValid,
    validateInputHandler: validateNameHandler,
    changeInputHandler: changeNameHandler,
    blurInputHandler: blurNameHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: phoneValue,
    isInputTouched: isPhoneTouched,
    isInputValid: isPhoneValid,
    validateInputHandler: validatePhoneHandler,
    changeInputHandler: changePhoneHandler,
    blurInputHandler: blurPhoneHandler,
    reset: resetPhone,
  } = useInput((value) => value.length === 11);

  const {
    inputValue: emailValue,
    isInputTouched: isEmailTouched,
    isInputValid: isEmailValid,
    validateInputHandler: validateEmailHandler,
    changeInputHandler: changeEmailHandler,
    blurInputHandler: blurEmailHandler,
    reset: resetEmail,
  } = useInput((value) =>
    value.trim().match(/^\w{1,65}@[a-zA-Z]+(\.\w{2,253})+$/)
  );

  const {
    inputValue: dateValue,
    isInputTouched: isDateTouched,
    isInputValid: isDateValid,
    validateInputHandler: validateDateHandler,
    changeInputHandler: changeDateHandler,
    blurInputHandler: blurDateHandler,
    reset: resetDate,
  } = useInput((value) => value !== "");

  const {
    inputValue: selectorValue,
    isInputTouched: isSelectorTouched,
    isInputValid: isSelectorValid,
    validateInputHandler: validateSelectorHandler,
    changeInputHandler: changeSelectorHandler,
    blurInputHandler: blurSelectorHandler,
    reset: resetSelector,
  } = useInput((value) => value !== "");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nameValidation = validateNameHandler();
    const phoneValidation = validatePhoneHandler();
    const emailValidation = validateEmailHandler();
    const dateValidation = validateDateHandler();
    const selectorValidation = validateSelectorHandler();
    if (
      !nameValidation ||
      !phoneValidation ||
      !emailValidation ||
      !dateValidation ||
      !selectorValidation
    ) {
      return;
    }
    //Send Data
    const response = fetch(
      "https://feane-751cb-default-rtdb.firebaseio.com/Bookings.json",
      {
        method: "POST",
        body: JSON.stringify({
          Name: nameValue,
          PhoneNumber: phoneValue,
          Email: emailValue,
          Date: dateValue,
          NumberOfPersons: selectorValue,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setIsSubmitted(true);
    resetName();
    resetPhone();
    resetEmail();
    resetDate();
    resetSelector();
  };

  const onOpenHandler = useCallback(() => {
    blurSelectorHandler();
    setIsOpened((prevState) => {
      return !prevState;
    });
  }, [blurSelectorHandler]);

  const confirmHandler = () => {
    setIsConfirm(true);
  };
  return (
    <section className={classes.book}>
      <Container>
        {isSubmitted && (
          <div
            className={
              !isConfirm ? `${classes.box}` : `${classes.box} ${classes.hide}`
            }
          >
            <Overlay />
            <div className={classes.confirm}>
              <div className={classes.icon}>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3 className={classes.h3}>success</h3>
              <p className={classes.p}>
                Your booking has been confirmed.
                <br />
                Check your emails for details.
              </p>
              <BookButton className={classes.button} onClick={confirmHandler}>
                ok
              </BookButton>
            </div>
          </div>
        )}
        <div className={classes.header}>
          <Header>book a table</Header>
        </div>
        <div className={classes.formContainer}>
          <form
            id="book_form"
            className={classes.form}
            onSubmit={formSubmitHandler}
          >
            <div className={classes.inputContainer}>
              <input
                className={
                  !isNameValid && isNameTouched
                    ? `${classes.input} ${classes.invalid}`
                    : classes.input
                }
                type="text"
                placeholder="your name"
                value={nameValue}
                onChange={changeNameHandler}
                onBlur={blurNameHandler}
              />
              <div className={classes.alert}>
                <span>!</span>
              </div>
              {!isNameValid && isNameTouched && (
                <p className={classes.feedback}>Name must not be empty</p>
              )}
            </div>
            <div className={classes.inputContainer}>
              <input
                className={
                  !isPhoneValid && isPhoneTouched
                    ? `${classes.input} ${classes.invalid}`
                    : classes.input
                }
                type="number"
                placeholder="phone number"
                value={phoneValue}
                onChange={changePhoneHandler}
                onBlur={blurPhoneHandler}
              />
              <div className={classes.alert}>
                <span>!</span>
              </div>
              {!isPhoneValid && isPhoneTouched && (
                <p className={classes.feedback}>
                  Phone number must be 15 numbers
                </p>
              )}
            </div>
            <div className={classes.inputContainer}>
              <input
                className={
                  !isEmailValid && isEmailTouched
                    ? `${classes.input} ${classes.invalid}`
                    : classes.input
                }
                type="email"
                placeholder="your email"
                value={emailValue}
                onChange={changeEmailHandler}
                onBlur={blurEmailHandler}
              />
              <div className={classes.alert}>
                <span>!</span>
              </div>
              {!isEmailValid && isEmailTouched && (
                <p className={classes.feedback}>Email is not valid</p>
              )}
            </div>
            <div className={classes.inputContainer}>
              <SelectorInput
                data={DUMMYSELECTOR}
                default="How many persons?"
                changeSelector={changeSelectorHandler}
                isSelectorOpened={isOpened}
                isValid={isSelectorValid}
                isTouched={isSelectorTouched}
                onOpen={onOpenHandler}
                selector={selectorValue}
              />
            </div>
            {!isOpened && !isSelectorValid && isSelectorTouched && (
              <p className={classes.feedback}>
                Number of persons must be selected
              </p>
            )}
            <div className={classes.inputContainer}>
              <input
                className={
                  !isDateValid && isDateTouched
                    ? `${classes.input} ${classes.invalid}`
                    : classes.input
                }
                aria-label="date"
                type="date"
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                value={dateValue}
                onChange={changeDateHandler}
                onBlur={blurDateHandler}
              />
              {!isDateValid && isDateTouched && (
                <p className={classes.feedback}>Date must be selected</p>
              )}
            </div>
            <BookButton aria-label="book">book now</BookButton>
          </form>
          <div className={classes.map}>
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookTable;
