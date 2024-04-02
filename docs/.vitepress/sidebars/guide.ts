import { type DefaultTheme } from 'vitepress'

export function sidebar_guide(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: '不写，就无法思考',
        collapsed: false,
        items: [
          { text: '不写，就无法思考', link: '/不写，就无法思考' },

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