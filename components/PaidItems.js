import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../styles/globalStyles';
import CoursesOverview from './CoursesOverview';

const PaidItems = ({ totalPrice, date, courseDetails }) => {
    const [isShowing, setIsShowing] = useState(false);

    const handleShow = () => {
        setIsShowing(!isShowing);
    };
    return (
        <ScrollView style={styles.paidCoursesContainer}>
            {/* Total price */}
            <View style={styles.paidCourses}>
                <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} €</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
            {/* Icon + ou - */}
            <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
                <AntDesign
                    name={isShowing ? 'minuscircleo' : 'pluscircleo'}
                    size={24}
                    color={globalStyles.green}
                />
            </TouchableOpacity>

            {/* Show cours and price title */}
            {isShowing && (
                <View style={styles.detailPaidCourses}>
                    {courseDetails.courses.map((course) => (
                        <CoursesOverview key={course.id} title={course.title} price={course.price} />
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    paidCoursesContainer: {
        backgroundColor: globalStyles.white,
        borderRadius: 10,
        margin: 20,
        padding: 15,
    },
    paidCourses: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },
    totalPaid: {
        fontSize: 18,
    },
    date: {
        fontSize: 16,
    },
    iconBtn: {
        alignSelf: 'flex-end',
    },
    detailPaidCourses: {
        margin: 20,
        borderTopColor: globalStyles.lightGrey,
        borderTopWidth: 1,
    },
});

export default PaidItems;
