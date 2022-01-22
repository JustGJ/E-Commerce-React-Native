import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CourseItem = ({ image, title, price }) => {
    console.log(image);
    return (
        <View style={styles.courseContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.courseContainerDetails}>
                <Text style={styles.courseTitle}>{title}</Text>
                <Text style={styles.coursePrice}>{price.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        height: 300,
        margin: 25,
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        borderColor: globalStyles.lightGrey,
        borderWidth: 1,
    },
    imageContainer: {
        width: '100%',
        height: '60%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    courseContainerDetails: {
        alignItems: 'center',
        height: '20%',
        padding: 10,
    },
    courseTitle: {
        fontSize: 18,
        marginVertical: 4,
        color: globalStyles.green,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    coursePrice: {
        color: globalStyles.darkGrey,
        fontSize: 16,
    },
});

export default CourseItem;
