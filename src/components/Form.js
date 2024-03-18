import React from "react";
import { useState } from "react";
import {
  validateFullName,
  validateContactNumber,
  validateEmailAddress,
  validatePassword,
} from "../utils";

import DisplayMessage from "./DisplayMessage";

const EmptyErrorMessage = ({ message }) => {
  return <p className="FieldError"> {message}</p>;
};

const Form = () => {
  const [fullName, setFullName] = useState({ value: "", isTouched: false });

  const [contactNumber, setContactNumber] = useState({
    value: "",
    isTouched: false,
  });

  const [birthDay, setBirthDay] = useState({
    day: "",
    month: "",
    year: "",
    isTouched: false,
  });

  const [emailId, setEmaidId] = useState({ value: "", isTouched: false });

  const [password, setPassword] = useState({ value: "", isTouched: false });

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [message, setMessage] = useState("");

  let formData = {
    full_name: fullName.value,
    contact_number: contactNumber.value,
    email: emailId.value,
    password: password.value,
    date_of_birth: birthDay.day + birthDay.month + birthDay.year,
  };

  async function validateAPIrequest() {
    const data = await fetch(
      "https://fullstack-test-navy.vercel.app/api/users/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const json = await data.json();
    console.log(json);
    setMessage(json.title);
  }

  const clearForm = () => {
    setFullName({
      value: "",
      isTouched: false,
    });
    setContactNumber({
      value: "",
      isTouched: false,
    });
    setBirthDay({
      day: "",
      month: "",
      year: "",
      isTouched: false,
    });
    setEmaidId({
      value: "",
      isTouched: false,
    });
    setPassword({
      value: "",
      isTouched: false,
    });
    setConfirmPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAPIrequest();
    clearForm();
  };

  return (
    <>
      <div className="create-account">
        <div className="form-heading">
          <p className="heading-name">Create User Account</p>
        </div>

        <form className="form-details" onSubmit={handleSubmit}>
          <div className="form-outline">
            <div className="form-wrapper">
              <p>Full Name</p>
              <div className="field_row">
                <input
                  type="text"
                  required
                  id="fullName"
                  value={fullName.value}
                  onChange={(e) => {
                    setFullName({ ...fullName, value: e.target.value });
                  }}
                  onBlur={() => {
                    setFullName({ ...fullName, isTouched: true });
                  }}
                />
                <label>
                  Full Name <sup>*</sup>
                </label>
                {fullName.isTouched && fullName.value.length === 0 ? (
                  <EmptyErrorMessage message="Full Name should not be empty" />
                ) : null}
                {fullName.isTouched &&
                  fullName.value.length > 0 &&
                  !validateFullName(fullName.value) && (
                    <EmptyErrorMessage message="Full Name validation failed - Add space and no symbols" />
                  )}
              </div>

              <p> Contact Number</p>
              <div className="field_row">
                <input
                  type="text"
                  required
                  id="contactNumber"
                  value={contactNumber.value}
                  onChange={(e) => {
                    setContactNumber({
                      ...contactNumber,
                      value: e.target.value,
                    });
                  }}
                  onBlur={() => {
                    setContactNumber({ ...contactNumber, isTouched: true });
                  }}
                />
                <label>
                  Contact Number <sup>*</sup>
                </label>
                {contactNumber.isTouched && contactNumber.value.length != 10 ? (
                  <EmptyErrorMessage message="Contact Number should be 10 digits and should not be empty " />
                ) : null}

                {contactNumber.isTouched &&
                  contactNumber.value.length === 10 &&
                  !validateContactNumber(contactNumber.value) && (
                    <EmptyErrorMessage message="Contact Number validation failed" />
                  )}
              </div>

              <p>Birthdate</p>
              <div className="field_row">
                <div className="select-field">
                  <select
                    id="birthDay"
                    value={birthDay.day}
                    onChange={(e) => {
                      setBirthDay({ ...birthDay, day: e.target.value });
                    }}
                  >
                    <option
                      className="option-class"
                      value=""
                      disabled="disabled"
                      hidden="hidden"
                    >
                      Day*
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>

                  <select
                    name="selectedMonth"
                    value={birthDay.month}
                    onChange={(e) => {
                      setBirthDay({ ...birthDay, month: e.target.value });
                    }}
                  >
                    <option value="" disabled="disabled" hidden="hidden">
                      Month*
                    </option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                  </select>

                  <select
                    name="selectedYear"
                    value={birthDay.year}
                    onChange={(e) => {
                      setBirthDay({ ...birthDay, year: e.target.value });
                    }}
                  >
                    <option value="" disabled="disabled" hidden="hidden">
                      Year*
                    </option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                  </select>
                </div>
              </div>
              <p>Email Address</p>
              <div className="field_row">
                <input
                  type="text"
                  required
                  id="emailId"
                  value={emailId.value}
                  onChange={(e) => {
                    setEmaidId({ ...emailId, value: e.target.value });
                  }}
                  onBlur={() => {
                    setEmaidId({ ...emailId, isTouched: true });
                  }}
                />
                <label>
                  Email Address <sup>*</sup>
                </label>
                {emailId.isTouched && emailId.value.length === 0 ? (
                  <EmptyErrorMessage message="Email Address should not be empty" />
                ) : null}
                {emailId.isTouched &&
                  emailId.value.length > 0 &&
                  !validateEmailAddress(emailId.value) && (
                    <EmptyErrorMessage message="Sorry, this email address is not valid. Please try again." />
                  )}
              </div>

              <p>Password</p>
              <div className="field_row">
                <input
                  type="text"
                  id="password"
                  required
                  value={password.value}
                  onChange={(e) => {
                    setPassword({ ...password, value: e.target.value });
                  }}
                  onBlur={() => {
                    setPassword({ ...password, isTouched: true });
                  }}
                />
                <label>
                  Create Password<sup>*</sup>
                </label>
                {password.isTouched && password.value.length != 8 ? (
                  <EmptyErrorMessage message="Password should have 8 characters and should not be empty" />
                ) : null}
                {password.isTouched &&
                  password.value.length == 8 &&
                  !validatePassword(password.value) && (
                    <EmptyErrorMessage message="Password can have lower case, upper case alphabets and numbers" />
                  )}
              </div>
              <p> Confirm Password</p>
              <div className="field_row">
                <input
                  type="text"
                  id="confirmPassword"
                  required
                  value={confirmPassword.value}
                  onChange={(e) => {
                    setConfirmPassword({
                      ...confirmPassword,
                      value: e.target.value,
                    });
                  }}
                  onBlur={() => {
                    setConfirmPassword({ ...confirmPassword, isTouched: true });
                  }}
                />
                <label>
                  Confirm Password<sup>*</sup>
                </label>
                {confirmPassword.isTouched &&
                confirmPassword.value != password.value ? (
                  <EmptyErrorMessage message="Password should match and should not be empty" />
                ) : null}
              </div>
            </div>
            {message ? <DisplayMessage message={message} /> : null}
          </div>
          <div className="field-row-button">
            <button
              className="cancel-button"
              onClick={() => {
                clearForm();
              }}
            >
              Cancel
            </button>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
