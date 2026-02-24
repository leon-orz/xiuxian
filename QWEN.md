# 项目上下文 (QWEN.md)

## 项目概述

这是一个基于 **Vue 3 + TypeScript + Vite** 的前端项目模板。项目采用现代化的前端技术栈，支持类型检查、热重载和高效的开发体验。

### 核心技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.5.28 | 前端框架 |
| TypeScript | ~5.9.3 | 类型系统 |
| Vite | 7.3.1 | 构建工具 |
| Pinia | 3.0.4 | 状态管理 |
| Vue Router | 5.0.2 | 路由管理 |

### 项目结构

```
src/
├── main.ts          # 应用入口，初始化 Vue、Pinia、Router
├── App.vue          # 根组件
├── router/
│   └── index.ts     # 路由配置
└── stores/
    └── counter.ts   # Pinia 状态管理示例
```

### 路径别名

- `@/*` → `./src/*`

## 构建与运行

### 环境要求

- Node.js: `^20.19.0` 或 `>=22.12.0` (推荐 Volta 管理：24.12.0)

### 常用命令

```bash
# 安装依赖
npm install

# 开发模式（热重载）
npm run dev

# 类型检查 + 生产构建
npm run build

# 仅生产构建
npm run build-only

# 仅类型检查
npm run type-check

# 预览生产构建
npm run preview

# 代码格式化
npm run format
```

## 开发规范

### 代码风格

- **格式化**: Prettier (配置见 `.prettierrc.json`)
  - 无分号 (`semi: false`)
  - 单引号 (`singleQuote: true`)
  - 行宽 100 字符 (`printWidth: 100`)

### TypeScript 配置

- 扩展 `@vue/tsconfig/tsconfig.dom.json`
- 支持 `.vue` 文件的类型检查 (通过 `vue-tsc`)
- 包含 `env.d.ts` 和所有 `src/` 下的文件及 `.vue` 文件

### 推荐的 IDE 设置

- **VS Code** + **Vue (Official)** 插件 (禁用 Vetur)
- 启用 Vue.js devtools 浏览器扩展

### Vue 组件规范

- 使用 `<script setup lang="ts">` 语法
- 组合式 API (Composition API) 为首选模式

## 注意事项

- 路由配置目前为空数组，需根据实际需求添加路由
- Pinia store 示例为计数器模式，可按需扩展
- 项目为私有项目 (`"private": true`)
