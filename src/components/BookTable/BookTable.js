import "./BookTable.css";
import Container from "../UI/Container";
import Overlay from "../UI/Overlay";
import Header from "../UI/Header";
import BookButton from "../UI/BookButton";
import Map from "../Map/Map";
import useInput from "../../hooks/useInput";
import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
    /*const response = fetch(
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
    );*/
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
    <section id="Book">
      <Container>
        {isSubmitted && (
          <div className={!isConfirm ? "confirm-box" : "confirm-box hide"}>
            <Overlay />
            <div className="confirm">
              <div className="confirm-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <h3>success</h3>
              <p>
                Your booking has been confirmed.
                <br />
                Check your emails for details.
              </p>
              <BookButton className="confirm-btn" onClick={confirmHandler}>
                ok
              </BookButton>
            </div>
          </div>
        )}
        <div className="book-header">
          <Header>book a table</Header>
        </div>
        <div className="book-table">
          <form
            id="book_form"
            className="book-form"
            onSubmit={formSubmitHandler}
          >
            <div className="input-container">
              <input
                className={!isNameValid && isNameTouched ? "invalid" : ""}
                type="text"
                placeholder="your name"
                value={nameValue}
                onChange={changeNameHandler}
                onBlur={blurNameHandler}
              />
              <div className="alert-icon">
                <span>!</span>
              </div>
              {!isNameValid && isNameTouched && (
                <p className="feedback">Name must not be empty</p>
              )}
            </div>
            <div className="input-container">
              <input
                className={!isPhoneValid && isPhoneTouched ? "invalid" : ""}
                type="number"
                placeholder="phone number"
                value={phoneValue}
                onChange={changePhoneHandler}
                onBlur={blurPhoneHandler}
              />
              <div className="alert-icon">
                <span>!</span>
              </div>
              {!isPhoneValid && isPhoneTouched && (
                <p className="feedback">Phone number must be 15 numbers</p>
              )}
            </div>
            <div className="input-container">
              <input
                className={!isEmailValid && isEmailTouched ? "invalid" : ""}
                type="email"
                placeholder="your email"
                value={emailValue}
                onChange={changeEmailHandler}
                onBlur={blurEmailHandler}
              />
              <div className="alert-icon">
                <span>!</span>
              </div>
              {!isEmailValid && isEmailTouched && (
                <p className="feedback">Email is not valid</p>
              )}
            </div>
            <div className="input-container">
              <div
                className={
                  isOpened
                    ? "select opened"
                    : !isSelectorValid && isSelectorTouched
                    ? "select invalid"
                    : "select"
                }
                onClick={onOpenHandler}
              >
                {selectorValue === "" ? "How many persons?" : selectorValue}
                <ul>
                  <li className={selectorValue === "" ? "selected" : ""}>
                    How many persons?
                  </li>
                  <li
                    value="2"
                    className={selectorValue === 2 ? "selected" : ""}
                    onClick={changeSelectorHandler}
                  >
                    2
                  </li>
                  <li
                    value="3"
                    className={selectorValue === 3 ? "selected" : ""}
                    onClick={changeSelectorHandler}
                  >
                    3
                  </li>
                  <li
                    value="4"
                    className={selectorValue === 4 ? "selected" : ""}
                    onClick={changeSelectorHandler}
                  >
                    4
                  </li>
                  <li
                    value="5"
                    className={selectorValue === 5 ? "selected" : ""}
                    onClick={changeSelectorHandler}
                  >
                    5
                  </li>
                </ul>
              </div>
              {!isOpened && !isSelectorValid && isSelectorTouched && (
                <p className="feedback">Number of persons must be selected</p>
              )}
            </div>
            <div className="input-container">
              <input
                className={!isDateValid && isDateTouched ? "invalid" : ""}
                type="date"
                onKeyDown={(e) => {
                  e.preventDefault();
                }}
                value={dateValue}
                onChange={changeDateHandler}
                onBlur={blurDateHandler}
              />
              {!isDateValid && isDateTouched && (
                <p className="feedback">Date must be selected</p>
              )}
            </div>
            <BookButton className="book-btn" aria-label="book">
              book now
            </BookButton>
          </form>
          <div className="map">
            <Map />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookTable;
