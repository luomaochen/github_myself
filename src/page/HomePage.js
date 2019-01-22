import React, {Component} from 'react';
import {
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import {Platform, StyleSheet, Text, View} from 'react-native';
import PopularPage from './BottomTab/PopularPage';
import FavoritePage from './BottomTab/FavoritePage';
import TrendingPage from './BottomTab/TrendingPage';
import MyPage from './BottomTab/MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil';

export default class HomePage extends Component {
  _tabNavigator() {
    return createAppContainer(createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: "最热",
          tabBarIcon:({tintColor,focused}) => (
            <MaterialIcons 
              name={'whatshot'}
              size={26}
              style={{color: tintColor}}
            />
          )
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: "趋势",
          tabBarIcon:({tintColor,focused}) => (
            <Ionicons
              name={'md-trending-up'}
              size={26}
              style={{color: tintColor}}
            />
          )
        }
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: "收藏",
          tabBarIcon:({tintColor,focused}) => (
            <MaterialIcons 
              name={'favorite'}
              size={26}
              style={{color: tintColor}}
            />
          )
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: "我的",
          tabBarIcon:({tintColor,focused}) => (
            <Entypo
              name={'user'}
              size={26}
              style={{color: tintColor}}
            />
          )
        }
      },
    }))
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;  // 将最外层的navigation保存在 NavigationUtil 里面  这样子在HomePage里面的页面也可以跳转到最外层的DetailPage了
    const Tab = this._tabNavigator();
    return <Tab />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
