import React,{Component} from 'react';
import { Text, View,SafeAreaView,Image,TouchableOpacity,ScrollView } from 'react-native';
import {IMAGE} from './constants/Image'

export class CustomHeader extends Component {
    render(){
        return (
            <View style={{ flexDirection: 'row', height: 50,marginTop:25 }}>
               <View style={{ flex: 1,justifyContent: 'center' }}>
             {
               this.props.isHome ?
               <TouchableOpacity  onPress={()=>this.props.navigation.openDrawer()}>
               <Image style={{width:30,height:30,marginLeft:10}} 
                 source={IMAGE.ICON_MENU}
                 resizeMode="contain"
               />
             </TouchableOpacity>
             :
             <TouchableOpacity style={{flexDirection:'row',alignItems: 'center'}}
             onPress={()=>this.props.navigation.goBack()}
             >
               <Image style={{width:25,height:25,marginLeft:4}} 
                 source={IMAGE.ICON_BACK} 
                 resizeMode="contain"
               />
               <Text>Back</Text>
             </TouchableOpacity>
             }
        
               <View style={{flex:1.5,justifyContent: 'center',alignItems: 'center'}}>
                    <Text style={{textAlign:'center'}}>{this.props.title}</Text>
                  </View>
                  <View style={{flex:1}}></View>
              </View>
            </View>
          );
    }
}