import { View, Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';

const Products = () => {
    const [Products, setProducts] = useState([]);

   const _renderItem = ({item,index}) => {
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 15,
              padding: 20,
              marginLeft: 25,
              marginRight: 25,
              marginTop:25,
               }}>
            <Image resizeMode='cover' style={styles.logo} source={{uri: item.thumbnail}}/>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>

        )
    };

    useEffect(() => {
        fetch('https://www.geo-circle.com/api/product/')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);

      console.log(Products);
  return (
    <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', borderRadius:15}}>
                <Carousel
                  layout={"tinder"}
                  ref={ref => this.carousel = ref}
                  data={Products}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={_renderItem}/>
         </View>
  );

}

const styles = StyleSheet.create({
    logo: {
      width: '100%',
      height: '40%',
      borderRadius: 15,
      zIndex:1,
    },
  });
export default Products;