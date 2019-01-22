import React, {Component} from 'react';
import {
    createBottomTabNavigator,createAppContainer
} from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';

import PopularPage from '../page/BottomTab/PopularPage';
import TrendingPage from '../page/BottomTab/TrendingPage';
import FavoritePage from '../page/BottomTab/FavoritePage';
import MyPage from '../page/BottomTab/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from "../navigator/NavigationUtil";
import {BottomTabBar} from 'react-navigation-tabs';

const TABS = {//在这里配置页面的路由
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    TrendingPage:
        {
            screen: TrendingPage,
            navigationOptions: {
                tabBarLabel: "趋势",
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'md-trending-up'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        }
    ,
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    }
    ,
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    }
};
export default class DynamicTabNavigator extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    _tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};//根据需要定制显示的tab
        PopularPage.navigationOptions.tabBarLabel = '最热';//动态配置Tab属性
        return createAppContainer(createBottomTabNavigator(tabs, {
                tabBarComponent: TabBarComponent   // 为了实现动态改变 Tab 颜色的需求 
            }
        ))
    }

    render() {
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        }
    }

    render() {
        const {routes, index} = this.props.navigation.state;
        /*
        this.props.navigation.state.routes:
        routes: Array(4)
        0: {key: "PopularPage", routeName: "PopularPage", params: undefined}
        1: {key: "TrendingPage", routeName: "TrendingPage", params: undefined}
        2: {key: "FavoritePage", routeName: "FavoritePage", params: undefined}
        3: {key: "MyPage", routeName: "MyPage", params: undefined}

        index则是下方 Tab切换时 自动对应到 如点击 Trending index变为 1  默认加载最热 index为0
        */

        console.log(this.props.navigation.state)
        if (routes[index].params) {
            const {theme} = routes[index].params;
            //以最新的更新时间为主，防止被其他tab之前的修改覆盖掉
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }

        return <BottomTabBar
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});