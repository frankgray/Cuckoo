/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-05 00:25:42
 * @version $Id$
 * @des     包含MessagelistPage,WellListPage,page3的mainview
 * @note    
 */

'use strict';
import React, {
	Text,
	Component,
  StyleSheet,
  View,
  ViewPagerAndroid,
} from 'react-native';

import MessgeListPage from './messgelistpage.js'
import WellListPage from './welllistpage.js'
import VersionPage from './versionpage.js'

export default class ViewPages extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <ViewPagerAndroid 
        style={viewPagesStyles.pageContainer}
        initialPage={0}>
        <View style={viewPagesStyles.firstPage}>
          <MessgeListPage
            route={{value: this.props.route.value}}
            navigator={{value: this.props.navigator.value}}
          />
        </View>
        <View style={viewPagesStyles.secondPage}>
          <WellListPage
            route={{value: this.props.route.value}}
            navigator={{value: this.props.navigator.value}}
          />
        </View>
        <View style={viewPagesStyles.thirdPage}>
          <VersionPage
            route={{value: this.props.route.value}}
            navigator={{value: this.props.navigator.value}}
          />
        </View>
      </ViewPagerAndroid>
    );
  }
}

const viewPagesStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  firstPage:{
    
  },
  secondPage:{
    
  },
  thirdPage:{
    
  },
});
