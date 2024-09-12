import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ dataItem, deleteItem }) {
  return (
    <View  style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => deleteItem(dataItem.item.id)}>
        <Text style={styles.text}>{dataItem.item.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 3,
    marginTop: 15,
    marginRight: 10,
  },
  pressedItem: { opacity: 0.5 },

  text: {
    color: "#ffffff",
  },
});
