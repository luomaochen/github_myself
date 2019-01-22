import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import NavigationUtil from "../../navigator/NavigationUtil";

export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
}

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
        tabs[`tab${index}`] = {
            screen: props => <PopularTab {...props} tabLabel={item}/>,   // 这种方式进行参数传递，教程没有
            navigationOptions: {
                title: item
            }
        }
    });
    return tabs;
  }

  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
      this._genTabs(), {
          tabBarOptions: {
              tabStyle: styles.tabStyle,
              upperCaseLabel: false,//是否使标签大写，默认为true
              scrollEnabled: true,//是否支持 选项卡滚动，默认false
              style: {
                  backgroundColor: '#678',//TabBar 的背景颜色
              },
              indicatorStyle: styles.indicatorStyle,//标签指示器的样式
              labelStyle: styles.labelStyle,//文字的样式
          }
      }
  ));
    return <View style={{flex: 1}}>
        <TabNavigator/>
    </View>
    // const Tabnavigator =  createAppContainer(createMaterialTopTabNavigator({
    //         PopularTab1: {
    //             screen: PopularTab,
    //             navigationOptions: {
    //                 title: 'Tab1'
    //             }
    //         },
    //         PopularTab2: {
    //             screen: PopularTab,
    //             navigationOptions: {
    //                 title: 'Tab2'
    //             }
    //         },
    // }))
    // return <Tabnavigator />
  }
}

class PopularTab extends Component {   // 用于Tab下面的界面显示 相当于路由界面
    render() {
      const { tabLabel} = this.props;  
      return (
        <View style={styles.container}>
          <Text>{tabLabel}</Text>
          <Text onPress={() => {
              NavigationUtil.goPage({navigation: this.props.navigation},'DetailPage')
          }}>跳转到详情页</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  tabStyle: {
      minWidth: 50
  },
  indicatorStyle: {
      height: 2,
      backgroundColor: 'white'
  },
  labelStyle: {
      fontSize: 13,
      marginTop: 6,
      marginBottom: 6
  }
});
