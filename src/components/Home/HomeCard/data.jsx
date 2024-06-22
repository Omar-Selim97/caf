import React from 'react';
import { FaFileInvoice } from "react-icons/fa6";
import { FaFilm } from "react-icons/fa6";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";

  export const items =[
    {
      "title": " إجمالى رصيد الخزنة",
      "price": " EGP 2000",
      "icon": <FaFilm />
    },
    {
      "title": "إجمالى قيم الدخل",
      "price": "2000 EGP",
      "icon": <FaFileInvoice />
    },
    {
      "title": "إجمالى قيم المصروفات",
      "price": " EGP 2000",
      "icon": <FaSquarePollHorizontal />
    },
    {
      "title": "إجمالى الأرباح",
      "price": "2000 EGP",
      "icon": <FaFileInvoiceDollar />
    }
  ];