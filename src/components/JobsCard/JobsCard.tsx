import react from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({item, onSelect}: any) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.inner_container} onPress={onSelect}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.company}>{item.company_name}</Text>
                <Text style={styles.location}>{item.candidate_required_location}</Text>
                <Text style={styles.type}>{item.job_type}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobsCard;