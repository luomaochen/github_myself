import React, {PropTypes} from "react";
import {BackHandler} from "react-native";

/**
 * Android物理回退键处理
 */
export default class BackPressComponent {
    constructor(props) {
        this._hardwareBackPress = this.onHardwareBackPress.bind(this);
        this.props = props;
    }

    componentDidMount() {  // 模仿生命周期起的函数名 并不是生命周期
        if (this.props.backPress) BackHandler.addEventListener('hardwareBackPress', this._hardwareBackPress);  // 将物理返回键绑定到方法上 方法通过prop传递
    }

    componentWillUnmount() { // 模仿生命周期起的函数名 并不是生命周期
        if (this.props.backPress) BackHandler.removeEventListener('hardwareBackPress', this._hardwareBackPress);
    }

    onHardwareBackPress(e) {
        return this.props.backPress(e);
    }
}