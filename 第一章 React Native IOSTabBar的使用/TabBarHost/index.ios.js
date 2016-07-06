/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';

var TabBarHost=React.createClass({
  getInitialState(){
     return{
        tab:'message'
     }
  },
  select:function(tabName){
       this.setState({
          tab:tabName
       },function(){

       });
  },
  render() {
    return (
      <TabBarIOS style={style.flex}>
          <TabBarIOS.Item
            name="info"
            title={'资讯'}
            style={style.item}
            icon={require("image!book")}
            onPress={this.select.bind(this, 'message')}
            selected={this.state.tab === 'message'}
          >
          <View>

          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            name="work"
            title={'工作'}
            icon={require("image!book")}
            style={style.item}
            onPress={this.select.bind(this, 'people')}
            selected={this.state.tab === 'people'}
          >
          <View>

          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={'服务'}
            icon={require("image!book")}
            name="service"
            style={style.item}
            onPress={this.select.bind(this, 'serveice')}
            selected={this.state.tab === 'serveice'}
          >
          <View>

          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={'我'}
            name="my"
            icon={require("image!book")}
            style={style.item}
            onPress={this.select.bind(this, 'my')}
            selected={this.state.tab === 'my'}
          >
          <View>

          </View>
          </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

const style = StyleSheet.create({
  cflex:{
    flex:1
  },
  item:{
   alignItems:'center',
   marginBottom:35
  }
});

AppRegistry.registerComponent('TabBarHost', () => TabBarHost);
