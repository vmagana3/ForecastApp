import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',
    },

    header:{
        width:'100%',
        height:'10%',        
        justifyContent:'center',
        alignItems:'center'
    },

    mainItemContainer:{
        width:'90%',        
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
        marginTop:20,    
        borderBottomWidth:1,
        borderBottomColor:'gray'    
    },

    leftItemContainer:{
        width:'50%',        
    },

    mainFore:{
        fontSize:18,
        fontWeight:'500'
    },

    description:{
        fontSize:15
    },

    mainTemp:{
        fontSize:25
    },

    rightItemContainer:{
        width:'50%',   
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'     
    }
})

export default styles;
