import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import globalStyles from '../styles/globalStyles';

// Affiche message si data vide
const EmptyData = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: globalStyles.green,
        fontSize: 19,
    },
});

export default EmptyData;
