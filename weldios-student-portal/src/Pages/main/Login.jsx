import React from "react";
import MainLayout from "../../Layout/MainLayout";
import Log from "../../Assets/img/LoginImg.png";
import { useNavigate } from "react-router";
import LoginBtn from "../../Components/Button/LoginBtn";

function Login() {
	const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="w-full flex">
        <div className="w-full">
          <img className="h-[100vh] w-full object-cover" src={Log} alt="" />
        </div>
        <div className="w-full">
          <div className="w-[70%] mt-[12rem] mx-auto border-2 border-none rounded-xl px-10 pt-24 pb-7 shadow-xl">
            <div className="font-[800] text-[32px] text-[#E36A06]">
              <h1>Student Login</h1>
            </div>
            <form className="">
              <div className="mt-[2rem] flex flex-col">
                <label
                  className="mb-1 font-semibold text-sm text-[#343434]"
                  htmlFor="registrationnum"
                >
                  Registration Number
                </label>
                <input
                  name="registratiion number"
                  className="rounded-md p-3 pl-4 border"
                  //   value={inputValues.accountnumber}
                  //   onChange={handleChange}
                  type="number"
                  placeholder="Enter your registration number"
                />
              </div>
              <p className="mt-1 pl-2 text-xs text-red-600">
                {/* {inputErrors.accountnumber} */}
              </p>
              <div className="mt-9 flex flex-col">
                <label
                  className="mb-1 font-semibold text-sm text-[#343434]"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  name="password"
                  className="rounded-md p-3 pl-4 border"
                  //   value={inputValues.password}
                  //   onChange={handleChange}
                  type="number"
                  placeholder="Enter your password"
                />
              </div>
              <p className="mt-1 pl-2 text-xs text-red-600">
                {/* {inputErrors.password} */}
              </p>
              <div className="text-center my-9 w-full">
                <LoginBtn />
              </div>
              <div className="text-center">
                <p className="mt-2 text-base font-semibold text-[#343434]">
                  A new student?{" "}
                  <b
                    className="cursor-pointer font-bold text-[#5166D4]"
                    onClick={() => navigate("/")}
                  >
                    Initialize your student account
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

export default Login;
