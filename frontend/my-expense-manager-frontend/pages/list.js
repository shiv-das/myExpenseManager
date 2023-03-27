import * as React from "react";

import { AppContext } from "../AppContext";
import { auth, fetchPatients, searchPatients } from "../actions";
import CommonHeader from "../components/CommonHeader";
import RegistrationModal from "../components/RegistrationModal";
import { useState } from "react";
import { fetchExpenses, searchExpenses } from "../actions";

const styles = {
  table: {
    position: "absolute",
    inset: "auto auto 0px 0px",
    margin: 0,
    transform: "translate3d(522.5px, 3847.5px, 0px)",
  },
};

export default function List(props) {
  const { state, dispatch } = React.useContext(AppContext);

  const [searchNameField, setsearchNameField] = React.useState("");

  React.useEffect(() => {
    if (!localStorage.getItem("x-auth-token")) {
      props.router.push("/");
    } else {
      dispatch(auth({}, true));
    }
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    const expenses = async () => {
      dispatch(await fetchExpenses(page, rowsPerPage));
    };
    if (state.auth["isSignedIn"]) {
      expenses();
    }
  }, [state.auth["isSignedIn"]]);

  //console.log(Object.values(state.expenses)[1].name);
  const arr = Object.values(state.expenses);

  const handleNameSearch = async (e) => {
    setsearchNameField(e.target.value);
    console.log(e.target.value);
    dispatch(await searchExpenses(e.target.value));
  };

  const [isModalHidden, setIsModalHidden] = React.useState(true);

  return (
    <div>
      <CommonHeader />

      <RegistrationModal hidden={isModalHidden} setHidden={setIsModalHidden} />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between pb-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Expense by Name"
              onChange={handleNameSearch}
            />
          </div>
          <div className="text-center lg:text-left">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
              onClick={() => setIsModalHidden(false)}
            >
              Create New Expense
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Expense
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3">
                Created By
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {arr.map((row) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row.description}
                  </th>
                  <td className="px-6 py-4">{row.category}</td>
                  <td className="px-6 py-4">{row.dateOfExpense}</td>
                  <td className="px-6 py-4">{"INR " + row.amount}</td>
                  <td className="px-6 py-4">just now</td>
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
