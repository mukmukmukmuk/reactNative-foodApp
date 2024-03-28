import { StyleSheet, View, Text } from "react-native";
export default function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
