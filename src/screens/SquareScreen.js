import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [Red, setRed] = useState(0);
  const [Green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(Red + 1)}
        onDecrease={() => setRed(Red - 1)}
        color="Red"
      />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
