import React, {Component} from 'react';
import {connect} from 'react-redux'
import {onThemeChange} from '../../action/theme'
import {Button, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../../navigator/NavigationUtil";

class MyPage extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>MyPage</Text>
            <Button
                title="改变主题色"
                onPress={() => {
                    // let {dispatch} = NavigatorUtil.navigation;
                    // dispatch(onThemeChange('red'))
                    this.props.onThemeChange('#62a');
                }}
            />
            <Text onPress={() => {
                NavigationUtil.goPage({
                    navigation: this.props.navigation
                }, "DetailPage")
            }}>跳转到详情页</Text>
            <Button
                title={"Fetch 使用"}
                onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, "FetchDemoPage")
                }}/>
            <Button
                title={"AsyncStorage 使用"}
                onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, "AsyncStorageDemoPage")
                }}/>
            <Button
                title={"离线缓存框架"}
                onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, "DataStoreDemoPage")
                }}/>
    </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onThemeChange: (theme) => dispatch(onThemeChange(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
