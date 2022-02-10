# vue3-ts-cms

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## commit 提交规范

校验 commit 使用的是 [husky](https://www.npmjs.com/package/husky) 以及 
[commitizen](https://www.npmjs.com/package/commitizen)
[commitlint](https://www.npmjs.com/package/commitlint)

|   type   | 说明                                              | 是否出现在 changelog 中 |
| :------: | :------------------------------------------------ | :---------------------: |
|   feat   | 新功能(feature)                                   |           会            |
|   fix    | 修复 bug                                          |           会            |
|   docs   | 文档                                              |          不会           |
|  style   | 格式（不影响代码运行的变动）                      |          不会           |
| refactor | 重构（即不是新增功能，也不是修改 bug 的代码变动） |          不会           |
|   test   | 增加测试                                          |          不会           |
|  chore   | 构建过程或辅助工具的变动                          |          不会           |

一个简单的 commit 栗子

```git
git commit -m 'feat: 新增人员搜索功能' 或者
npm run commit 选择提交
```

即最基本的 commit 信息应该包括 **type: 简短描述** ，了解更多点[这里](https://www.conventionalcommits.org/en/v1.0.0/)


## 代码格式化

代码格式化需要安装 `prettier-Code formatter` 插件，并且配置

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```