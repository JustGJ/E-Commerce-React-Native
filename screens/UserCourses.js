import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserCourses = ({ route }) => {
    console.log(route.name);
    return (
        <View>
            <Text>Mes cours</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default UserCourses;
