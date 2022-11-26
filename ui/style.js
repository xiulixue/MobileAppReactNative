import {StyleSheet} from 'react-native'; 
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const theme = StyleSheet.create({
    label:{
        fontWeight:'bold'
    },
    userTile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'#000',
        borderRadius:2,
        padding:5,
        margin:5
    },
    userTileButtonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userTileButton:{
        backgroundColor:'grey',
        padding:5,
        marginLeft:2.5,
        minWidth:55,
        borderRadius:2,
    },
    userTileButtonText:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },

    addContactButton:{
        backgroundColor:'#941a1d',
        borderRadius:2,
        padding:5
    },
    addContactButtonText:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    indexNavButton:{
        backgroundColor:'#941a1d',
        padding:5,
        margin:5,
        marginTop:10
    },
    indexNavButtonText:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    deleteStaffBtn:{
        backgroundColor:'red',
        padding:5,
        marginTop:10
    },
    deleteStaffBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    deleteStaffLabel:{
        // backgroundColor:'red',
        padding:5,
        marginTop:10
    },
    deleteStaffLabelTxt:{
        fontFamily:'Trebuchet',
        color:'red',
        textAlign:'center',
        fontWeight:'bold',
        borderColor:'red',
        borderWidth:1,
        padding:5,
        marginTop:20
    },
    
    editStaffBtn:{
        backgroundColor:'grey',
        padding:5,
        marginTop:10
    },
    editStaffBtnTxt:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    saveButton:{
        backgroundColor:'grey',
        padding:5,
        marginTop:10
    },
    saveButtonText:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },
    cancelButton:{
        backgroundColor:'white',
        padding:5,
        marginTop:5
    },
    cancelButtonText:{
        fontFamily:'Trebuchet',
        color:'#fff',
        textAlign:'center'
    },  
    textInput:{
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        margin:2.5,
        padding:2.5
    },
    line: {
        flexDirection: "row",
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 0,
        borderColor: "#C5C5C5"
    },
    cell: {
        fontFamily:'Trebuchet',
        fontSize: 18,
        paddingLeft: 5
    },
    content: {
        flex: 3
    }
}); 

export default theme; 