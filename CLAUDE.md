# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 **Rsbuild + Vue 3** 的现代前端应用，采用了自动化路由、自动导入和原子化 CSS 的开发模式。

**核心特性：**
- 使用 `unplugin-vue-router` 实现基于文件系统的自动路由生成
- 使用 `unplugin-auto-import` 自动导入 Vue、Vue Router 和 Pinia API
- 使用 `unplugin-vue-components` 自动导入组件
- 使用 UnoCSS 实现原子化 CSS，支持属性模式和图标
- 使用 Pinia 进行状态管理

## 开发命令

```bash
npm run dev        # 启动开发服务器（http://localhost:3000）
npm run build      # 生产环境构建
npm run preview    # 预览生产构建
npm run format     # 使用 Prettier 格式化代码
```

## 项目架构

### 目录结构

```
src/
├── pages/         # 页面组件（自动生成路由）
├── router/        # 路由配置（使用 unplugin-vue-router）
├── stores/        # Pinia 状态管理
├── types/         # 自动生成的类型定义
├── index.ts       # 应用入口
├── index.css      # 全局样式
└── App.vue        # 根组件
```

### 自动路由系统

路由基于 `src/pages` 目录自动生成：
- `src/pages/home.vue` → `/home`
- `src/pages/about.vue` → `/about`
- `src/pages/users/[id].vue` → `/users/:id`

路由类型定义自动生成到 `src/types/typed-router.d.ts`，可以使用类型安全的路由导航：
```ts
import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/home'); // 类型安全
```

### 自动导入系统

以下 API 自动导入，无需手动 import：
- Vue: `ref`, `reactive`, `computed`, `watch`, `onMounted` 等
- Vue Router: `useRouter`, `useRoute`, `router.push` 等
- Pinia: `defineStore`, `storeToRefs`

组件自动导入：在 `src/pages` 或 `src/components` 中创建的 `.vue` 组件会自动注册。

### 状态管理

使用 Pinia 进行状态管理，Store 定义在 `src/stores` 目录：
```ts
// src/stores/example.ts
export const useExampleStore = defineStore('example', {
  state: () => ({ count: 0 }),
  getters: { doubleCount: (state) => state.count * 2 },
  actions: { increment() { this.count++; } }
});
```

使用时自动导入，无需手动 import。

### 样式系统

使用 **UnoCSS**（原子化 CSS）和预定义的快捷类：
- 预设快捷类：`btn`、`btn-primary`、`btn-secondary`
- 自定义颜色：`primary`、`secondary`、`success`、`warning`、`danger`
- 支持属性模式：`<div flex items-center gap-4>`
- 内置图标支持（通过 `presetIcons`）

优先使用 UnoCSS 原子类而非编写自定义 CSS。

### 路径别名

- `@` → `./src`

## 重要配置文件

- `rsbuild.config.ts` - Rsbuild 构建配置（包含插件、别名、服务器设置）
- `uno.config.ts` - UnoCSS 配置（预设、快捷类、主题）
- `tsconfig.json` - TypeScript 配置（严格模式、ES2020 目标）
- `.prettierrc` - Prettier 配置（单引号）

## 开发注意事项

1. **路由开发**：在 `src/pages` 中创建 `.vue` 文件即可自动生成路由
2. **组件使用**：组件无需手动导入，直接在模板中使用即可
3. **API 使用**：Vue/Router/Pinia API 自动导入，无需手动 import
4. **样式优先级**：优先使用 UnoCSS 原子类，需要时使用 `<style scoped>`
5. **TypeScript 严格模式**：项目启用了严格的类型检查，确保类型正确

## 参考文档

- [Rsbuild](https://rsbuild.rs)
- [Rspack](https://rspack.rs)
