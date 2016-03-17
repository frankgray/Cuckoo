/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-05 00:25:42
 * @version $Id$
 * @des     包含InfoView、MessageView和MainView的Navigator(container)控件
 * @note    
 */

'use strict';
import React, {
  Component,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import MainView from './mainview.android.js';
import TalkView from './talkview.js';
import WellInfoView from './wellinfoview.js';

export default class Container extends React.Component {
  constructor(props){
    super(props);
  };

	render() {
    //通过route的id来确定容器内显示哪种view
    if(this.props.route.value.id === 'main'){
      return (
      	<View style={ContainerStyle.mainView}>
    		  <View style={ContainerStyle.mainViewHead}>
  	        <Text style={ContainerStyle.mainViewHeadAppName}>
  	          Cuckoo — 优秀的井况监视系统
  	        </Text>
          </View>
          <View style={ContainerStyle.mainViewPager}>
      			<MainView 
              route={{value: this.props.route.value}}
              navigator={{value: this.props.navigator.value}}
            />
      		</View>
        </View>
      );
    }else if(this.props.route.value.id === 'message'){
      return(
        <View style={ContainerStyle.talkView}>
          <View style={ContainerStyle.talkViewHead}>
            <TouchableHighlight
              style={ContainerStyle.talkViewBackTouch}
              underlayColor='rgba(0,0,0,0.2)'
              onPress={
                this.popNavigator.bind(this)
              }
            >
              <Image style={ContainerStyle.talkViewBackIco}
                source={require('./icon/back.png')}
              />
            </TouchableHighlight>
            <View  style={ContainerStyle.talkViewSeparation}>
            </View>
            <Text style={ContainerStyle.talkViewTalkerName}>
              {this.props.route.value.params.name}
            </Text>
            <View style={ContainerStyle.talkViewIdView}>
              <TouchableHighlight
                style={ContainerStyle.talkViewIdTouch}
                underlayColor='rgba(0,0,0,0.2)'
                onPress={
                  this.pushNavigator.bind(this)
                }
              >
                <Image style={ContainerStyle.talkViewIdIco}
                  source={require('./icon/id.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={ContainerStyle.talkViewPager}>
            <TalkView />
          </View>
        </View>
      );
    }else if(this.props.route.value.id === 'info'){
      return(
        <View style={ContainerStyle.talkView}>
          <View style={ContainerStyle.talkViewHead}>
            <TouchableHighlight
              style={ContainerStyle.talkViewBackTouch}
              underlayColor='rgba(0,0,0,0.2)'
              onPress={
                this.popNavigator.bind(this)
              }
            >
              <Image style={ContainerStyle.talkViewBackIco}
                source={require('./icon/back.png')}
              />
            </TouchableHighlight>
            <View  style={ContainerStyle.talkViewSeparation}>
            </View>
            <Text style={ContainerStyle.talkViewTalkerName}>
              {this.props.route.value.params.name}井：详细资料
            </Text>
          </View>
          <View style={ContainerStyle.talkViewPager}>
            <WellInfoView/>
          </View>
        </View>      
      );
    }
  };

  popNavigator(){
    this.props.navigator.value.pop();
  };

  pushNavigator(){
    var name = this.props.route.value.params.name;
    var id = this.props.route.value.params.id;

    this.props.navigator.value.push(
      {
        title: 'Other', 
        id:'info', 
        params:{
          name: name,
          id: id,
        },
      }
    );
  }
}

const ContainerStyle = StyleSheet.create({
  mainView: {
  	flexDirection: 'column',
  	flex: 1,
  },
  mainViewHead: {
  	justifyContent: 'center',
  	paddingLeft: 10,
  	height: 50,
  	backgroundColor: 'rgb(66,139,202)',
  },
  mainViewHeadAppName: {
  	fontSize: 20,
  	color: 'rgb(255,255,255)',
  	fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  mainViewPager: {
  	flex: 1,
  },
  talkView: {
    flexDirection: 'column',
    flex: 1,
  },
  talkViewHead: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'rgb(66,139,202)',
  },
  talkViewBackTouch: {
    height: 50,
    width: 43,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  talkViewBackIco: {
    height: 23,
    width: 23,
  },
  talkViewSeparation: {
    height: 25,
    marginRight: 15,
    borderColor: 'rgb(55,120,182)',
    borderLeftWidth: 0.8,
  },
  talkViewTalkerName: {
    fontSize: 20,
    color:'rgba(0,0,0,0.8)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  talkViewIdView: {
    flex: 1,
    alignItems:'flex-end',
  },
  talkViewIdTouch: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  talkViewIdIco: {
    height: 20,
    width: 30,
  },
  talkViewPager: {
    flex: 1,
  },
});