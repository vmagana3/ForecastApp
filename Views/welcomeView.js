import React,{useEffect} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from '../styles/welcomeViewStyles';



const WelcomeView = ({ navigation })=>{
    useEffect(()=>{        
        setTimeout(()=>{ navigation.navigate('SearchView')}, 3000)        
    },[])
    return(
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Icon size={80} name='cloud' type='font-awesome' color='#238AE6'/>
                <Text style={styles.mainTitle}>Weather App</Text>                
            </View>
        </View>
    )
}

export default WelcomeView;
