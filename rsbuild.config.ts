import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginVue()],

  source: {
    entry: {
      index: './src/index.ts',
    },
  },

  tools: {
    rspack: {
      plugins: [
        // 自动导入 Vue、Vue Router、Pinia 的 API
        AutoImport({
          imports: [
            'vue',
            'vue-router',
            {
              pinia: ['defineStore', 'storeToRefs'],
            },
          ],
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
    },
  },

  // 解析优化
  resolve: {
    alias: {
      '@': './src',
    },
  },

  html: {
    title: 'XiuXian',
  },

  // 开发服务器配置
  server: {
    cors: true,
    host: '0.0.0.0',
  },
});
