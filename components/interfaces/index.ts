import { ReactNode } from 'react';

export interface IwidthHeightPxString  {
    w?:string;
    h?:string;
 }

 export interface IwidthHeightNums  {
    wNum?:string;
    hNum?:string;
 }
export interface ChildrenProps {
    children: ReactNode;
    logo?: string;
 }