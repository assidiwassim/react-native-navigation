import React,{Component} from 'react';
import { Text, View,SafeAreaView,Button } from 'react-native';
import {CustomHeader} from '../index'


export class NotificationsScreen extends Component {
    render(){
        return (
          <SafeAreaView style={{ flex: 1 }}>
          <CustomHeader title="Notification"  navigation={this.props.navigation}/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Notifications Screen</Text>
              <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
          </View>
        </SafeAreaView>
          );
    }
}