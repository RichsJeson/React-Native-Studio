/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TabBarIOS
}=React;

var Tab=React.createClass({

  getInitialState(){
     return{
        tab:'message'
     }
  },
  render() {
    return (
      <TabBarIOS style={style.flex}>
          <TabBarIOS.Item
            title="消息"
            style={style.item}
            onPress={this.select.bind(this, 'message')}
            selected={this.state.tab === 'message'}>
          >
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="联系人"
            style={style.item}
            onPress={this.select.bind(this, 'people')}
            selected={this.state.tab === 'people'}>
          >
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title="动态"
            style={style.item}
            onPress={this.select.bind(this, 'action')}
            selected={this.state.tab === 'action'}>
          >
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

//设置字体的样式
const style=StyleSheet.create({
     flex:{
       flex:1
     },
     item:{
      alignItems:'center',
      marginBottom:35
     }
});
module.exports = Tab;
