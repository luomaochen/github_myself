1.0  实现底部导航以及图标的实现  注意 navigation 3.0 要用 createAppContainer 包裹 返回的是组件

2.0  实现Popular界面的顶部导航实现  以及 顶部导航的页面 跳转到  最外层界面 DetaiPage 的方法 将navigation先保存起来
到NavigationUtil里面直接在 顶部导航的页面 使用跳转方法 即可

3.0  react-navigation高级应用&实现动态导航器 实现底部导航根据一个数组 进行改变(封装到了 DynamicTabNavigator.js 里面 )   
     实现Popular 页面顶部的Tab根据 一个数组 进行动态改变 其中  PopularPage页面   
     的 screen: props => <PopularTab {...props} tabLabel={item}/>,   // 这种方式进行参数传递，教程没有 