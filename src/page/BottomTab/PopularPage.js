import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import NavigationUtil from "../../navigator/NavigationUtil";

export default class PopularPage extends Component {
  render() {
    const Tabnavigator =  createAppContainer(createMaterialTopTabNavigator({
            PopularTab1: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab1'
                }
            },
            PopularTab2: {
                screen: PopularTab,
                navigationOptions: {
                    title: 'Tab2'
                }
            },
    }))

    return <Tabnavigator />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
