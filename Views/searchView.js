import React,{useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import constans from '../resources/constans';

import styles from '../styles/searchViewStyles';



const SearchView = ({ navigation })=>{

    const [cityInfo, setCityInfo] = useState([]);

    function getCity(cityName){        
        fetch(constans.placesBaseURL + cityName)
        .then((response)=> response.json())
        .then((data)=> setCityInfo(data.slice(0,10)))        
    }

    const renderItem = ({ item }) => ( 
        <TouchableOpacity style={styles.listItem} onPress={()=>{navigation.navigate('DetailsView',{
            name:item.city_name,
            display:item.display,
            lat:item.lat,
            long:item.long
        })}}>
            <Text style={styles.cityName}>{item.city_name}</Text>
            <Text>{item.display}</Text>
        </TouchableOpacity>       
      );


    return(
        <View style={styles.mainContainer}>               

            <View style={styles.searchBarContainer}>
                <SearchBar 
                    platform='android' 
                    placeholder='City Name' 
                    onChangeText={(text)=>{getCity(text)}}
                />
            </View>               
            
            <View style={styles.listContainer}>
                <FlatList                    
                    data={cityInfo}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>                                    

        </View>
    )
}

export default SearchView;
