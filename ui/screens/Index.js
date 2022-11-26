//import {useEffect,useState} from 'react'; 
import {Text, View,Pressable } from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native'; 
//import {fetchUsersAsync} from '../services/user.service'
// import User from '../components/User';
import theme from '../style';

export default function Index(){
    //navigation
    const navigation  = useNavigation(); 
    
    return (
      <View>
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.addContactButtonText}> DASHBOARD </Text>
        </Pressable>
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("List")}>
            <Text style={theme.indexNavButtonText}> STAFF DIRECTORY </Text>
        </Pressable>       
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavButtonText}> TASK </Text>
        </Pressable>       
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavButtonText}> ACTIVITY </Text>
        </Pressable> 
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavButtonText}> SETTING </Text>
        </Pressable>
        <Pressable  style={theme.indexNavButton}  onPress={()=>navigation.navigate("Index")}>
            <Text style={theme.indexNavButtonText}> LOG OUT </Text>
        </Pressable>
      </View>
    ); 
  }