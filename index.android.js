/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-05 00:25:42
 * @version $Id$
 * @des     入口js文件,导航控件。
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
} from 'react-native';

import Body from './body.android.js';

class Cuckoo extends Component {
  //自定义的renderScene
  renderSceneAndroid(route, navigator){
  	return (
  		<Body
  			route={{value: route}}
  			navigator={{value: navigator}}
  		/>
  	);
  };

  //自定义的configureScene
  configureScenceAndroid (){
    return Navigator.SceneConfigs.FloatFromLeft;
  };

  render() {
    var renderScene = this.renderSceneAndroid;
    var configureScene = this.configureScenceAndroid;

    return (
      <Navigator
        initialRoute={{title: 'MainView', id:'main', params:{}}}
        renderScene={renderScene}
        configureScene={configureScene}
      />
    );
  }
}

AppRegistry.registerComponent('Cuckoo', () => Cuckoo);