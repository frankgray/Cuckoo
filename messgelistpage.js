/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-05 22:59:32
 * @version $Id$
 * @des     MessagelistPage控件
 * @note    
 */

'use strict';
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

//假定一个数组数据
var allTalks = [
  {
    id: 1023,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/0.jpg',
    well_name: 'A-13',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  {
    id: 1024,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/1.jpg',
    well_name: 'A-14',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  {
    id: 1025,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/2.jpg',
    well_name: 'Q-01',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '气体举升产油井',
  },
  {
    id: 1026,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/3.jpg',
    well_name: 'B-12',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  {
    id: 1027,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/5.jpg',
    well_name: 'B-15',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  {
    id: 1028,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/6.jpg',
    well_name: 'C-40',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  {
    id: 1029,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/7.jpg',
    well_name: 'D-13',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '产气井',
  },
  {
    id: 1030,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/8.jpg',
    well_name: 'C-22',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  {
    id: 1031,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/9.jpg',
    well_name: 'F-88',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',    
  },
  {
    id: 1032,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/0.jpg',
    well_name: 'A-13',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  {
    id: 1033,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/1.jpg',
    well_name: 'A-14',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  {
    id: 1034,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/2.jpg',
    well_name: 'Q-01',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  {
    id: 1035,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/3.jpg',
    well_name: 'B-12',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '产气井',
  },
  {
    id: 1036,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/5.jpg',
    well_name: 'B-15',
    well_state: '良好>表现良好，无异常现象',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
];

export default class MessgeListPage extends Component {

  constructor(props){
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        loaded: false,
        route: props.route.value,
        navigator: props.navigator.value,
    };
  };

  componentDidMount(){
    this.setState(
      {
        dataSource: this.state.dataSource.cloneWithRows(allTalks),
        loaded: true,
        route: this.state.route,
        navigator: this.state.navigator,
      }
    );
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        style={messgeListPageStyle.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderNewInfo.bind(this)}
      />
    );
  };

  //有数据后的渲染
  renderNewInfo(newInfo) {
    var uri = {uri: newInfo.well_profile};

    return (
      <TouchableHighlight 
        style={messgeListPageStyle.touch} 
        underlayColor='rgba(66,139,202,0.3)'
        onPress= {
          this.changeNavigator.bind(this, newInfo)
        }
      >
        <View style={messgeListPageStyle.list}>
          <Image
            style={messgeListPageStyle.profile}
            source={uri}
          />
          <View style={messgeListPageStyle.text}>
            <View style={messgeListPageStyle.maininfo}>
              <Text style={messgeListPageStyle.wellname}>
                井名：{newInfo.well_name}
              </Text>
              <Text style={messgeListPageStyle.wellstate}>
                {newInfo.well_state}
              </Text>
            </View>
            <View style={messgeListPageStyle.taginfo}>
              <Text style={messgeListPageStyle.welltime}>
                {newInfo.well_time}
              </Text>
              <Text style={messgeListPageStyle.wellcatefory}>
                {newInfo.well_catefory}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  //没有数据时候的渲染
  renderLoadingView() {
    return (
      <View style={messgeListPageStyle.loading}>
        <Text style={messgeListPageStyle.loadingmessage}>
          数据加载中...
        </Text>
      </View>
    );
  };

  //改变Navigator
  changeNavigator(newInfo){

    this.state.navigator.push(
      {title: 'Other', id:'message', params:{name: newInfo.well_name,id: newInfo.id}}
    );
  }
}

const messgeListPageStyle = StyleSheet.create({
  container: {

  },
  touch: {

  },
  list: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgba(66,139,202,0.2)',
    borderTopWidth: 0.5,
  },
  profile: {
    height: 55,
    width: 55,
  },
  text: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 8, 
    height: 55,   
  },
  maininfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  wellname: {
    fontSize: 17,
    color:'rgb(0,0,0)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  wellstate: {
    fontSize: 13,
  },
  taginfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingRight: 10,
  },
  welltime: {
    fontSize: 10,
  },
  wellcatefory: {
    fontSize: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  loadingmessage: {
    fontSize: 15,
  },
});