import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';
import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import NavigationUtil from "../../navigator/NavigationUtil";
import {connect} from 'react-redux';
import actions from '../../action/index'


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.tabNames = ['Java', 'Android', 'iOS', 'React', 'React Native', 'PHP'];
}

  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
        tabs[`tab${index}`] = {
            screen: props => <PopularTabPage {...props} tabLabel={item}/>,   // 这种方式进行参数传递，教程没有
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
  constructor(props) {
    super(props);
    const {tabLabel} = this.props;
    this.storeName = tabLabel;
  } 

  componentDidMount() {
    this.loadData();
  }

  loadData() {
      const {onLoadPopularData} = this.props;
      const url = this.genFetchUrl(this.storeName);
      onLoadPopularData(this.storeName, url)
  }

  genFetchUrl(key) {
      return URL + key + QUERY_STR;
  }

  renderItem(data) {
      const item = data.item;
      return <View style={{marginBottom: 10}}>
          <Text style={{backgroundColor: "#faa"}}>
              {JSON.stringify(item)}
          </Text>
      </View>
  }
  
  render() {
      const {popular} = this.props;
      let store = popular[this.storeName];//动态获取state
      if (!store) {
          store = {
              items: [],
              isLoading: false,
          }
      }  
      return (
        <View style={styles.container}>
            <FlatList
                data={store.items}
                renderItem={data => this.renderItem(data)}
                keyExtractor={item => "" + item.id}
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        titleColor={THEME_COLOR}
                        colors={[THEME_COLOR]}
                        refreshing={store.isLoading}
                        onRefresh={() => this.loadData()}
                        tintColor={THEME_COLOR}
                    />
                }
            />
        </View>
    );
    }
  }



const mapStateToProps = state => ({
    popular: state.popular
});
const mapDispatchToProps = dispatch => ({
    onLoadPopularData: (storeName, url) => dispatch(actions.onLoadPopularData(storeName, url))
});
const PopularTabPage = connect(mapStateToProps, mapDispatchToProps)(PopularTab)


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
