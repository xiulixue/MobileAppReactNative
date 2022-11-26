import { Text, View,Pressable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import {deleteUserAsync} from '../services/user.service'; 
import theme from '../style';

export default function Delete(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //functions
    function submit(){
      deleteUserAsync(u.id)
        .then(r=>{
          if(r.status == 204){
            navigation.navigate("List",{op:'delete',data:u}); 
          }
        })
    }
    //JSX
    return (
      <View>
        <Text>STAFF DETAILS: </Text>
        <Text style={theme.label}>NAME:</Text>
        <Text>{u.firstName} {u.lastName}</Text>
        <Text style={theme.label}>AGE:</Text>
        <Text>{u.age}</Text>
        <Text style={theme.label}>EMAIL:</Text>
        <Text>{u.email}</Text>
        <Text style={theme.label}>PHONE:</Text>
        <Text style={theme.label}>DEPARTMENT:</Text>
        <Text style={theme.label}>ADDRESS:</Text>
        <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}`}</Text>
        <Text style={theme.deleteStaffLabelTxt}>Are You Sure To Delete This Staff ?</Text>
        <Pressable style={theme.deleteStaffBtn} onPress={submit}>
          <Text style={theme.deleteStaffBtnTxt}>DELETE</Text>
        </Pressable>    
      </View>
    ); 
  }