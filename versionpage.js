/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-13 11:51:59
 * @version $Id$
 * @des     VersionPage控件
 */

'use strict';
import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var versionData = {
	version: "Cuckoo 0.1",
  name: "优秀的井况监视系统",
  author: "@2016.中国石油大学（北京）",
  homepage: "www.seekwillfind.org",
};

export default class VersionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
        dataSource: null,
        loaded: false,
    };
  };

  componentDidMount(){
    this.setState(
      {
        dataSource: versionData,
        loaded: true,
      }
    );
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={versionViewStyles.container}>
        <Image style={versionViewStyles.logo}
          source={require('./icon/logo.png')}
        />
        <Text>
          {this.state.dataSource.version}
        </Text>
        <Text>
          {this.state.dataSource.name}
        </Text>
        <Text>
          {this.state.dataSource.author}
        </Text>
        <Text>
          {this.state.dataSource.homepage}
        </Text>
      </View>
    );
  };

  //没有数据时候的渲染
  renderLoadingView() {
    return (
      <View style={versionViewStyles.loading}>
        <Text style={versionViewStyles.loadingmessage}>
          数据加载中...
        </Text>
      </View>
    );
  };
}

const versionViewStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: -100,
    backgroundColor: 'rgb(255,255,255)',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});
