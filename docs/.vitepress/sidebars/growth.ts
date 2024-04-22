import { type DefaultTheme } from 'vitepress'

export function sidebar_growth(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: '精彩文章',
        collapsed: false,
        items: [
          { text: '如何超过大多数人', link: '/如何超过大多数人.md' },

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