import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import {NavigationActions} from "react-navigation";
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import BackPressComponent from "../common/BackPressComponent";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.backPress = new BackPressComponent({backPress: this.onBackPress()});
  }
  componentDidMount() {
      this.backPress.componentDidMount();
  }

  componentWillUnmount() {
      this.backPress.componentWillUnmount();
  }

  /**
   * 处理 Android 中的物理返回键
   * https://reactnavigation.org/docs/en/redux-integration.html#handling-the-hardware-back-button-in-android
   * @returns {boolean}
   */
  onBackPress = () => {
      const {dispatch, nav} = this.props;
      //if (nav.index === 0) {
      if (nav.routes[1].index === 0) {//如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
          return false;
      }
      dispatch(NavigationActions.back());
      return true;
  };
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>
    }
  }


const mapStateToProps = state => ({
  nav:state.nav,
  theme:state.theme
});
export default connect(mapStateToProps)(HomePage);