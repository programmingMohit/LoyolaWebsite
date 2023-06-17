import React from "react";
import { useState, useEffect } from "react";
import ArtsStaff from "@/components/departments/ArtsStaff";
import CommerceStaff from "@/components/departments/CommerceStaff";
import ManagementStaff from "@/components/departments/ManagementStaff";
import LanguagesStaff from "@/components/departments/LanguagesStaff";
import NonTeaching from "@/components/departments/NonTeaching";
import { Lobster_Two } from "next/font/google";

const lobster = Lobster_Two({ subsets: ["latin"], weight: "400" });

const departments = ({ staff_details }) => {
  // console.log(staff_details);
  const [departments, setDepartments] = useState("management");
  return (
    <>
      <div className="flex flex-col pb-8 justify-center bg-gradient-to-tr from-slate-300 to-orange-50">
        <h1
          className={`text-6xl font-extrabold my-4 text-center text-shadow-custom-blue text-slate-800 ${lobster.className}  `}
        >
          Facilitators
        </h1>
        <div className="flex flex-row mx-6">
          <section className="w-1/5">
            <div className="w-full text-base font-bold text mt-20  text-right text-navbar-theme ">
              <button
                onClick={() => setDepartments("management")}
                className={` py-1 hover:underline rounded-l-lg  px-4  my-2 ${
                  departments == "management"
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white bg-"
                    : "text-navbar-theme"
                }`}
              >
                Management
              </button>
              <br />
              <button
                onClick={() => setDepartments("languages")}
                className={` py-1 hover:underline rounded-l-lg px-4 my-2 ${
                  departments == "languages"
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white"
                    : "text-navbar-theme"
                }`}
              >
                Department of Languages
              </button>
              <button
                onClick={() => setDepartments("commerce")}
                className={`py-1 hover:underline rounded-l-lg px-4 my-2 ${
                  departments == "commerce"
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white"
                    : "text-navbar-theme"
                }`}
              >
                Department of Commerce
              </button>
              <br />
              <button
                onClick={() => setDepartments("arts")}
                className={` py-1 hover:underline rounded-l-lg px-4 my-2 ${
                  departments == "arts"
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white"
                    : "text-navbar-theme"
                }`}
              >
                Department of Arts
              </button>
              <br />
              <button
                onClick={() => setDepartments("nonteaching")}
                className={` py-1 hover:underline rounded-l-lg px-4 my-2 ${
                  departments == "nonteaching"
                    ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 text-white"
                    : "text-navbar-theme"
                }`}
              >
                Non-Teaching Staff
              </button>
              <br />
            </div>
          </section>

          <section className="mx-auto bg-gradient-to-r from-blue-300 via-blue-100 to-slate-200 rounded-2xl">
            {departments == "management" && (
              <ManagementStaff data={staff_details["management-staff"]} />
            )}
            {departments == "languages" && (
              <LanguagesStaff data={staff_details["language-staff"]} />
            )}
            {departments == "commerce" && (
              <CommerceStaff data={staff_details["commerce-staff"]} />
            )}
            {departments == "arts" && (
              <ArtsStaff data={staff_details["arts-staff"]} />
            )}
            {departments == "nonteaching" && (
              <NonTeaching data={staff_details["nonteaching-staff"]} />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default departments;

export async function getServerSideProps() {
  const staff_details = {
    "management-staff": "",
    "language-staff": "",
    "commerce-staff": "",
    "arts-staff": "",
    "nonteaching-staff": "",
  };
  for (let key in staff_details) {
    staff_details[key] = await fetch(`http://localhost:3000/api/${key}`);
    staff_details[key] = await staff_details[key].json();
  }

  return {
    props: { staff_details },
  };
}
