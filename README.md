# Bookkeeping
react学习实践，在线账本，开发到测试

### 展示型组件
+ 关心数据的展示方式
+ 不依赖app中的其他文件
+ 不关心数据是如何加载和变化的
+ 仅通过props接收数据和回调函数
+ 除非需要用到state，生命周期函数或性能优化。通常写成函数式组件

### 容器型组件
+ 关心数据的运作方式
+ 为展示型组件提供数据和操作数据的方法
+ 为展示型号组件提供回调函数
+ 通常是有状态的，并且作为数据源存在

### react理念
+ 把ui划分出组件层级--一个组件只做一件事
+ 创建应用的静态版本
+ ...

### 一个简单组件
+ 找到最小组件层级
+ 分析组件属性
```
<PriceList
    items={items}
    onDeleteItem ={ onDeleteItem }
    onEditItem = { onEditItem }
>
```
+ 暂定传入的数据结构
```
// mock数据
const items = [
  {
    "id":1,
    "title":"去云南旅游",
    "price":200,
    "date":"2018-01-10",
    "category":{
      "id":1,
      "name":"旅行",
      "type":"outcome"
    }
  }
]
```

### 选择图标库
1. 使用svg图标库，而不是font icon
2. `npm install @icon-park/react --save`

### 类型检查
1. typescript
2. react 自带 propTypes 完成属性校验
3. Props默认的值：defaultProps

### 组件拆分-以月份选择组件为例-分段开发
+ 创建一个按钮，显示传入的年和月份
+ 创建下拉菜单，点击按钮可以显示，再点击隐藏
+ 再下拉菜单中，显示两列，分别为年份和月份
+ 给这两列添加对应的选择高度