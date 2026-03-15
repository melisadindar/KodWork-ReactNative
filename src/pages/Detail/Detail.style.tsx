import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    scroll_container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner_container: {
        borderRadius: 0,
        height: 120,
        backgroundColor: '#f2f2f2',
    },               
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#37474f',
    },
    location: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',

    },
    text: {
        padding: 5,
    },
    label: {
        color: '#f05351',
        fontWeight: 'bold',
        fontSize: 14,
    },
    detail: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#394850',
        textAlign: 'center',
        marginTop: 10,
    },
    description: {
        fontSize: 13,
        fontFamily: 'Georgia, "Times New Roman", serif',
        color: 'black',
        marginTop: 10,
        marginHorizontal: 5,
    },
    detail_container: {
        borderRadius: 4,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#a3a3a3',
        marginHorizontal: 2,

    },
    button_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    apply_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#f05351',
        width: '45%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,
    },
    favorite_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#f05351',
        width: '45%',
        height: 40,
        borderRadius: 4,
        marginTop: 10,
    },
    button_text: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

}) 