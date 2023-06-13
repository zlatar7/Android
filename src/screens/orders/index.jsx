import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View, FlatList, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { OrderItem } from '../../components';
import { deleteOrder, getOrders } from '../../store/actions';

const Orders = () => {
  const image = {
    uri: 'https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-31879.jpg?w=740&t=st=1685212758~exp=1685213358~hmac=d3aa2c17782c138444f4f00f084368d9aa2a1eed77c624bc14eaac1f68c2297e',
  };
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);
  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <FlatList data={orders} keyExtractor={keyExtractor} renderItem={renderItem} />
      </ImageBackground>
    </View>
  );
};

export default Orders;
