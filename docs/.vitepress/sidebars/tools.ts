import { type DefaultTheme } from 'vitepress'

export function sidebar_tools(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: '待补充',
        collapsed: false,
        items: [
          { text: '待补充', link: '/' },

        ]
      },
      {
        text: '待补充',
        collapsed: false,
        items: [
          { text: '待补充', link: '/' },

        ]
      },
      { text: '其它链接', base: '/about/', link: '/' }
    ]
  }