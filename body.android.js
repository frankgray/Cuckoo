/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-05 00:25:42
 * @version $Id$
 * @des     包含nav和container的抽屉(Body)控件
 * @note    抽屉控件只支持安卓
 */

'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import Container from './container.js';
import MenuView from './menuview.js';

export default class Body extends Component {
  constructor(props){
    super(props);
  }

  //自定义的menu
  navigationView () {
    return (
      <MenuView />
    );
  }

  render() {
    
    return (
      <DrawerLayoutAndroid
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView= {this.navigationView}>

        <Container 
          route={{value: this.props.route.value}}
          navigator={{value: this.props.navigator.value}}
        />
      </DrawerLayoutAndroid>
    );
  }
}
