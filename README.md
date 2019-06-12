# 学生管理系统

## 需求1.注册用户密码要加密（bcrypt）

- 1. 哈希 将原始密码做一个处理。处理成一段你也不知道是啥的字符串

- 2. 加盐  在哈希的基础上面再加一点随机字符串

### bcrypt 使用方式 
1. 安装 npm install --save bcrypt
2. 引入并使用
``` js
    const bcrypt = require('bcrypt');
    bcrypt.hash()
```