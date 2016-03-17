/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-14 22:23:30
 * @version $Id$
 * @des     WellInfoView控件
 */

'use strict';
import Swiper from 'react-native-swiper2'

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

//假定一个数据
var wellInfo = {
  id: 1022,
  wellstatistics: {
    mouthdeathtime: 'http://115.28.152.126:8080/Cuckoo/wellstatistics/mouthdeathtime.jpg',
    mouthdeathtimes: 'http://115.28.152.126:8080/Cuckoo/wellstatistics/mouthdeathtimes.jpg',
  },
  baseInfo: {
    well_profile: 'http://115.28.152.126:8080/Cuckoo/wellprofile/8.jpg',
    well_name:'Q-13',
    well_catefory: '螺杆泵产油井',
    well_location: 'A油田B区块C井组',
  },
  recentMessage: {
    message_datetime: '2016/08/21 凌晨 02:44:26',
    message_text: '结蜡',
    recognize_result: '判断结果正确/判断结果有误',
    handle_result: '已经修井/井无症状',
  },
}

export default class WellInfoView extends Component {
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
        dataSource: wellInfo,
        loaded: true,
      }
    );
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    var profile_uri = {uri: this.state.dataSource.baseInfo.well_profile};
    var mouthdeathtime_uri = {uri: this.state.dataSource.wellstatistics.mouthdeathtime};
    var mouthdeathtimes_uri = {uri: this.state.dataSource.wellstatistics.mouthdeathtimes};

    return (
      <View style={wellInfoViewStyles.container}>
        <View style={wellInfoViewStyles.baseInfo}>
          <Image
            style={wellInfoViewStyles.profile}
            source={profile_uri}
          />
          <View style={wellInfoViewStyles.text}>
            <View style={wellInfoViewStyles.maininfo}>
              <Text style={wellInfoViewStyles.wellname}>
                井名：{this.state.dataSource.baseInfo.well_name}
              </Text>
              <Text style={wellInfoViewStyles.wellcatefory}>
                井型：{this.state.dataSource.baseInfo.well_catefory}
              </Text>
              <Text style={wellInfoViewStyles.welllocation}>
                位置：{this.state.dataSource.baseInfo.well_location}
              </Text>
            </View>
          </View>
        </View>
        <View style={wellInfoViewStyles.wellstatistics}>
          <Swiper 
            style={wellInfoViewStyles.wrapper} 
            height={170} 
            width={350}
            horizontal={false} 
            showsButtons={true}
            showsPagination={true}
            autoplay={true}
            dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            activeDot={<View style={{backgroundColor: 'rgb(66,139,202)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
            paginationStyle={{bottom: -2, left: null, right: 40,}}
          >
            <View style={wellInfoViewStyles.slide}>
              <Image
                style={wellInfoViewStyles.slideimage}
                source={mouthdeathtime_uri}
                resizeMode='stretch'
              />
            </View>
            <View style={wellInfoViewStyles.slide}>
              <Image
                style={wellInfoViewStyles.slideimage}
                source={mouthdeathtimes_uri}
                resizeMode='stretch'
              />
            </View>
            <View style={wellInfoViewStyles.slide}>
              <Text>备用</Text>
            </View>
          </Swiper>
        </View>
        <View style={wellInfoViewStyles.recentMessage}>
          <View style={wellInfoViewStyles.messageHeader}>
            <Text style={wellInfoViewStyles.messageHeaderText}>
              最新的井况信息：
            </Text>
          </View>
          <View style={wellInfoViewStyles.messageContainer}>
            <View style={wellInfoViewStyles.messageTimeContainer}>
              <Text style={wellInfoViewStyles.messageTimeTitle}>
                &nbsp;时间:&nbsp;
              </Text>
              <Text style={wellInfoViewStyles.messageTime}>
                {this.state.dataSource.recentMessage.message_datetime}
              </Text>
            </View>
            <View style={wellInfoViewStyles.messageTextContainer}>
              <Text style={wellInfoViewStyles.messageTextTitle}>
                &nbsp;智能识别:&nbsp;
              </Text>
              <Text style={wellInfoViewStyles.messageText}>
                该井被判断为{this.state.dataSource.recentMessage.message_text}。
              </Text>
            </View>
          </View>
          <View style={wellInfoViewStyles.recognizeResultContainer}>
            <Text style={wellInfoViewStyles.recognizeResultTitle}>
              &nbsp;人工检查:&nbsp;
            </Text>
            <Text style={wellInfoViewStyles.recognizeResult}>
              {this.state.dataSource.recentMessage.recognize_result}
            </Text>
          </View>
          <View style={wellInfoViewStyles.handleResultContainer}>
            <Text style={wellInfoViewStyles.handleResultTitle}>
              &nbsp;处理结果:&nbsp;
            </Text>
            <Text style={wellInfoViewStyles.handleResult}>
              {this.state.dataSource.recentMessage.handle_result}
            </Text>
          </View>
        </View>
        <TouchableHighlight 
          style={wellInfoViewStyles.buttontouch} 
          underlayColor='#428bca'
          onPressIn = {
            ()=>{
              //需要修改
              // console.log('-------' + newInfo);
              // talk_well_name = newInfo.well_name;
              // talk_well_id = newInfo.id;
            }
          }
          onPress= {
            ()=>{}
            //this.changeNavigator.bind(this)
          }
        >
          <Text style={wellInfoViewStyles.buttontitle} >
            查看该井历史情况
          </Text>
        </TouchableHighlight>
      </View>
    );
  };  

  //没有数据时候的渲染
  renderLoadingView() {
    return (
      <View style={wellInfoViewStyles.loading}>
        <Text style={wellInfoViewStyles.loadingmessage}>
          数据加载中...
        </Text>
      </View>
    );
  }
}

const wellInfoViewStyles = StyleSheet.create({
	container: {
    flexDirection: 'column',
    flex: 1,
		backgroundColor: 'rgb(193,210,240)',
  },
	baseInfo: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'rgb(255,255,255)',
  },
  profile: {
    height: 80,
    width: 80,
  },
  text: {
    flexDirection: 'row',
    flex: 1,
    height: 80,
    paddingLeft: 10,
  },
  maininfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  wellname: {
    fontSize: 18,
    color:'rgb(0,0,0)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',    
  },
  wellcatefory: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',    
  },
  welllocation: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',    
  },
  wellstatistics: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'rgb(255,255,255)',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  slideimage: {
    height: 150,
    width: 300,
  },
  recentMessage: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'rgb(255,255,255)',    
  },
  messageHeader: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 280,
    paddingLeft: -20,
    paddingBottom: 8,
  },
  messageHeaderText: {
    flex: 1,
    fontFamily: 'Lucida Grande, Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif',
    fontSize: 18,    
  },
  messageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  messageTimeContainer: {
    flexDirection: 'row',
    flex: 1,
    width: 280,
  },
  messageTimeTitle: {
    fontSize: 15,
    color:'#eee',
    backgroundColor: '#428bca',
    marginRight: 10,
  },
  messageTime: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 15,
    color:'#428bca',
  },
  messageTextContainer: {
    flexDirection: 'row',
    flex: 1,
    width: 280,
    paddingTop: 5,
  },
  messageTextTitle: {
    fontSize: 15,
    color:'#eee',
    backgroundColor: '#428bca',
    marginRight: 10,
  },
  messageText: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 15,
    color:'#428bca',
  },
  recognizeResultContainer: {
    flexDirection: 'row',
    flex: 1,
    width: 280,
    paddingTop: 5,
  },
  recognizeResultTitle: {
    fontSize: 15,
    color:'#eee',
    backgroundColor: '#F4606C',
    marginRight: 10,
  },
  recognizeResult: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 15,
    color:'#F4606C',
  },
  handleResultContainer: {
    flexDirection: 'row',
    flex: 1,
    width: 280,
    paddingTop: 5,
  },
  handleResultTitle: {
    fontSize: 15,
    color:'#eee',
    backgroundColor: '#F4606C',
    marginRight: 10,
  },
  handleResult: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 15,
    color:'#F4606C',
  },
  buttontouch: {
    justifyContent: 'center',
    alignItems: 'center',    
    margin: 15,
    padding: 8,
    paddingLeft:30,
    paddingRight:30,
    borderWidth: 1,
    borderColor: 'rgba(66,139,202,1)',
    borderRadius: 8,
    backgroundColor: 'rgba(66,139,202,0.7)',
  },
  buttontitle: {
    fontFamily: 'Lucida Grande, Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif',
    fontSize: 15,
    color: 'rgb(255,255,255)',
  },
});
