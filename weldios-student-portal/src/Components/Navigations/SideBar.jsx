import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";



function SideBar(side) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!side.isNew ? (
        <div className="pt-[2rem]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B98] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="#9B9B98"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.125 3.125H11.4583V11.4583H3.125V3.125ZM3.125 13.5417H11.4583V21.875H3.125V13.5417ZM13.5417 3.125H21.875V11.4583H13.5417V3.125ZM13.5417 13.5417H21.875V21.875H13.5417V13.5417ZM15.625 5.20833V9.375H19.7917V5.20833H15.625ZM15.625 15.625V19.7917H19.7917V15.625H15.625ZM5.20833 5.20833V9.375H9.375V5.20833H5.20833ZM5.20833 15.625V19.7917H9.375V15.625H5.20833Z" />
            </svg>
            <p className="ml-3">Dashboard</p>
          </NavLink>

          <NavLink
            to="/account"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 px-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <CgProfile color="" size={25} />
            <p className="ml-3">My Account</p>
            <div className="mt-1 ml-6">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>

          <NavLink
            to="/wallet"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <GiWallet size={25} />
            <p className="ml-3">Wallet</p>
          </NavLink>

          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="#9B9B9B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.9561 16.55C16.9561 16.9759 16.6396 17.3278 16.2291 17.3835L16.1149 17.3912L2.88035 17.3911L6.02912 20.5272C6.35838 20.855 6.35961 21.3876 6.03187 21.7168C5.73392 22.0162 5.26667 22.0444 4.9368 21.8008L4.84227 21.7196L0.247568 17.1461C0.220493 17.1185 0.195908 17.0904 0.173246 17.0608L0.247568 17.1461C0.206114 17.1048 0.169861 17.0603 0.138811 17.0134C0.128609 16.997 0.118191 16.98 0.108377 16.9626C0.0986385 16.9464 0.0900917 16.93 0.0821228 16.9133C0.0748539 16.8969 0.0675182 16.8802 0.0607185 16.8633C0.0515175 16.8418 0.0437279 16.8197 0.0368843 16.7974C0.033371 16.7843 0.0295944 16.7708 0.0261497 16.7572C0.0194988 16.733 0.0144787 16.7086 0.01054 16.6842C0.00923729 16.6727 0.00756645 16.6607 0.00615501 16.6486C0.00235748 16.621 0.000499725 16.5936 -2.67029e-05 16.5661C0.000490189 16.5607 0.00043869 16.5554 0.00043869 16.55L-2.67029e-05 16.5336C0.000499725 16.5062 0.00235748 16.4788 0.00554848 16.4516L0.00043869 16.55C0.00043869 16.5042 0.00410271 16.4592 0.0111542 16.4154C0.0144768 16.3911 0.0195007 16.3668 0.0256062 16.3427C0.0294209 16.3299 0.0329876 16.3171 0.0368443 16.3045C0.0435658 16.2804 0.0520439 16.2564 0.0616379 16.2328C0.0675869 16.2198 0.0730305 16.2074 0.078764 16.1951C0.0870476 16.1757 0.097002 16.1563 0.107761 16.1372C0.118246 16.12 0.128635 16.103 0.139595 16.0864C0.147366 16.0735 0.156319 16.0607 0.165667 16.0482L0.173246 16.0392C0.195908 16.0096 0.220493 15.9815 0.246817 15.9552L0.247568 15.9537L4.84227 11.3802C5.17153 11.0525 5.70413 11.0537 6.03187 11.3829C6.32982 11.6823 6.35588 12.1497 6.11078 12.4784L6.02912 12.5725L2.87811 15.7087L16.1149 15.7088C16.5795 15.7088 16.9561 16.0854 16.9561 16.55ZM19.9995 5.41457L20 5.43095C19.9995 5.45836 19.9976 5.48575 19.9944 5.51302L19.9995 5.41457C19.9995 5.46039 19.9959 5.50536 19.9888 5.5492C19.9855 5.57317 19.9806 5.59724 19.9746 5.6211C19.9705 5.63512 19.9664 5.64942 19.9621 5.66356C19.9558 5.68565 19.9483 5.70702 19.9398 5.72813C19.933 5.74338 19.9263 5.75883 19.9191 5.77403C19.9113 5.79209 19.9021 5.80988 19.8922 5.82739C19.883 5.84238 19.874 5.85723 19.8646 5.87176C19.8557 5.88672 19.8453 5.90169 19.8343 5.91639L19.7524 6.01087L15.1577 10.5844C14.8284 10.9121 14.2958 10.9109 13.9681 10.5816C13.6702 10.2823 13.6441 9.81493 13.8892 9.48619L13.9709 9.39203L17.1232 6.255L3.88506 6.25574C3.42049 6.25574 3.04388 5.87914 3.04388 5.41457C3.04388 4.98871 3.36034 4.63677 3.77092 4.58107L3.88506 4.57339L17.1221 4.57264L13.9709 1.43735C13.6715 1.13941 13.6433 0.672153 13.8869 0.342284L13.9681 0.247751C14.266 -0.0515746 14.7333 -0.0798032 15.0632 0.163774L15.1577 0.245002L19.7524 4.81852L19.7978 4.86805C19.8078 4.87968 19.8174 4.89158 19.8267 4.90375L19.7524 4.81852C19.7939 4.85978 19.8301 4.90429 19.8612 4.95122C19.8714 4.9676 19.8818 4.98462 19.8916 5.00203C19.9013 5.01819 19.9099 5.03461 19.9178 5.05125C19.9251 5.06768 19.9325 5.08434 19.9393 5.10127C19.9485 5.12279 19.9562 5.14486 19.9631 5.16715C19.9667 5.18072 19.9706 5.19461 19.9741 5.20864C19.9804 5.23124 19.9851 5.25408 19.9889 5.27705C19.9906 5.29087 19.9925 5.30441 19.9941 5.31805C19.9976 5.34401 19.9994 5.37065 20 5.39731C19.9995 5.40319 19.9995 5.40887 19.9995 5.41457Z" />
            </svg>

            <p className="ml-3">Transactions</p>
          </NavLink>

          <NavLink
            to="/fund"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="#9B9B9B"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.94871 20.1975H17.0513V23H0.94871V20.1975ZM9 0L0 9.39814L1.89742 11.3795L7.65812 5.36396V17.395H10.3419V5.36396L16.1026 11.3795L18 9.39814L9 0Z" />
            </svg>

            <p className="ml-3">Fund Transfer</p>
          </NavLink>

          <NavLink
            to="/deposit"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <FaPiggyBank size={25} />
            <p className="ml-3">Deposit</p>
            <div className="mt-1 ml-[61px]">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>

          <NavLink
            to="/withdraw"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <BiMoneyWithdraw size={25} />
            <p className="ml-3">Withdraw</p>
            <div className="mt-1 ml-11">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>

          <NavLink
            to="/invoice"
            className={({ isActive }) =>
              "flex text-xl items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <FaFileInvoiceDollar size={25} />
            <p className="ml-3 ">Invoice</p>
            <div className="mt-1 ml-[67px]">
              <MdOutlineKeyboardArrowRight />
            </div>
          </NavLink>
          <div className="primary px-4 pt-9 text-[13px] leading-[17px]">
            <h1>MERCHANTS</h1>
          </div>
          <div className="relative">
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex cursor-pointer text-xl mt-2 items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200"
            >
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6001 13L22.6001 7L16.6001 1"
                  stroke="#9B9B9B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 1L1 7L7 13"
                  stroke="#9B9B9B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="ml-3 ">Developer</p>
              <div className="ml-[35px]">
                {!isOpen ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowUp />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="">
                <div className="w-full">
                  <h1 className="primary px-[50px] pt-2 pb-2 flex items-center hover:bg-transparent cursor-pointer rounded-r-lg border-l-transparent hover:border-lime-500 border-l-4">
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4.5" r="4" fill="#7AC231" />
                    </svg>
                    <p className="ml-[6px]">Setting</p>
                  </h1>
                  <h1 className="primary px-[50px] pt-2 pb-2 flex items-center hover:bg-transparent cursor-pointer rounded-r-lg border-l-transparent hover:border-lime-500 border-l-4">
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4.5" r="4" fill="#9B9B9B" />
                    </svg>
                    <p className="ml-[6px]">API Doc</p>
                  </h1>
                  <h1 className="primary px-[50px] pt-2 pb-2 flex items-center hover:bg-transparent cursor-pointer rounded-r-lg border-l-transparent hover:border-lime-500 border-l-4">
                    <svg
                      width="8"
                      height="9"
                      viewBox="0 0 8 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4.5" r="4" fill="#9B9B9B" />
                    </svg>
                    <p className="ml-[6px]">API Setting</p>
                  </h1>
                </div>
              </div>
            )}
          </div>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              "flex text-xl mt-2 items-center text-[#9B9B9B] py-3 pl-4 pr-4 rounded-[20px] transition duration-200 nav-link-button" +
              (isActive ? " selected" : "cursor-pointer")
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#9b9b9b"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.75 13.5L17.6895 14.5605L19.6252 16.5H13.5C12.7044 16.5 11.9413 16.8161 11.3787 17.3787C10.8161 17.9413 10.5 18.7044 10.5 19.5C10.5 20.2956 10.8161 21.0587 11.3787 21.6213C11.9413 22.1839 12.7044 22.5 13.5 22.5H15V21H13.5C13.1022 21 12.7206 20.842 12.4393 20.5607C12.158 20.2794 12 19.8978 12 19.5C12 19.1022 12.158 18.7206 12.4393 18.4393C12.7206 18.158 13.1022 18 13.5 18H19.6252L17.688 19.9402L18.75 21L22.5 17.25L18.75 13.5Z" />
              <path d="M7.5 16.5H3L2.99775 5.1795L11.5732 11.1165C11.6986 11.2033 11.8475 11.2497 12 11.2497C12.1525 11.2497 12.3014 11.2033 12.4268 11.1165L21 5.1825V12H22.5V4.5C22.4996 4.1023 22.3414 3.721 22.0602 3.43978C21.779 3.15856 21.3977 3.0004 21 3H3C2.60256 3 2.22137 3.15773 1.94013 3.43854C1.65889 3.71936 1.5006 4.10032 1.5 4.49775V16.5C1.5006 16.8976 1.65882 17.2788 1.94 17.56C2.22117 17.8412 2.60236 17.9994 3 18H7.5V16.5ZM19.3493 4.5L12 9.588L4.65075 4.5H19.3493Z" />
            </svg>

            <p className="ml-3 ">Support</p>
          </NavLink>
          <div className=" px-4 pt-[.5rem]">
            <p>percent</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SideBar