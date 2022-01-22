import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CourseInfos = ({ route }) => {
    const id = route.params.courseId;
    console.log(id);
    return (
        <View>
            <Text>CoursInfos</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CourseInfos;
