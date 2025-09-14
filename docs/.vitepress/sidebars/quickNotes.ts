import { type DefaultTheme } from 'vitepress'
import {generateNestedSidebar} from "./genSidebar";
import path from "path";

export function sidebar_quickNotes(): DefaultTheme.SidebarItem[] {

  // console.log(generateNestedSidebar(path.resolve(__dirname, '../../src/随手记'), '', ))
  return generateNestedSidebar(path.resolve(__dirname, '../../src/随手记'), '', )

}