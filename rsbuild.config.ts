import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

import VueRouter from 'unplugin-vue-router/rspack';
import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { PiniaPlugin } from 'unplugin-auto-import/resolvers';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginVue(),

    // Vue Router 自动路由生成
    VueRouter({
      routesFolder: 'src/pages',
      dts: 'src/types/typed-router.d.ts',
    }),

    // 自动导入 Vue、Vue Router、Pinia 的 API
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        {
          pinia: ['defineStore', 'storeToRefs'],
        },
      ],
      resolvers: [PiniaPlugin()],
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
      },
    }),

    // 自动导入组件
    Components({
      dts: 'src/types/components.d.ts',
    }),
  ],

  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          // UnoCSS PostCSS 插件
          require('@unocss/postcss')({
            content: {
              filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
            },
          }),
        ],
      },
    },
  },

  // 解析优化
  resolve: {
    // 别名配置，优化模块解析速度
    alias: {
      '@': './src',
    },
  },

  html: {
    title: 'xxx',
  },

  // 开发服务器配置
  server: {
    cors: true, // 允许跨域请求
    host: '0.0.0.0', // 允许外部网络访问
  },
});
