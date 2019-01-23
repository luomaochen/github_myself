2.0  实现底部导航以及图标的实现  注意 navigation 3.0 要用 createAppContainer 包裹 返回的是组件

3.0  实现Popular界面的顶部导航实现  以及 顶部导航的页面 跳转到  最外层界面 DetaiPage 的方法 将navigation先保存起来
到NavigationUtil里面直接在 顶部导航的页面 使用跳转方法 即可

4.0  react-navigation高级应用&实现动态导航器 实现底部导航根据一个数组 进行改变(封装到了 DynamicTabNavigator.js 里面 )   
     实现Popular 页面顶部的Tab根据 一个数组 进行动态改变 其中  PopularPage页面   
     的 screen: props => <PopularTab {...props} tabLabel={item}/>,   // 这种方式进行参数传递，教程没有 

5.0  基于Redux与react-navigation的 React Native项目框架搭建  集成了redux  并且实现了 TrendingPage界面 修改主题色的功能 

6.0  处理安卓物理返回键

7.1 React Native网络编程之Fetch精讲(Fetch demo实例)
7.2 React Native数据库编程之AsyncStorage精讲(AsyncStorage demo 实例)
7.3 React Native离线缓存框架设计  封装了 离线缓存的方法类  在expand/dao/DataStore.js 里面

8.1 基于Redux+FlatList实现列表页数据加载
8.2 基于Redux+FlatList实现列表页数据加载(实现Item)
8.3 FlatList实现列表页实现上拉加载更多 FlatList上拉加载两次的坑 的解决方法

9.1 实现自定义的 NavigationBar 引入 prop-types 进行类型检验   分别在PopularPage 和 Mypage 进行使用 MyPage还多了左侧后退 和 右侧搜索 按钮
9.2 趋势页面开发(DataStore扩展&action,reducer封装与使用) 趋势页面开发(列表实现  引入展示html的库 react-native-htmlview)