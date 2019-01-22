import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 500);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>WelcomePage!</Text>
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
