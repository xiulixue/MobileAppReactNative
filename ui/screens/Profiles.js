import { Text, View, Pressable} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import theme from '../style';
import Label from '../components/Label';

export default function Profiles(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //JSX
    return (
      <View>
        <Label value="STAFF ID:" />
        <Text style={theme.txtDetail}>{u.staffId} </Text>
        <Label value="NAME:" />
        <Text style={theme.txtDetail}>{u.firstName} {u.lastName}</Text>
        <Label value="AGE:" />
        <Text style={theme.txtDetail}>{u.age} </Text>
        <Label value="EMAIL:" />
        <Text style={theme.txtDetail}>{u.email} </Text>
        <Label value="PHONE:" />
        <Text style={theme.txtDetail}>{u.phone} </Text>
        <Label value="DEPARTMENT:" />
        <Text style={theme.txtDetail}>{u.department} </Text>
        <Label value="ADDRESS:" />
        <Text style={theme.txtDetail}>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}` }</Text>
        <Pressable  style={theme.editStaffBtn} onPress={()=>navigation.navigate("Edit",u)}>
          <Text  style={theme.editStaffBtnTxt}>Edit</Text>
        </Pressable>
        <Pressable  style={theme.deleteStaffBtn} onPress={()=>navigation.navigate("Delete",u)}>
          <Text  style={theme.deleteStaffBtnTxt}>Delete</Text>
        </Pressable>
      </View>
    ); 
  }