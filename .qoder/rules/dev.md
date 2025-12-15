---
trigger: always_on
alwaysApply: true
---


# 编码风格规范

## 通用规范

### 命名规范
- **变量名**: 使用小驼峰命名法，如 `userName`, `maxCount`
- **常量名**: 使用大写字母和下划线，如 `MAX_VALUE`, `DEFAULT_TIMEOUT`
- **函数名**: 使用小驼峰命名法，如 `getUserInfo()`, `calculateTotal()`
- **类名**: 使用大驼峰命名法，如 `UserManager`, `DataProcessor`
- **接口名**: 使用大驼峰命名法，前缀可选 I，如 `IUserService` 或 `UserService`
- **类型名**: 使用大驼峰命名法，如 `UserType`, `ResponseData`
- **文件名**: 使用小驼峰或短横线命名，如 `userService.ts`, `user-service.ts`

### 代码组织
- 每个函数应专注于单一职责
- 函数长度建议不超过 50 行
- 文件长度建议不超过 500 行
- 相关功能应组织在同一模块中
- 使用 ES6+ 模块化导入导出

### 注释规范
- 使用中文注释
- 函数必须有 JSDoc 注释说明功能、参数和返回值
- 复杂逻辑必须添加行内注释
- 注释应简洁明了，避免冗余

### 代码格式
- 缩进使用 2 个空格
- 每行代码长度不超过 120 字符
- 运算符两侧添加空格
- 逗号后添加空格
- 使用分号结束语句
- 字符串优先使用单引号，模板字符串使用反引号

## JavaScript/TypeScript 特定规范

### 导入规范
// Node.js 内置模块
import * as fs from 'fs';
import * as path from 'path';

// 第三方库
import axios from 'axios';
import { Request, Response } from 'express';

// 本地模块 - 类型定义
import type { User, UserActivity } from './types';

// 本地模块 - 工具函数
import { helper } from './utils/helper';
import { UserModel } from './models/User';

### TypeScript 类型定义
- 优先使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型、交叉类型或复杂类型
- 为函数参数和返回值添加类型注解
- 避免使用 `any`，必要时使用 `unknown`
- 使用泛型提高代码复用性

### 变量声明
- 优先使用 `const`，需要重新赋值时使用 `let`
- 避免使用 `var`
- 解构赋值提高代码可读性

### 异常处理
- 使用 try-catch 捕获可能抛出的异常
- 异常信息应该清晰明确
- 必要时记录异常日志
- 异步函数使用 async/await，避免回调地狱

### 现代 JavaScript 特性
- 使用箭头函数简化代码
- 使用模板字符串拼接字符串
- 使用可选链 `?.` 和空值合并 `??`
- 使用扩展运算符 `...` 操作数组和对象

## 示例代码

interface UserActivity {
  score: number;
  timestamp: Date;
  type: string;
}

interface UserScore {
  userId: number;
  totalScore: number;
  activityCount: number;
}

/**
 * 计算用户积分
 * 
 * @param userId - 用户ID
 * @param activities - 用户活动列表
 * @returns 用户积分信息，如果计算失败返回 null
 */
const calculateUserScore = (
  userId: number,
  activities: UserActivity[]
): UserScore | null => {
  if (!activities || activities.length === 0) {
    return null;
  }

  let totalScore = 0;
  for (const activity of activities) {
    totalScore += activity.score ?? 0;
  }

  return {
    userId,
    totalScore,
    activityCount: activities.length
  };
};

/**
 * 异步获取用户积分
 * 
 * @param userId - 用户ID
 * @returns Promise<用户积分信息>
 */
const fetchUserScore = async (userId: number): Promise<UserScore | null> => {
  try {
    const activities = await getUserActivities(userId);
    return calculateUserScore(userId, activities);
  } catch (error) {
    console.error('获取用户积分失败:', error);
    return null;
  }
};

// 类的示例
class UserManager {
  private readonly users: Map<number, User>;

  constructor() {
    this.users = new Map();
  }

  /**
   * 添加用户
   * 
   * @param user - 用户对象
   */
  addUser(user: User): void {
    this.users.set(user.id, user);
  }

  /**
   * 获取用户
   * 
   * @param userId - 用户ID
   * @returns 用户对象或 undefined
   */
  getUser(userId: number): User | undefined {
    return this.users.get(userId);
  }
}
