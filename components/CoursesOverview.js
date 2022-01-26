import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CoursesOverview = ({ title, price }) => {
    return (
        <View style={styles.courseContainer}>
            <Text numberOfLines={1} style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>{price} €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 9,
    },
    title: {
        width: '70%',
    },
    price: {
        color: globalStyles.dimGray,
    },
});

export default CoursesOverview;
