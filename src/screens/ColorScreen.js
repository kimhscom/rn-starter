import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ColorScreen = () => {
  const [Colors, setColors] = useState([]);
  console.log(Colors);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...Colors, randomRgb()]);
        }}
      />
      <View style={{ width: 100, height: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
