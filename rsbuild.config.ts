import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginVue()],

  // 开发服务器配置
  server: {
    port: 3000, // 默认端口，被占用时会自动递增
    host: '0.0.0.0', // 允许外部网络访问
  },

  // 性能优化配置
  performance: {
    // 开启持久化缓存，大幅提升二次构建速度
    buildCache: true,
    // 优化分块策略
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },

  // 输出优化配置
  output: {
    // 生成source map，开发环境用'source-map'，生产环境建议用'hidden-source-map'
    sourceMap: {
      js: 'source-map',
    },

    // 代码压缩优化
    minify: true, // 默认开启，可以进一步配置

    // 资源内联优化
    dataUriLimit: 8192, // 小于8KB的图片转为base64内联

    // 优化文件名哈希
    filenameHash: true,
  },

  // 解析优化
  resolve: {
    // 别名配置，优化模块解析速度
    alias: {
      '@': './src',
    },
  },

  // 开发环境配置
  dev: {
    // 开启热更新
    hmr: true,
  },
});
