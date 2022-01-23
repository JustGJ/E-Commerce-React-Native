import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

// Details
const CourseInfos = ({ navigation, route }) => {
    // const courseId = route.params.courseId; // id du cours passé en param via FlatList

    // On return le cours dont l'id transmit est égal à celui qui est parcouru dans notre store
    // const selectedCourse = useSelector((state) =>
    //     state.courses.existingCourses.find((course) => course.id === courseId)
    // );

    // Header title prend le nom du cours
    // useEffect(() => {
    //     navigation.setOptions({ title: selectedCourse.title });
    // }, []);

    return (
        <View>
            <Text>CoursInfos</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CourseInfos;
