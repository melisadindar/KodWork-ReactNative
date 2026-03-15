import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './FavoritesCard.styles';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/favoritesSlice';

const FavoritesCard = ({item, onSelect}: any) => {
    const dispatch = useDispatch();
    const handleRemove = ({route}: any) => {
        dispatch(removeFavorite(item))
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.inner_container} onPress={onSelect}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.company}>{item.company_name}</Text>
                <Text style={styles.location}>{item.candidate_required_location}</Text>
                <Text style={styles.type}>{item.job_type}</Text>
                <TouchableOpacity style={styles.button} onPress={handleRemove}>
                    <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default FavoritesCard;