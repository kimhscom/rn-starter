import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [Counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          // Counter++;
          setCounter(Counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(Counter - 1);
        }}
      />
      <Text>Current Count: {Counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
