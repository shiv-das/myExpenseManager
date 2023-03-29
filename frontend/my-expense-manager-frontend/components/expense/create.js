import React, { useContext, useState, useEffect } from "react";
import { createExpense } from "../../actions";

import api from "../../api";

import { AppContext } from "../../AppContext";

import RegistrationModal from "./RegistrationModal";

export default function CreateExpense(props) {
  const { state, dispatch } = React.useContext(AppContext);

  console.log(props);

  const onSubmit = async (payload) => {
    dispatch(await createExpense(payload));
    props.handleClose();
  };

  return (
    <div>
      <RegistrationModal
        handleClose={props.handleClose}
        hidden={props.hidden}
        onSubmit={onSubmit}
        modalHeader={"Create New Expense"}
        buttonName={"Create Expense"}
        data={{
          name: "",
          description: "",
          category: "",
          dateOfExpense: "",
          amount: "",
        }}
      />
    </div>
  );
}
