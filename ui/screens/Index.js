import {Text, View,Pressable } from 'react-native';
import logo from '../assets/logo.png';
import theme from '../style';

export default function Index({ navigation }){
    //navigation
    
    return (
      <View>
        <View style={theme.logoImg}>
          <img src={logo} alt="Logo"  />
        </View>
        <Pressable  style={theme.indexNavBtn}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavBtnTxt}> DASHBOARD </Text>
        </Pressable>
        <Pressable  style={theme.indexNavBtnAct}  onPress={()=>navigation.navigate("List")}>
            <Text style={theme.indexNavBtnTxt}> STAFF DIRECTORY </Text>
        </Pressable>       
        <Pressable  style={theme.indexNavBtn}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavBtnTxt}> TASK </Text>
        </Pressable>       
        <Pressable  style={theme.indexNavBtn}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavBtnTxt}> ACTIVITY </Text>
        </Pressable> 
        <Pressable  style={theme.indexNavBtn}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavBtnTxt}> SETTINGS </Text>
        </Pressable>
        <Pressable  style={theme.indexNavBtn}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavBtnTxt}> LOG OUT </Text>
        </Pressable>
      </View>
    ); 
  }