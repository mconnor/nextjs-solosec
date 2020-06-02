import { ReactNode } from 'react';

export interface IwidthHeightPxString  {
    w?:string;
    h?:string;
    bgSize?:string;
 }

 export interface IwidthHeightNums  {
    wNum?:number;
    hNum?:number;
   
 }
export interface ChildrenProps {
    children: ReactNode;
    logo?: string;
 }
export interface Iscale {
    scale: number;
}

export interface Iboolean  {
    isOpen: boolean;
}

export interface Imodal extends Iscale, Iboolean {

}