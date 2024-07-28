/* eslint-disable @typescript-eslint/no-explicit-any */
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


  export type TResponse = {
    data?: any;
    error?: TError;
 
  };