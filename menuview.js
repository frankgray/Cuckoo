/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-13 22:02:28
 * @version $Id$
 * @des     菜单栏    
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

//造个人信息数据
var menuData = {
	profile: 'http://115.28.152.126:8080/Cuckoo/userprofile/12.png',
	name: '张芳芳',
	company: '中国石油集团有限公司',
	department: 'A油田第B采油厂C队',
	checked: false,
	unhandledwells: 10,
	allwells: 100,
};

export default class MenuView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        dataSource: null,
        loaded: false,
    };
  };

	componentDidMount(){
		if(menuData.checked){
			menuData.checkedhtml='今日已签到';
		}else{
			menuData.checkedhtml='请点击签到 (●′ω`●)';
		}

    this.setState(
      {
        dataSource: menuData,
        loaded: true,
      }
    )
  };

	render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    var uri = {uri: this.state.dataSource.profile};

		return(
			<View style={menuViewStyles.container}>
	      <Image 
	      	style={menuViewStyles.menuback}
	        source={require('./icon/menuback.jpg')}
	      >
					<View style={menuViewStyles.usercontainer}>
						<Image 
							style={menuViewStyles.userprofile} 
							source={uri}
						/>
						<View style={menuViewStyles.userinfo}>
							<Text style={menuViewStyles.name}>
								{this.state.dataSource.name}
							</Text>
							<Text style={menuViewStyles.company}>
								{this.state.dataSource.company}
							</Text>
							<Text style={menuViewStyles.department}>
								{this.state.dataSource.department}
							</Text>
						</View >
					</View>
	      </Image>
	      <View style={menuViewStyles.checked}>
		      <TouchableHighlight 
		        style={menuViewStyles.checktouch} 
		        underlayColor='#696969'
		        onPress={
		        	this.changeChecked.bind(this)
		       	}
	      	>
	    			<Text style={menuViewStyles.checkedmessage}>
	    				{this.state.dataSource.checkedhtml}
	    			</Text>
			    </TouchableHighlight>
		  	</View>
		  	<View style={menuViewStyles.summary}>
		  		<View style={menuViewStyles.textContainer}>
		  			<Text style={menuViewStyles.textstyle}>
		  				全部井
		  			</Text>
		  		</View>
		  		<View style={menuViewStyles.textContainer}>
		  			<Text style={menuViewStyles.textstyle}>
		  				未处理的井
		  			</Text>		  			
		  		</View>
		  		<View style={menuViewStyles.textContainer}>		  			
		  			<Text style={menuViewStyles.textstyle}>
		  				已经处理的井
		  			</Text>
		  		</View>
		  	</View>
		  	<View style={menuViewStyles.search}>
		  		<View style={menuViewStyles.textContainer}>		  			
		  			<Text style={menuViewStyles.textstyle}>
		  				最近表现良好的井
		  			</Text>
		  		</View>
		  		<View style={menuViewStyles.textContainer}>		  			
		  			<Text style={menuViewStyles.textstyle}>
		  				最近表现不好的井
		  			</Text>
		  		</View>
		  	</View>
		  	<View style={menuViewStyles.other}>
		  		<View style={menuViewStyles.textContainer}>
		  			<Text style={menuViewStyles.textstyle}>
		  				意见反馈
		  			</Text>		  			
		  		</View>
		  		<View style={menuViewStyles.textContainer}>
		  			<Text style={menuViewStyles.textstyle}>
		  				版本介绍
		  			</Text>		  			
		  		</View>		  		
		  	</View>
	    </View>
	  );
	};

	changeChecked(){
		this.state.dataSource.checkedhtml = '今日已签到';
		this.state.dataSource.checked = true;
		this.setState({
			dataSource: this.state.dataSource,
			loaded: true,
		});		
	};

	//没有数据时候的渲染
  renderLoadingView() {
    return (
      <View style={menuViewStyles.loading}>
        <Text style={menuViewStyles.loadingmessage}>
          数据加载中...
        </Text>
      </View>
    );
  }
}

const menuViewStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: 'rgb(255,255,255)',
	},
	menuback: {
		height: 150,
		width: 250,
		opacity: 1,
	},
	usercontainer: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		paddingLeft: 10,
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
	userprofile: {
		height: 80,
		width: 80,
	},
	userinfo:{
		flexDirection: 'column',
		flex: 1,
		paddingLeft: 10,
	},
	name: {
		fontSize: 20,
    color:'rgb(56,13,49)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
	},
	company: {
		fontSize: 12,
    color:'rgb(56,13,49)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
	},
	department: {
		fontSize: 12,
    color:'rgb(56,13,49)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
	},
	checked: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	checktouch: {
		margin: 15,
		padding: 8,
		paddingLeft:30,
		paddingRight:30,
		borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 8,
	},
	checkedmessage: {
		fontSize: 16,
    color:'#A9A9A9',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',		
	},
	summary: {
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: 10,
		borderBottomWidth: 0.5,
    borderColor: '#A9A9A9',
	},
	search: {
		flexDirection: 'column',
		justifyContent: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomWidth: 0.5,
    borderColor: '#A9A9A9',
	},
	other: {
		flexDirection: 'column',
		justifyContent: 'center',
		paddingTop: 10,
	},
	textContainer: {
		padding: 12,
	},
	textstyle: {
		fontSize: 16,
    color:'rgba(0,0,0,0.8)',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',		
	},
})