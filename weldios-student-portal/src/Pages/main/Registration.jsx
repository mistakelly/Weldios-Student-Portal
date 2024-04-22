import React from "react";
import MainLayout from "../../Layout/MainLayout";
import Regis from "../../Assets/img/RegisImg.png";
import { useNavigate } from "react-router";
import CredentialBtn from "../../Components/Button/CredentialBtn";

function Registration() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="w-full flex">
        <div className="w-full">
          <img className="h-[100vh] w-full object-cover" src={Regis} alt="" />
        </div>
        <div className="w-full">
          <div className="w-[70%] mt-[7rem] mx-auto border-2 border-none rounded-xl px-10 pt-24 pb-7 shadow-xl">
            <div className="font-[800] text-[32px] text-[#E36A06]">
              <h1>Registration</h1>
            </div>
            <form className="">
              <div className="mt-[2rem] flex flex-col">
                <label
                  className="mb-1 font-semibold text-sm text-[#343434]"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  name="fullname"
                  className="rounded-md p-3 pl-4 border"
                  //   value={inputValues.accountnumber}
                  //   onChange={handleChange}
                  type="text"
                  pattern="[a-zA-Z]+"
                  placeholder="Enter your full name"
                  onChange={(event) => {
                    event.target.value = event.target.value.replace(
                      /[^a-zA-Z]/g,
                      ""
                    );
                  }}
                />
              </div>
              <p className="mt-1 pl-2 text-xs text-red-600">
                {/* {inputErrors.accountnumber} */}
              </p>
              <div className="mt-9 flex flex-col">
                <label
                  className="mb-1 font-semibold text-sm text-[#343434]"
                  htmlFor="matricnum"
                >
                  Matriculation Number
                </label>
                <input
                  name="matricnum"
                  className="rounded-md p-3 pl-4 border"
                  //   value={inputValues.password}
                  //   onChange={handleChange}
                  type="text"
                  placeholder="Enter your matriculation number"
                />
              </div>
              <p className="mt-1 pl-2 text-xs text-red-600">
                {/* {inputErrors.password} */}
              </p>
              <div className="mt-9 flex flex-col">
                <label
                  className="mb-1 font-semibold text-sm text-[#343434]"
                  htmlFor="emailaddress"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  className="rounded-md p-3 pl-4 border"
                  // value={inputValues.email}
                  // onChange={handleChange}
                  type="email"
                  placeholder="Enter your email address"
                />
                <p className="mt-1 pl-2 text-left text-xs text-red-600">
                  {/* {inputErrors.email} */}
                </p>
              </div>
              <div className="text-center my-9 w-full">
                <CredentialBtn />
              </div>
              <div className="text-center">
                <p className="mt-2 text-base font-semibold text-[#343434]">
                  Have an account?{" "}
                  <b
                    className="cursor-pointer font-bold text-[#5166D4]"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </b>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Registration;
