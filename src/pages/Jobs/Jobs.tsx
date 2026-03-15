import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getJobs} from '../../services/jobService';

import JobsCard from '../../components/JobsCard';

const Jobs = ({navigation}: any) => {

    const[jobs, setJobs] = React.useState([]);

    useEffect(() => {
        getJobs().then((data: any) => {
            console.log('Jobs data:', data);
            setJobs(data)
        })
    }, [])

    const handleJobs = (item: any) => {
        navigation.navigate('Job Detail', {job: item,});
    }

    const renderJobs = ({item}: any) => (
        <JobsCard item={item} onSelect ={() => handleJobs(item)} />
    )

    return(
       <View>
            <FlatList
                data={jobs}
                renderItem={renderJobs}
            />
       </View>
    )
}

export default Jobs;