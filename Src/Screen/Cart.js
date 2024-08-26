import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const { selectedItems } = route.params || { selectedItems: [] };
  const [cartItems, setCartItems] = useState(selectedItems.map(item => ({ ...item, count: item.count || 1 })));

    console.log("Selected Items:", selectedItems);
    console.log("Cart Items:", cartItems);
  
  const handleArrow = () => {
    navigation.navigate('Deals');
  };

  const handleQuantityChange = (index, change) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: Math.max(item.count + change, 1) } : item
      )
    );
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout', { cartItems });
  };
  const handlecont = () => {
    navigation.navigate('Deals');
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <TouchableOpacity onPress={handleArrow}>
          <Image
            source={require('../asset/image/arrow.png')}
            style={{ width: 19, height: 12, marginBottom: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, color: 'black', marginBottom: 20 }}>
          My Cart
        </Text>

        {cartItems.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 10 }}>
            <Image source={item.image} style={{ width: 100, height: 100, marginRight: 20 }} />
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#555' }}>{item.weight}</Text>
              <Text style={{ fontSize: 16, color: 'green' }}>Rs. {item.price}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <TouchableOpacity onPress={() => handleQuantityChange(index, -1)}>
                  <Image source={require('../asset/image/minus.png')} style={{ width:22, height: 20 }} />
                </TouchableOpacity>
                <Text style={{ color: 'black', marginHorizontal: 10 }}>{item.count}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(index, 1)}>
                  <Image source={require('../asset/image/plus.png')} style={{ width: 22, height: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <TouchableOpacity onPress={handlecont} style={{ width: '100%', height: 62, borderRadius: 25, borderWidth: 2,
             borderColor: 'green', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ fontSize: 22, color: '#05A845' }}>Continue Shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCheckout} style={{ backgroundColor: '#05A845', width: '100%', height: 62, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 22, color: 'white' }}>CheckOut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Cart;
