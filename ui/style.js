import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    //logo
    logoImg:{
        margin:5,
        marginBottom:10,
        borderRadius:20,
    },

    //index page 
    indexNavBtn:{
        backgroundColor:'#c64c38',
        padding:5,
        margin:5,
        marginTop:10,
        borderRadius:5,
    },
    indexNavBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    indexNavBtnAct:{
        backgroundColor:'#941a1d',
        padding:5,
        margin:5,
        marginTop:10,
        borderRadius:5,
    },


    //list page
    addStaffBtn:{
        backgroundColor:'#941a1d',
        borderRadius:5,
        padding:5,
        margin:5,
        marginBottom:5,
    },
    addStaffBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    listRow:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#D9D9D9',
        borderRadius:5,
        padding:5,
        margin:5
    },
    listRowBtnContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    listRowBtn:{
        backgroundColor:'#cb6d4f',
        padding:5,
        marginLeft:2.5,
        minWidth:55,
        borderRadius:5,
    },
    listRowBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    
    //Create new staff page
    label:{
        fontFamily:'Trebuchet',
        fontWeight:'bold',
        padding:2.5,
        marginTop:2.5,
    },
    txtInput:{
        backgroundColor:'#ffffff',
        borderColor:'#000',
        borderWidth:1,
        margin:2.5,
        padding:2.5
    },
    saveBtn:{
        backgroundColor:'#cb6d4f',
        padding:5,
        marginTop:10,
        marginLeft:65,
        marginRight:65,
        borderRadius:5,
    },
    saveBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },

    //staff profiles page
    txtDetail:{
        backgroundColor:'#ffffff',
        margin:2.5,
        padding:2.5,
        borderRadius:5,
        fontFamily:'Trebuchet',
    },

    //edit profiles page
    editStaffBtn:{
        backgroundColor:'#cb6d4f',
        borderRadius:5,
        padding:5,
        marginTop:10,
        marginLeft:65,
        marginRight:65,
        borderRadius:5,
    },
    editStaffBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },

    //delete staff page
    deleteStaffBtn:{
        backgroundColor:'red',
        padding:5,
        marginTop:10,
        marginLeft:65,
        marginRight:65,
        borderRadius:5,
    },
    deleteStaffBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center',
        
    },
    deleteStaffNtfTxt:{
        fontFamily:'Trebuchet',
        color:'red',
        textAlign:'center',
        fontWeight:'bold',
        borderColor:'red',
        borderWidth:1,
        padding:5,
        marginTop:20,
        borderRadius:5,
    }, 

}); 

export default theme; 