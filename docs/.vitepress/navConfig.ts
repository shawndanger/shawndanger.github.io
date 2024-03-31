import { type DefaultTheme } from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '导读', link: '/guide/' },
    // {
    //   text: '计算机基础',
    //   items: [
    //     {
    //       text: 'java语言基础', items: [
    //         { text: '持续补充中...', link: '/' }
    //       ]
    //     },
    //     {
    //       text: '数据库基础', items: [
    //         { text: '持续补充中...', link: '/' }
    //       ]
    //     },
    //     {
    //       text: '计算机操作系统', items: [
    //         { text: '持续补充中...', link: '/' }
    //       ]
    //     },
    //     {
    //       text: '计算机网络', items: [
    //         { text: '持续补充中...', link: '/' }
    //       ]
    //     },
    //   ]
    // },
    {
      text: '数据结构与算法', items: [
        { text: '数据结构', link: '/structure/' },
        { text: '算法', link: '/algorithm/' }
      ]
    },
    {
      text: '设计模式', items: [
        { text: '设计模式', link: '/design/' }
      ]
    },
    {
      text: '架构设计', items: [
        { text: '架构设计', link: '/architecture/' }
      ]
    },
    {
      text: '个人成长', items: [
        { text: '个人成长', link: '/growth/' }
      ]
    },
    {
      text: '面试', items: [
        { text: '面试', link: '/interview/' }
      ]
    },
    {
      text: '工具', items: [
        { text: '工具', link: '/tools/' }
      ]
    },
    {
      text: '关于', items: [
        { text: '关于网站', link: '/about/' },
        { text: '网站用法', items:[
          {text: 'markdown-examples',link: '/about/examples/markdown-examples'},
          {text: 'api-examples',link: '/about/examples/api-examples'}
        ]}
      ]
    }

  ]
}