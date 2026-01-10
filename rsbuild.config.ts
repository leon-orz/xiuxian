import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import UnoCSS from '@unocss/postcss';
import VueRouter from 'unplugin-vue-router/rspack';
import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { PiniaPlugin } from 'unplugin-auto-import/resolvers';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginVue(), UnoCSS()],

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
