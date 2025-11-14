import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [vue()],
  
  // 路径解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    open: true
  },
  
  // 构建配置
  build: {
    // 使用 Rolldown 优化构建
    target: 'baseline-widely-available',
    rollupOptions: {
      output: {
        manualChunks: {
          // 将第三方库单独打包以利用浏览器缓存
          vendor: ['vue', 'vue-router'],
          utils: ['axios', 'dayjs', 'lodash-es']
        }
      }
    }
  },
  
  // CSS 配置
  css: {
    devSourcemap: true
  },
  
  // 依赖优化配置
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'axios', 'dayjs', 'lodash-es']
  }
})