import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [Red, setRed] = useState(0);
  const [Green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(Red + COLOR_INCREMENT)}
        onDecrease={() => setRed(Red - COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(Green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(Green - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(Blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(Blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${Red}, ${Green}, ${Blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
