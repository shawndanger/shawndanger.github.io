import { type DefaultTheme } from 'vitepress'
import {generateNestedSidebar} from "./genSidebar";
import path from "path";

export function sidebar_tools(): DefaultTheme.SidebarItem[] {
    // return [
    //   {
    //     text: '待补充',
    //     collapsed: false,
    //     items: [
    //       { text: '待补充', link: '/' },
    //
    //     ]
    //   },
    //   {
    //     text: '待补充',
    //     collapsed: false,
    //     items: [
    //       { text: '待补充', link: '/' },
    //
    //     ]
    //   },
    //   { text: '其它链接', base: '/about/', link: '/' }
    // ]
  return generateNestedSidebar(path.resolve(__dirname, '../../src/工具'), '', )

}