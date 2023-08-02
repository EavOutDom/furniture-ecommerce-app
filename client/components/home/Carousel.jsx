import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { ImageSlider } from "react-native-image-slider-banner";

const Carousel = () => {
  const slides = [
    require("../../assets/images/fn1.jpg"),
    require("../../assets/images/fn2.jpg"),
    require("../../assets/images/fn3.jpg"),
  ];
  return (
    <View style={styles.carouselContainer}>
      <ImageSlider
        data={[
          {
            img: require("../../assets/images/fn1.jpg"),
          },
          {
            img: require("../../assets/images/fn2.jpg"),
          },
          {
            img: require("../../assets/images/fn3.jpg"),
          },
        ]}
        localImg
        autoPlay
        preview={false}
        indicatorContainerStyle={{ marginBottom: -30 }}
        activeIndicatorStyle={{ backgroundColor: COLORS.primary }}
        inActiveIndicatorStyle={{ backgroundColor: COLORS.secondary }}
        caroselImageStyle={{
          borderRadius: 1,
          height: "100%",
          resizeMode: "center",
        }}
        caroselImageContainerStyle={{
          marginTop: 15,
          height: 210,
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignContent: "center",
  },
});
