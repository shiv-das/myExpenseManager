import React, { useContext, useState, useEffect } from "react";
import { fetchExpense, editExpense } from "../../actions";

import api from "../../api";

import { AppContext } from "../../AppContext";

import RegistrationModal from "./RegistrationModal";

export default function EditExpense(props) {
  const { state, dispatch } = React.useContext(AppContext);
  const [render, setRender] = React.useState(false);
  const [expense, setExpense] = useState({
    name: "",
    description: "",
    category: "",
    dateOfExpense: "",
    amount: "",
  });

  console.log(props);

  React.useEffect(() => {
    console.log("YU", props.id);
    const fetching = async () => {
      dispatch(await fetchExpense(props.id));
    };
    fetching();
  }, [props.id]);

  console.log(state.expense, props.id);
  React.useEffect(() => {
    if (state.expense && state.expense._id) {
      setRender(true);
      setExpense({
        name: state.expense.name,
        description: state.expense.description,
        category: state.expense.category,
        dateOfExpense: state.expense.dateOfExpense,
        amount: state.expense.amount,
      });
    }
  }, [state.expense]);
  const onSubmit = async (payload) => {
    dispatch(await editExpense(payload, props.id));
    props.handleClose();
  };

  if (!render && !props.hidden) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RegistrationModal
        handleClose={props.handleClose}
        hidden={props.hidden}
        onSubmit={onSubmit}
        data={expense}
        modalHeader={"Update Expense"}
        buttonName={"Update Expense"}
      />
    </div>
  );
}
