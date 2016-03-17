/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-09 21:51:51
 * @version $Id$
 * @des     TalkView控件
 */

'use strict';
import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

//假定一个数组数据
var infoMessages = [
	{
    wellid: 1023,
    message_date: '13/3',
    message_day: '晚上',
    message_time: '08:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/chongbuman1.png',
    message_text: '充不满',
    handle_result: '未处理',
  },
	{
    wellid: 1023,
    message_date: '09/3',
    message_day: '凌晨',
    message_time: '02:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/jiela1.png',
    message_text: '结蜡',
    handle_time: '2016/08/21 下午',
    handle_worker: '王小二',
    recognize_result: '判断结果正确/判断结果有误,为**情况',
    handle_result: '已经修井/井无症状',
  },
  {
    wellid: 1023,
    message_date: '09/3',
    message_day: '上午',
    message_time: '10:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/loushi1.png',
    message_text: '漏失',
    handle_time: '2016/08/21 下午',
    handle_worker: '王小二',
    recognize_result: '判断结果正确/判断结果有误,为**情况',
    handle_result: '已经修井/井无症状',
  },
  {
    wellid: 1023,
    message_date: '09/3',
    message_day: '下午',
    message_time: '06:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/qitiyingxiang1.png',
    message_text: '气体影响',
    handle_time: '2016/08/21 下午',
    handle_worker: '王小二',
    recognize_result: '判断结果正确/判断结果有误,为**情况',
    handle_result: '已经修井/井无症状',
  },
  {
    wellid: 1023,
    message_date: '10/3',
    message_day: '晚上',
    message_time: '10:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/chouyouganduantuo1.png',
    message_text: '抽油杆断脱',
    handle_time: '2016/08/21 下午',
    handle_worker: '王小二',
    recognize_result: '判断结果正确/判断结果有误,为**情况',
    handle_result: '已经修井/井无症状',
  },
  {
    wellid: 1023,
    message_date: '10/3',
    message_day: '中午',
    message_time: '12:44:26',
    message_pic: 'http://115.28.152.126:8080/Cuckoo/wellstate/chongbuman1.png',
    message_text: '充不满',
    handle_time: '2016/08/21 下午',
    handle_worker: '王小二',
    recognize_result: '判断结果正确/判断结果有误,为**情况',
    handle_result: '已经修井/井无症状',
  },
];

export default class TalkView extends Component {
  constructor(props){
    super(props);
    this.state = {
        dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        loaded: false,
    };
  };

  componentDidMount(){
    this.setState(
      {
        dataSource: this.state.dataSource.cloneWithRows(infoMessages),
        loaded: true,
      }
    );
  };

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    
    return (
      <ListView
        style={talkViewStyles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderAllMessage}
      />
    );
  };

  //有数据后的渲染
  renderAllMessage(message) {
    var uri = {uri: message.message_pic};

    
    if(message.handle_time === undefined){
      //未识别
			return (
		    <TouchableOpacity 
		      style={talkViewStyles.touch} 
		      activeOpacity= {0.5}
		      onPress={()=>{}}
		    >
			    <View style={talkViewStyles.list}>
			    	<View style={talkViewStyles.datetime}>
				    	<Text style={talkViewStyles.date}>{message.message_date}</Text>
				      <Text style={talkViewStyles.day}>{message.message_day}</Text>			   
				      <Text style={talkViewStyles.time}>{message.message_time}</Text>
			      </View>
			      <View style={talkViewStyles.content}>
				      <Image 
                resizeMode='stretch' 
                style={talkViewStyles.image} 
                source={uri} 
              />
				      <View style={talkViewStyles.messageTextContainer}>
				      	<Text style={talkViewStyles.messageTextTitle}>
				      		&nbsp;智能识别:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.messageText}>
				      		该井被判断为{message.message_text}。
				      	</Text>
				      </View>		      
				      <View style={talkViewStyles.handleResultContainer}>
				      	<Text style={talkViewStyles.handleResultTitle}>
				      		&nbsp;处理结果:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.handleResult}>
				      		{message.handle_result}
				      	</Text>
				      </View>
			    	</View>
			    </View>
			  </TouchableOpacity>
	    );
    }else {
      //已经处理
	    return (
		    <TouchableOpacity 
		      style={talkViewStyles.touch} 
		      activeOpacity= {0.5}
		      onPress={()=>{}}
		    >
			    <View style={talkViewStyles.list}>
			    	<View style={talkViewStyles.datetime}>
				    	<Text style={talkViewStyles.date}>{message.message_date}</Text>
				      <Text style={talkViewStyles.day}>{message.message_day}</Text>			   
				      <Text style={talkViewStyles.time}>{message.message_time}</Text>
			      </View>
			      <View style={talkViewStyles.content}>
				      <Image resizeMode='stretch' style={talkViewStyles.image} source={uri} />
				      <View style={talkViewStyles.messageTextContainer}>
				      	<Text style={talkViewStyles.messageTextTitle}>
				      		&nbsp;智能识别:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.messageText}>
				      		该井被判断为{message.message_text}。
				      	</Text>
				      </View>
				      <View style={talkViewStyles.handleTimeContainer}>
				      	<Text style={talkViewStyles.handleTimeTitle}>
				      		&nbsp;处理时间:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.handleTime}>
				      		{message.handle_time}
				      	</Text>
				      </View>
				      <View style={talkViewStyles.handleWorkerContainer}>
				      	<Text style={talkViewStyles.handleWorkerTitle}>
				      		&nbsp;处理人员:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.handleWorker}>
				      		{message.handle_worker}
				      	</Text>
				      </View>
				      <View style={talkViewStyles.recognizeResultContainer}>
				      	<Text style={talkViewStyles.recognizeResultTitle}>
				      		&nbsp;识别判断:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.recognizeResult}>
				      		{message.recognize_result}
				      	</Text>
				      </View>			      
				      <View style={talkViewStyles.handleResultContainer}>
				      	<Text style={talkViewStyles.handleResultTitle}>
				      		&nbsp;处理结果:&nbsp;
				      	</Text>
				      	<Text style={talkViewStyles.handleResult}>
				      		{message.handle_result}
				      	</Text>
				      </View>
			    	</View>
			    </View>
			  </TouchableOpacity>
	    );
	  }
  };

  //没有数据时候的渲染
  renderLoadingView() {
    return (
      <View>
        <Text>
          Loading Messages...
        </Text>
      </View>
    );
  }  
}

