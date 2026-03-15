import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Detail.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Enytpo from 'react-native-vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../store/favoritesSlice';

const DetailCard = ({route} : any) => {
    const cleanText = route.params.job.description.replace(/<[^>]+>/g, '');
    const dispatch = useDispatch();
    const favoriteJobs = useSelector((state: RootState) => state.favorites.jobs)
    const handleFavorite = () => {
        const alreadyFavorited = favoriteJobs.some(job => job.id === route.params.job.id);
        if(!alreadyFavorited){
            dispatch(addFavorite(route.params.job));
        }
        
    };

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} edges={['bottom']}>
            <ScrollView style={styles.scroll_container}>
                <View style = {styles.inner_container}>
                    <Text style={styles.title}> {route.params.job.title}</Text>
                    <Text style={styles.text}>
                    <Text style={styles.label}>Locations: </Text>
                    <Text style={styles.location}>{route.params.job.candidate_required_location}</Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.label}>Title: </Text>
                    <Text style={styles.location}>{route.params.job.title}</Text>
                </Text>
                    <Text style={styles.detail}>Job Detail</Text>
            </View>
            <View style={styles.detail_container}>
                <Text style={styles.description}>{cleanText}</Text>
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.apply_button} onPress={() => {}}> 
                    <Icon name="login" size={20} color="#fff" />
                    <Text style={styles.button_text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favorite_button} onPress={handleFavorite}>
                    <Enytpo name="heart" size={20} color="#fff" />
                    <Text style={styles.button_text}>Favorite</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default DetailCard;