'use strict';
var React = require('react-native');
// var Tab = require('./View/tbar.js');
var {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  View,
  Text
} = React;

var IOSTabBarDemo=React.createClass({

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
             //装入页面1
          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            name="work"
            title={'工作'}
            style={style.item}
            onPress={this.select.bind(this, 'people')}
            selected={this.state.tab === 'people'}
          >
          <View>
            //装入页面2
          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={'服务'}
            name="service"
            style={style.item}
            onPress={this.select.bind(this, 'serveice')}
            selected={this.state.tab === 'serveice'}
          >
          <View>
          //装入页面3
          </View>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title={'我'}
            name="my"
            style={style.item}
            onPress={this.select.bind(this, 'my')}
            selected={this.state.tab === 'my'}
          >
          <View>
          //装入页面4
          </View>
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

AppRegistry.registerComponent('IOSTabBarDemo', () => IOSTabBarDemo);
