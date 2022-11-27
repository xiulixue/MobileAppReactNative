import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import theme from '../style';

export default function User(props){
    //navigation
    const navigation = useNavigation(); 
    let u = props.user; 
    return (
        <Pressable  onPress={()=>navigation.navigate("Profiles",u)}>
        <View style={theme.listRow}>
            <View>
                <Text style={{fontFamily:'Trebuchet',fontWeight:'bold',fontSize:16}}>{u.firstName} {u.lastName} | {u.department}</Text>
                <Text style={{fontFamily:'Trebuchet',fontSize:10}}>{u.phone} </Text>
            </View>
            <View style={theme.listRowBtnContainer}>
            </View> 
        </View>
        </Pressable> 
    ); 
}