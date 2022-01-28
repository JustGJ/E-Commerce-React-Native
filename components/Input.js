import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Input = (props) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput {...props} style={styles.input} value={props.value} onChangeText={props.onKeyStroke} />
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
    },
    label: {
        marginVertical: 15,
        color: globalStyles.green,
        fontWeight: 'bold',
    },
    input: {
        padding: 9,
        borderColor: globalStyles.green,
        borderWidth: 0.5,
        borderRadius: 6,
    },
});

export default Input;
