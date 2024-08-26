import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Checkout = ({ route }) => {
  const Navigation = useNavigation();
  const { cartItems } = route.params || []; 
  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
  const shippingCost = 50; 
  const tax = 10; 
  const total = subTotal + shippingCost + tax;
  const handleShopping = () => {
     Navigation.navigate('Order');
  };
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{ fontSize: 22, color: 'black', marginBottom: 20 }}>
          Checkout
        </Text>
        {cartItems.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 10 }}>
            <Image source={item.image} style={{ width: 100, height: 100, marginRight: 20 }} />
            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#555' }}>{item.weight}</Text>
              <Text style={{ fontSize: 16, color: 'green' }}>Rs. {item.price}</Text>
              <Text style={{ fontSize: 16, color: 'black' }}>Quantity: {item.count} X {item.price}</Text>
            </View>
          </View>
        ))}

        <View style={{ marginTop: 20, borderRadius: 40, borderWidth: 1, borderColor: '#05A845', padding: 20 }}>
          <Text style={{ fontSize: 16, lineHeight: 20.99, color: 'black' }}>Sub Total                    :             Rs. {subTotal}</Text>
          <Text style={{ fontSize: 16, lineHeight: 20.99, color: 'black', marginTop: 10 }}>Shipping Cost            :             Rs. {shippingCost}</Text>
          <Text style={{ fontSize: 16, lineHeight: 20.99, color: 'black', marginTop: 10 }}>Estimating Tax           :             Rs. {tax}</Text>
          <Text style={{ fontSize: 16, lineHeight: 20.99, color: 'black', marginTop: 10, fontWeight: 'bold' }}>Total                             :             Rs. {total}</Text>
        </View>

        <TouchableOpacity
          onPress={handleShopping}
          style={{marginTop: 30,width: '100%',height: 60,backgroundColor: '#05A845',borderRadius: 25,
            justifyContent: 'center',alignItems: 'center'}}>
          <Text style={{ fontSize: 22, color: 'white' }}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Checkout;
