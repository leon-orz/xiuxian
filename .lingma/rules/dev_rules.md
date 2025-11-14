---
trigger: always_on
alwaysApply: true
---

## 技术栈规范

### 基础环境
- 使用JavaScript作为主要开发语言
- 采用 ES6+ 语法标准
- 使用 vite 作为构建工具
- 使用 npm/pnpm 管理依赖

### 框架与库
- Vue: 使用 Vue3 + Composition API
- Pinia: 状态管理
- Vue Router: 路由
- Scss: 样式预处理器
- Prettier: 代码规范工具
- API 调用: Axios 或 Fetch API
- Lodash.js: 函数库
- Day.js: 时间处理

### 代码风格规范
- 使用 Prettier 进行代码格式化
- 缩进: 2 (2个空格缩进)

### 技术约束
- 禁止在模板中使用复杂表达式，应提取到计算属性或方法中
- 时间处理统一使用Day.js
- Lodash.js按需引入, 避免全量导入

### Lodash.js使用规范
- 按需引入: 只引入需要的函数，避免全量导入
- 命名约定: 使用_作为Lodash的别名
- 常用函数: _.get, _.set, _.cloneDeep, _.isEmpty, _.debounce, _.throttle
- 避免过度使用: 简单操作优先使用原生JavaScript方法

### 命名规范
- 组件名: PascalCase (大驼峰命名, 例: MyComponent)
- 文件名: kebab-case (短横线命名, 例: my-component.vue)
- 变量名: camelCase (小驼峰命名, 例: myVariable)
- 常量名: UPPER_SNAKE_CASE (大写蛇形命名, 例: MAX_COUNT)
- 函数名: camelCase (小驼峰命名, 例: getData)

### 时间处理规范
- 统一使用Day.js进行时间处理
- 按需引入: 只引入需要的插件和语言包
- 格式化: 使用YYYY-MM-DD HH:mm:ss标准格式
- 时区处理: 默认使用本地时区，需要时区转换时明确指定

### 组件规范
- 使用组合式API
- 需要name属性
- name命名规则: PascalCase (大驼峰)
- 模板结构: single-file (单文件组件)

### 样式规范 Scss
- 使用CSS/SCSS
- 命名规范: BEM (Block__Element--Modifier)
- 变量文件路径: /src/styles/variables.scss
- 混入文件路径: /src/styles/mixins.scss
- 作用域样式: (使用scoped属性)

### 目录结构规范
- 组件目录: /src/components
- 视图目录: /src/views
- 状态管理目录: /src/stores
- 路由配置目录: /src/router
- 静态资源目录: /src/assets
- 工具函数目录: /src/utils
- API请求目录: /src/api
- 全局样式目录: /src/styles
- SCSS文件目录: /src/styles/scss

### 状态管理规范
- 使用Pinia
- Store命名规则: use{Feature}Store (use{功能}Store)
- Action应为异步

### 路由规范
- 使用Vue Router
- 路由组件: lazy-loading (懒加载)
- 路由名称: kebab-case (短横线命名)

### 注释规范
- 组件顶部必须添加功能描述注释
- 复杂函数必须添加JSDoc格式注释
- 组件props必须添加注释说明用途
- SCSS变量和mixin必须添加注释
- 工具函数必须说明参数和返回值

### JavaScript特定规则
- 使用严格模式
- 避免使用var: (使用let/const)
- 优先使用箭头函数
- 对象解构赋值: (推荐使用)

### 开发环境规范
- Vite配置文件: /vite.config.js
- Lodash配置: 按需引入，避免打包体积过大
- Day.js配置: 按需引入插件，避免全量导入

---

## 开发规范

### 1. 组件开发规范
- 组件必须使用 `<script setup>` 语法糖
- 组件必须包含功能描述注释
- 组件中props需要明确定义类型和默认值,如适用
- 组件中的方法需要添加适当注释说明用途
- 组件模板应该简洁,复杂逻辑应在script中处理
- 组件样式使用scoped防止样式污染
- 组件命名遵循PascalCase规范,并与文件名保持一致

### 2. 状态管理规范
- 使用Pinia进行全局状态管理
- Store文件统一放在/src/stores目录下
- Store命名遵循use{Feature}Store规范
- Actions用于异步操作,Getters用于计算属性
- 不应在组件中直接修改store状态,应通过actions或mutations
- 复杂的状态变更应添加注释说明业务逻辑

### 3. API 调用规范
- 所有API调用统一管理,放置在/src/api目录下
- 每个模块创建对应的API文件
- API方法需要添加注释说明接口用途、参数和返回值
- 使用Axios或Fetch API进行网络请求
- 请求和响应需要统一拦截处理
- 敏感信息不应硬编码在API文件中
- 错误处理应统一进行,避免在组件中重复处理

### 4. 代码规范
- 使用Prettier保证代码风格一致性
- 单个文件代码行数不宜过多,建议不超过500行
- 函数功能应单一,复杂功能拆分为多个小函数
- 变量命名应具有语义化,避免使用无意义的简写
- 重复使用的代码应封装成可复用的方法或组件
- 条件判断较多时应考虑使用策略模式等优化方式
- 避免魔法数字,应定义有意义的常量

---

## 最佳实践
1. **KISS 原则**：优先选择简单直接的解决方案
2. **YAGNI 原则**：避免过度设计未明确需求的功能
3. **渐进式开发**：从小功能开始迭代,逐步完善
4. **文档先行**：在开发前编写 API 文档和组件说明