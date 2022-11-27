import { Text, View,Pressable } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import {deleteUserAsync} from '../services/user.service'; 
import theme from '../style';
import Label from "../components/Label";

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
        <Text style={theme.deleteStaffNtfTxt}>Staff Profiles As Below:</Text>
        <Label value="STAFF ID:" />
        <Text style={theme.txtDetail}>{u.staffId} </Text>
        <Label value="NAME:" />
        <Text style={theme.txtDetail}>{u.firstName} {u.lastName}</Text>
        <Label value="EMAIL:" />
        <Text style={theme.txtDetail}>{u.email} </Text>
        <Label value="PHONE:" />
        <Text style={theme.txtDetail}>{u.phone} </Text>
        <Label value="DEPARTMENT:" />
        <Text style={theme.txtDetail}>{u.department} </Text>
        <Label value="ADDRESS:" />
        <Text style={theme.txtDetail}>{`${u.address.street}, ${u.address.suburb}, ${u.address.state},${u.address.country}` }</Text>
        <Text style={theme.deleteStaffNtfTxt}>Are You Sure To Delete This Staff ?</Text>
        <Pressable style={theme.deleteStaffBtn} onPress={submit}>
          <Text style={theme.deleteStaffBtnTxt}>DELETE</Text>
        </Pressable>    
      </View>
    ); 
  }