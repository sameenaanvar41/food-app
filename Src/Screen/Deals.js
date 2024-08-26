import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Deals = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const items = [
    { id: '1', image: require('../asset/image/garlic.png'), name: 'Garlic', price: 25, weight: '250g' },
    { id: '2', image: require('../asset/image/organic.png'), name: 'Organic Spices', price: 25, weight: '250g' },
    { id: '3', image: require('../asset/image/almond.png'), name: 'Almonds', price: 25, weight: '250g' },
    { id: '4', image: require('../asset/image/fortune.png'), name: 'Fortune Oil', price: 25, weight: '250g' },
    { id: '5', image: require('../asset/image/mixedveg.png'), name: 'mixedvegitables', price: 25, weight: '250g' },
    { id: '6', image: require('../asset/image/pease.png'), name: 'Pease', price: 25, weight: '250g' }
  ];

  const handleItemPress = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex >= 0) {
      const updatedCartItems = cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...item, count: 1 }];
      setCartItems(updatedCartItems);
    }
  };

  const handleGoToCart = () => {
    navigation.navigate('Cart', { selectedItems: cartItems });
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Rs. {item.price}</Text>
        <Text style={styles.itemWeight}>{item.weight}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../asset/image/arrow.png')} style={styles.arrowIcon} />
        <Text style={styles.headerText}>Trending Deals</Text>
        <View style={styles.notifications}>
          <Image source={require('../asset/image/bell.png')} style={styles.bellIcon} />
          <Image source={require('../asset/image/yellow.png')} style={styles.yellowIcon} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search products"
          placeholderTextColor="#7D7B86"
          style={styles.searchInput}
        />
        <Image source={require('../asset/image/search.png')} style={styles.searchIcon} />
        <Image source={require('../asset/image/vec.png')} style={styles.vecIcon} />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <TouchableOpacity onPress={handleGoToCart} style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        header: {
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
        },
        arrowIcon: {
            width: 19,
            height: 10,
        },
        headerText: {
            fontSize: 22,
            color: 'black',
            textAlign: 'center',
            flex: 1,
        },
        notifications: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        bellIcon: {
            width: 20.52,
            height: 19.29,
        },
        yellowIcon: {
            width: 6.89,
            height: 6.61,
        },
        searchContainer: {
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        searchInput: {
            width: 295,
            height: 31,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'green',
            fontSize: 10,
            textAlign: 'center',
            marginRight: 10,
        },
        searchIcon: {
            width: 31,
            height: 31,
            left:-40
        },
        vecIcon: {
            width: 22,
            height: 22,
            left: -20
        },
        flatListContainer: {
            paddingHorizontal: 16,
            paddingBottom: 20,
        },
        itemContainer: {
            borderColor: 'white',
            backgroundColor: '#FAF9F6',
            borderWidth: 1,
            borderRadius: 16,
            height: 210.54,
            width: '48%',
            margin: '1%',
            padding: 12,
            alignItems: 'center',
        },
        itemImage: {
            width: 72,
            height: 115,
        },
        itemName: {
            color: 'black',
            fontSize: 14,
            marginTop: 8,
        },
        itemPrice: {
            color: 'green',
            fontSize: 14,
            marginTop: 4,
        },
        itemWeight: {
            color: 'green',
            fontSize: 14,
            marginTop: 4,
        },
        starIcon: {
            width: 35,
            height: 15,
            marginTop: 8,
        },
        quantityIcon: {
            width: 85,
            height: 15,
            marginTop: 8,
        },
        cartIcon: {
            width: 20,
            height: 25,
            marginTop: 8,
        },
        cartButton: {
            backgroundColor: 'green',
            padding: 15,
            alignItems: 'center',
            margin: 20,
            borderRadius: 10,
        },
        cartButtonText: {
            color: 'white',
            fontSize: 18,
        },
});

export default Deals;
