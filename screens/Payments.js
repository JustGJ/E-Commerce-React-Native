import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import EmptyData from '../components/EmptyData';
import PaidItems from '../components/PaidItems';

const Payments = () => {
    const payments = useSelector((state) => state.payments.payments);

    // Si pas d'achat, return message
    if (!payments.length) {
        return <EmptyData text="Pas d'achats à afficher" />;
    }

    return (
        <FlatList
            data={payments}
            renderItem={({ item }) => (
                <PaidItems totalPrice={item.total} date={item.date} courseDetails={item} />
            )}
        />
    );
};

const styles = StyleSheet.create({});

export default Payments;
