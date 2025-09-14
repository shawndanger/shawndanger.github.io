import {type DefaultTheme} from 'vitepress'

export function nav(): DefaultTheme.NavItem[] {
    return [
        {text: '首页', link: '/'},
        {text: '计算机基础', link: '/计算机基础'},
        {text: '大数据', link: '/大数据'},
        {text: '成长思考', link: '/成长思考'},
        {text: '随手记', link: '/随手记'},
        {text: '面试宝典', link: '/面试'},
        {text: '开源工具', link: '/工具'},
        {
            text: '关于本站', link: '/关于/',items: [
                {
                    text: '网站用法', items: [
                        {text: 'markdown-examples', link: '/about/examples/markdown-examples'},
                        {text: 'api-examples', link: '/about/examples/api-examples'}
                    ]
                }
            ]
        }

    ]
}