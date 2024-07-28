/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};


export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};



export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
}


export type FieldType = {
  id?: string;
  password?: string;
};


export type TUser = {
  id: string;
  role: string;
  iat: number;
  exp: number;
};


export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TAcademicSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta
  success: boolean;
  message: string;

};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};