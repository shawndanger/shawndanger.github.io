import { type DefaultTheme } from 'vitepress'

export function sidebar_about_examples(): DefaultTheme.SidebarItem[] {
    return  [
        {
          text: '示例',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
  }