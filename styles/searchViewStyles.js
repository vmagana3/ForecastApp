import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    mainContainer:{
        width:'100%',
        height:'100%',                                             
    },

    searchBarContainer:{
        width:'100%',
        height:'10%',               
    },

    listContainer:{
        width:'100%',
        height:'80%',        
        marginTop:30 ,                         
    },
    listItem:{
        width:'90%',        
        marginTop:10,
        padding:5,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        alignSelf:'center'
    },   
    cityName:{
        fontSize:17,
        fontWeight:'600'
    },    
})

export default styles;
