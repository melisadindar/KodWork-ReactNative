import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import { RootState } from '../../store/index';
import JobsCard from '../../components/FavoritesCard'
import FavoritesCard from '../../components/FavoritesCard';
const Favorites = ({navigation} : any) => {
    const favoriteJobs = useSelector((state: RootState) => state.favorites.jobs);
    return(
        <View>
            <FlatList
                data = {favoriteJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem= {({item}) => (
                    <FavoritesCard item = {item} 
                    onSelect={() => navigation.navigate('Job Detail', {job: item})} />
                )}
            />
        </View>
    )
}

export default Favorites;