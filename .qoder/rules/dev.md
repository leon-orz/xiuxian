---
trigger: manual
---

# 编码风格规范

## 通用规范

### 命名规范
- **变量名**: 使用小写字母和下划线，如 `user_name`, `max_count`
- **常量名**: 使用大写字母和下划线，如 `MAX_VALUE`, `DEFAULT_TIMEOUT`
- **函数名**: 使用小写字母和下划线，如 `get_user_info()`, `calculate_total()`
- **类名**: 使用大驼峰命名法，如 `UserManager`, `DataProcessor`
- **文件名**: 使用小写字母和下划线，如 `user_service.py`, `data_utils.py`

### 代码组织
- 每个函数应专注于单一职责
- 函数长度建议不超过 50 行
- 文件长度建议不超过 500 行
- 相关功能应组织在同一模块中

### 注释规范
- 使用中文注释
- 函数必须有文档字符串说明功能、参数和返回值
- 复杂逻辑必须添加行内注释
- 注释应简洁明了，避免冗余

### 代码格式
- 缩进使用 4 个空格
- 每行代码长度不超过 120 字符
- 运算符两侧添加空格
- 逗号后添加空格
- 函数和类之间空两行

## Python 特定规范

### 导入规范
# 标准库导入
import os
import sys

# 第三方库导入
import numpy as np
import pandas as pd

# 本地模块导入
from .utils import helper
from .models import User

### 异常处理
- 捕获具体的异常类型，避免使用裸 except
- 异常信息应该清晰明确
- 必要时记录异常日志

### 类型提示
- 函数参数和返回值应添加类型提示
- 使用 typing 模块提供的类型

## 示例代码

from typing import List, Dict, Optional

def calculate_user_score(user_id: int, activities: List[Dict]) -> Optional[float]:
    """
    计算用户积分
    
    Args:
        user_id: 用户ID
        activities: 用户活动列表
        
    Returns:
        用户总积分，如果计算失败返回 None
    """
    if not activities:
        return None
        
    total_score = 0.0
    for activity in activities:
        score = activity.get('score', 0)
        total_score += score
        
    return total_score