const talkViewStyles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(255,255,255)',
  },
	touch: {
		marginTop: 5,
		marginBottom: 5,
		paddingRight: 15,
		paddingLeft: 15,
	},
  list: {
  	flexDirection: 'row',
  	flex: 1,
		paddingTop: 5,
		paddingBottom: 5,
    borderColor: 'rgba(66,139,202,0.2)',
    borderBottomWidth: 0.5,
  },
  datetime: {
  	flexDirection: 'column',
  	alignItems: 'flex-end',
  	paddingRight: 15,
  	paddingTop: 10,
  },
  date: {
  	fontSize: 20,
    color:'rgb(0,0,0)',
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif',
  },
  day: {
  	fontSize: 15,
  },
  time: {
  	fontSize: 15,
  },
  content: {
  	flexDirection: 'column',
  	flex: 1,
  	alignItems: 'center',
  	paddingBottom: 10,
  },
  image: {
  	height: 120,
  	width: 240,
  	resizeMode: 'stretch',
  },
  messageTextContainer: {
  	flexDirection: 'row',
  	flex: 1,
  	width: 240,
   	paddingTop: 5,
   	paddingBottom: 10,
   	borderColor: 'black',
   	borderBottomWidth: 0.5,
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
  handleTimeContainer: {
  	flexDirection: 'row',
  	flex: 1,
  	width: 240,
   	paddingTop: 10,
  },
  handleTimeTitle: {
  	fontSize: 15,
    color:'#eee',
    backgroundColor: '#D1BA74',
    marginRight: 10,
  },
  handleTime: {
  	paddingLeft: 10,
  	flex: 1,
  	fontSize: 15,
  	color:'#D1BA74',
  },
  handleWorkerContainer: {
  	flexDirection: 'row',
  	flex: 1,
  	width: 240,
   	paddingTop: 5,
  },
  handleWorkerTitle: {
  	fontSize: 15,
    color:'#eee',
    backgroundColor: '#D1BA74',
    marginRight: 10,
  },
  handleWorker: {
  	paddingLeft: 10,
  	flex: 1,
  	fontSize: 15,
  	color:'#D1BA74',
  },
  recognizeResultContainer: {
  	flexDirection: 'row',
  	flex: 1,
  	width: 240,
   	paddingTop: 5,
  },
  recognizeResultTitle: {
  	fontSize: 15,
    color:'#eee',
    backgroundColor: '#d9534f',
    marginRight: 10,
  },
  recognizeResult: {
  	paddingLeft: 10,
  	flex: 1,
  	fontSize: 15,
  	color:'#d9534f',
  },
	handleResultContainer: {
  	flexDirection: 'row',
  	flex: 1,
  	width: 240,
   	paddingTop: 5,
  },
  handleResultTitle: {
  	fontSize: 15,
    color:'#eee',
    backgroundColor: '#d9534f',
    marginRight: 10,
  },
  handleResult: {
  	paddingLeft: 10,
  	flex: 1,
  	fontSize: 15,
  	color:'#d9534f',
  },
});