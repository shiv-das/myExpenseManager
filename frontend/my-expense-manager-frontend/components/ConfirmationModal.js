import * as React from "react";
import api from "../api";
import { deleteExpense } from "../actions";
import { AppContext } from "../AppContext";
export default function ConfirmationModal(props) {
  const { state, dispatch } = React.useContext(AppContext);
  console.log(props.id);
  const handleClose = () => props.setHidden(true);

  const onDelete = async () => {
    console.log(props.id);
    const id = props.id;
    handleClose();
    dispatch(await deleteExpense(id));
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full backdrop-blur-sm backdrop-contrast-50
      flex items-center justify-center h-screen ${
        props.hidden ? "hidden" : ""
      } `}
    >
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className=" w-full h-full absolute z-10 inset-0"></div>
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
          <div className="md:flex items-center">
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p className="font-bold">Delete this Expense</p>
              <p className="text-sm text-gray-700 mt-1">
                Are you sure you want to delete this Expense?
              </p>
            </div>
          </div>
          <div className="text-center md:text-right mt-4 md:flex md:justify-end">
            <button
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
              onClick={onDelete}
            >
              Yes, Delete!
            </button>
            <button
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
              onClick={handleClose}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
