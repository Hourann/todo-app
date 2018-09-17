# Yet another Todo app

前后端分离。
- 后端：Django+DjangoRestFramework+PostgreSQL
- 前端：React+Redux+Bootsrap

## 安装
依赖：`python2.7`, `pipenv`, `node.js`, `yarn`。
```bash
git clone https://github.com/Hourann/todo-app.git todo
cd todo
# 后端
pipenv install
pipenv shell
vim backend/todo_api/settings.py # 修改postgres配置
python backend/manage.py runserver
# 前端
cd frontend
yarn install
yarn start
```
## 效果演示：
![](showcase.gif)

## 不足
做此项目的时候对HTML、CSS、Javascript都不熟，React+Redux更是第一次使用，边看文档边做。在做到后期的时候发现不少对这两个框架的用法的误解。有待改进的地方和有缺陷的地方有：
- 没有把控件区分为`container`和`component`
- 混用`react-bootstrap`控件和class属性。写法不统一。
- 用`checkbox`来进入详情编辑在交互上不友好。
- `datetime-local`控件替换
- 在传`Props`和使用`redux`的`connect`进行状态传递的写法上有些混乱
