import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  },
  presets: [
    presetUno(), // 默认预设
    presetAttributify(), // 属性模式
    presetIcons({
      // 图标支持
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    // 自定义快捷方式
    ['btn', 'px-4 py-2 rounded-lg font-medium transition-all duration-200'],
    ['btn-primary', 'btn bg-blue-500 hover:bg-blue-600 text-white'],
    ['btn-secondary', 'btn bg-gray-500 hover:bg-gray-600 text-white'],
  ],
  theme: {
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
  },
});
