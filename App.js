/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import _ from "lodash";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// TODO: read component list from the `./Components` dir
const components = ["Godot"];

type Props = {};
export default class App extends Component<Props> {
  navigateToComponent = component => {
    alert(`Just waiting for: ${component}`);
  };

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Scandy's React Native Component Demo!
          </Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <View style={styles.componentList}>
            <Text style={styles.instructions}>
              To get started, checkout a component:
            </Text>
            {_.map(components, component => (
              <TouchableOpacity
                key={`component_${component}`}
                onPress={() => {
                  this.navigateToComponent(component);
                }}
              >
                <Text style={styles.componentLink}>- {component}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 32,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  componentList: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 32,
  },
  componentLink: {
    fontSize: 16,
    textAlign: "left",
    color: "#6E98FF",
    paddingLeft: 32,
    marginBottom: 5
  }
});
