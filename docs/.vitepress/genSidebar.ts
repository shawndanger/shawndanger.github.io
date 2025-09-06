import { type DefaultTheme } from 'vitepress'
import fs from 'fs'
import path from 'path'

// 定义单项覆盖配置
interface OverrideConfig {
  [key: string]: Partial<DefaultTheme.SidebarItem>
}

/**
 * 读取目录下的文件并生成嵌套的侧边栏配置
 * @param dirPath 目录路径
 * @param basePath 基础路径
 * @param overrides 覆盖配置
 * @returns 侧边栏配置项数组
 */
export function generateNestedSidebar(
  dirPath: string,
  basePath: string = '',
  overrides: OverrideConfig = {}
): DefaultTheme.SidebarItem[] {
  try {
    const items: DefaultTheme.SidebarItem[] = []
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    // 分离文件和目录
    const files = entries.filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    const directories = entries.filter(entry => entry.isDirectory())

    // 处理文件
    const fileItems = files
      .map(file => {
        const fileName = path.parse(file.name).name
        // 如果是 index.md，则作为当前目录的链接
        if (fileName === 'index') {
          return {
            text: '简介',
            link: `${basePath}/`
          }
        }
        return {
          text: fileName,
          link: `${basePath}/${fileName}`
        }
      })
      .filter(Boolean) as DefaultTheme.SidebarItem[]

    // 如果当前目录有 index.md，则当前目录项应该有链接
    const indexFile = files.find(file => path.parse(file.name).name === 'index')
    const hasIndex = !!indexFile

    // 处理子目录
    const directoryItems = directories.map(dir => {
      const dirPathFull = path.join(dirPath, dir.name)
      const dirBasePath = `${basePath}/${dir.name}`

      // 递归生成子目录的侧边栏
      const subItems = generateNestedSidebar(dirPathFull, dirBasePath, overrides)

      // 检查是否有覆盖配置
      const override = overrides[dir.name] || {}

      // 构建目录项
      const dirItem: DefaultTheme.SidebarItem = {
        text: dir.name,
        collapsed: false,
        items: subItems,
        ...override
      }

      // 如果目录中有 index.md，则添加链接
      if (fs.existsSync(path.join(dirPathFull, 'index.md'))) {
        // dirItem.link = `${dirBasePath}/`
      }

      return dirItem
    })

    // 合并文件和目录项
    items.push(...fileItems, ...directoryItems)

    return items
  } catch (error) {
    console.error(`读取目录失败: ${dirPath}`, error)
    return []
  }
}

// 使用示例
function sidebar_guide(): DefaultTheme.SidebarItem[] {

  // 假设文档在 docs 目录下,生成嵌套侧边栏配置
  return generateNestedSidebar(path.resolve(__dirname, '../src'), '', )
}
