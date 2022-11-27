import {useEffect,useState} from 'react'; 
import {Text, View,Pressable } from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native'; 
import {fetchUsersAsync} from '../services/user.service'
import User from '../components/User';
import theme from '../style';

export default function List(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    //state
    const [users,setUsers] = useState([]); 
    //use effect
    useEffect(()=>{     
        switch(route.params?.op){
          case undefined: //first time loading this view
            fetchUsersAsync().then(json=>setUsers(json)); 
            break;
          case 'create':
            setUsers([...users,route.params.data]); 
            break; 
          case 'edit':
            setUsers(users.map(u=> u.id === route.params.data.id ? route.params.data : u)); 
            break; 
          case 'delete':
              setUsers(users.filter(u=>u.id != route.params.data.id))
            break;
          default:
            throw new Error('Unknown Operation')
        }
    },[route.params])
  
    return (
      <View>
        <Pressable  style={theme.addStaffBtn}  onPress={()=>navigation.navigate("Create")}>
            <Text style={theme.addStaffBtnTxt}>+ ADD STAFF</Text>
        </Pressable>
        {users.map(u=><User key={u.id} user={u}/>)}   
      </View>
    ); 
  }