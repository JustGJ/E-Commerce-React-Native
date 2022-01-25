import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import globalStyles from '../styles/globalStyles';

const CoursesInCart = ({ title, price, onDelete }) => {
    return (
        <View style={styles.coursesContainer}>
            <Text numberOfLines={1} style={styles.courseTitle}>
                {title}
            </Text>
            <Text style={styles.coursePrice}>{price} €</Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color={globalStyles.green} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    coursesContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 9,
    },
    courseTitle: {
        width: '60%',
    },
    coursePrice: {
        textAlign: 'right',
        paddingRight: 9,
        width: '30%',
    },
});

export default CoursesInCart;
