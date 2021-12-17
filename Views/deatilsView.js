import React,{useState,useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Icon} from 'react-native-elements';
import constans from '../resources/constans';

import styles from '../styles/detailsViewStyles';

const DetailsView = ({ route })=>{

    const {name, lat, long} = route.params;
    const [currentData,setCurrentData] = useState(null);


    useEffect(()=>{
        console.log("prueba con array")
        fetch(`${constans.weatherBaseURL}lat=${lat}&lon=${long}&exclude=${constans.excludeValues}&units=metric&appid=${constans.weatherAPIkey}`)
        .then((response)=>response.json())
        .then((data)=>{
            setCurrentData(data.daily)
        })
    },[])

    const renderItem = ({ item }) => ( 
        <View style={styles.mainItemContainer}>

            <View style={styles.leftItemContainer}>
                <Text style={styles.mainFore}>{item.weather[0].main}</Text>
                <Text style={styles.description}>{item.weather[0].description}</Text>
                <Text style={styles.mainTemp}>{Math.trunc(item.temp.day)}°
                    <Icon name='thermometer' size={18} type='feather' color='#517fa4'/>                 
                </Text>
            </View>            

            <View style={styles.rightItemContainer}>
                <View>
                    <Text>{Math.trunc(item.temp.min)}°C</Text>
                    <Text>Min.</Text>                    
                </View>

                <View>
                    <Text>{Math.trunc(item.temp.max)}°C</Text>
                    <Text>Max.</Text>                    
                </View>
            </View>  
                                  
        </View>              
      );

    return(
        <View style={styles.mainContainer}> 

            <View style={styles.header}>
                <Text style={styles.description}>Next 7 days in</Text> 
                <Text style={styles.mainFore}>{name}</Text>                                  
            </View>

            <View style={styles.list}>
                <FlatList                    
                    data={currentData}
                    renderItem={renderItem}                    
                />                
            </View> 
                             
        </View>
    )
}

export default DetailsView;