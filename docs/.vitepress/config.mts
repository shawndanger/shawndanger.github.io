import { defineConfig, type DefaultTheme } from 'vitepress'
import { nav } from './navConfig.ts'
import { sidebar_guide } from './sidebars/guide.ts'
import { sidebar_structure } from './sidebars/structure.ts'
import { sidebar_algorithm } from './sidebars/algorithm.ts'
import { sidebar_design} from './sidebars/design.ts'
import { sidebar_architecture } from './sidebars/architecture.ts'
import { sidebar_growth } from './sidebars/growth.ts'
import { sidebar_interview } from './sidebars/interview.ts'
import { sidebar_tools } from './sidebars/tools.ts'
import { sidebar_about } from './sidebars/about.ts'
import { sidebar_about_examples } from './sidebars/aboutExamples.ts'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "程序匠",
  description: "程序匠",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebar_guide() },
      '/structure/': { base: '/structure/', items: sidebar_structure() },
      '/algorithm/': { base: '/algorithm/', items: sidebar_algorithm() },
      '/design/': { base: '/design/', items: sidebar_design() },
      '/architecture/': { base: '/architecture/', items: sidebar_architecture() },
      '/growth/': { base: '/growth/', items: sidebar_growth() },
      '/interview/': { base: '/interview/', items: sidebar_interview() },
      '/tools/': { base: '/tools/', items: sidebar_tools() },
      '/about/': { base: '/about/', items: sidebar_about() },
      '/about/examples/': { base: '/about/examples/', items: sidebar_about_examples() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shawndanger' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2024-${new Date().getFullYear()} shawndanger.`
    }
  },
  markdown: {
    lineNumbers: true
  },
  lastUpdated: {
    text: '最后更新时间',
    formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
    }
  }
})
