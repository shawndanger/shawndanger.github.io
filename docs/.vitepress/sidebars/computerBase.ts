import { type DefaultTheme } from 'vitepress'
import {generateNestedSidebar} from "./genSidebar";
import path from "path";

export function sidebar_ComputerBase(): DefaultTheme.SidebarItem[] {

  // console.log(generateNestedSidebar(path.resolve(__dirname, '../../src/计算机基础'), '', ))
  return generateNestedSidebar(path.resolve(__dirname, '../../src/计算机基础'), '', )

}