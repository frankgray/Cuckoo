/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-11 23:23:29
 * @version $Id$
 * @des     WelllistPage控件
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
var allWells = {
  'A13': {
    id: 1023,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/0.jpg',
    well_name: 'A-13',
    well_state: '异常，已处理',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  'A14': {
    id: 1024,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/1.jpg',
    well_name: 'A-14',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  'Q01': {
    id: 1025,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/2.jpg',
    well_name: 'Q-01',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '气体举升产油井',
  },
  'B12': {
    id: 1026,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/3.jpg',
    well_name: 'B-12',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  'B15': {
    id: 1027,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/5.jpg',
    well_name: 'B-15',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  'C40': {
    id: 1028,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/6.jpg',
    well_name: 'C-40',
    well_state: '异常，已处理',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  'D13': {
    id: 1029,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/7.jpg',
    well_name: 'D-13',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '产气井',
  },
  'C22': {
    id: 1030,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/8.jpg',
    well_name: 'C-22',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  'F88': {
    id: 1031,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/9.jpg',
    well_name: 'F-88',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',    
  },
  'A18': {
    id: 1032,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/0.jpg',
    well_name: 'A-18',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  'A19': {
    id: 1033,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/1.jpg',
    well_name: 'A-19',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '有杆泵产油井',
  },
  'Q02': {
    id: 1034,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/2.jpg',
    well_name: 'Q-01',
    well_state: '异常，已处理',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
  'B13': {
    id: 1035,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/3.jpg',
    well_name: 'B-13',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '产气井',
  },
  'B14': {
    id: 1036,
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/5.jpg',
    well_name: 'B-14',
    well_state: '无异常',
    well_time: '2016/03/02 01:20',
    well_catefory: '螺杆泵产油井',
  },
};

//造数据
var sectionIDs = [];
var rowIDs = [];

sectionIDs.push('A','B','C','D','F','Q');

rowIDs[0]=[];
rowIDs[1]=[];
rowIDs[2]=[];
rowIDs[3]=[];
rowIDs[4]=[];
rowIDs[5]=[];

rowIDs[0].push('A13','A14','A18','A19');
rowIDs[1].push('B12','B13','B14','B15');
rowIDs[2].push('C22','C40');
rowIDs[3].push('D13');
rowIDs[4].push('F88');
rowIDs[5].push('Q01','Q02');

export default class WellListPage extends Component {

  constructor(props){
    super(props);

    var getSectionData = (dataBlob, sectionID) => {
      return sectionID;
    };
    
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

    this.state = {
        dataSource: new ListView.DataSource({
                      getRowData: getRowData,
                      getSectionHeaderData: getSectionData,
                      rowHasChanged: (row1, row2) => row1 !== row2,
                      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
                    }),
        loaded: false,
        route: props.route.value,
        navigator: props.navigator.value,
    };
  };

  componentDidMount(){

    this.setState(
      {
        dataSource: this.state.dataSource.cloneWithRowsAndSections(allWells, sectionIDs, rowIDs),
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
        style={wellListPageStyle.container}
        renderSectionHeader={this.renderSectionHeader}
        dataSource={this.state.dataSource}
        renderRow={this.renderNewInfo.bind(this)}
      />
    );
  };

  //有数据后的渲染
  renderNewInfo(newInfo: Object, sectionID: string, rowID: string) {
    var uri = {uri: newInfo.well_profile};

    return (
      <TouchableHighlight 
        style={wellListPageStyle.touch} 
        underlayColor='rgba(66,139,202,0.3)'
        onPress= {
          this.changeNavigator.bind(this,newInfo)
        }
      >
        <View style={wellListPageStyle.list}>
          <Image
            style={wellListPageStyle.profile}
            source={uri}
          />
          <View style={wellListPageStyle.text}>
            <View style={wellListPageStyle.maininfo}>
              <Text style={wellListPageStyle.wellname}>
                {newInfo.well_name}&nbsp;&nbsp;|&nbsp;&nbsp;{newInfo.well_catefory}
              </Text>
            </View>
            <View style={wellListPageStyle.taginfo}>
              <Text style={wellListPageStyle.welltime}>
                {newInfo.well_time}
              </Text>
              <Text style={wellListPageStyle.wellstate}>
                {newInfo.well_state}
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
      <View style={wellListPageStyle.loading}>
        <Text style={wellListPageStyle.loadingmessage}>
          数据加载中...
        </Text>
      </View>
    );
  };

  //粘性标题
  renderSectionHeader (sectionData: string, sectionID: string) {
    return (
      <View style={wellListPageStyle.section}>
        <Text style={wellListPageStyle.sectiontext}>
          {sectionData}
        </Text>
      </View>
    );
  };

  //改变Navigator
  changeNavigator(newInfo){

    this.state.navigator.push(
      {title: 'Other', id:'info', params:{name: newInfo.well_name,id: newInfo.id}}
    );
  }
}

const wellListPageStyle = StyleSheet.create({
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
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgba(66,139,202,0.2)',
    borderTopWidth: 0.5,
  },
  profile: {
    height: 42,
    width: 42,
  },
  text: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 8, 
    height: 40,   
  },
  maininfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  wellname: {
    fontSize: 16,
    color:'rgb(0,0,0)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  },
  taginfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    paddingRight: 5,
  },
  welltime: {
    fontSize: 8,
  },
  wellstate: {
    fontSize: 8,
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
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    backgroundColor: 'rgba(55,120,182,0.5)',
  },
  sectiontext: {
    color: 'white',
    paddingHorizontal: 4,
  },
});