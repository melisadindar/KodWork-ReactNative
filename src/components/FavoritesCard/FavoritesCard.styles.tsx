import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    inner_container: {
        backgroundColor: 'white',
        margin: 6,
        borderRadius: 5,
        borderColor: '#b0b0b0',
        borderWidth: 1,
        padding: 10,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 2,
        marginLeft: 5,
    },
    company: {
        color: 'black',
        fontSize: 16,
        padding: 2,
        marginLeft: 5,
    },
    location: {
        color: 'white',
        fontSize: 14,
        borderRadius: 5,
        backgroundColor: '#f05351',
        alignSelf: 'flex-start',
        padding: 2,
        marginLeft: 5,
    },
    type: {
        color: '#f05351',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right',
        marginRight: 10,
    },
    remove : {
        fontSize: 14,
        textAlign: 'center',
        marginRight: 10,
    },
    button : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#f05351',
        width: '100%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,   
    }
})
