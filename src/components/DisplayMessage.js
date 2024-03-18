import React from "react";

const DisplayMessage = ({ message }) => {
  return (
    <>
      {message === "Success" ? (
        <div className="registration_complete">
          <div className="registration_complete_message">
            <span className="material-symbols-outlined">check_circle</span>
            <p className="success_message">
              User account successfully created.
            </p>
          </div>
        </div>
      ) : null}

      {message === "Registration Error" ? (
        <div className="registration_failed">
          <div className="registration_failed_message">
            <span className="material-symbols-outlined">cancel</span>
            <p className="failure_message">
              There was an error creating the account.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DisplayMessage;
