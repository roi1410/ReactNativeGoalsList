import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ textInputText, addGoals, newGoal, setIsModel, isModel }) {
  return (
    <Modal animationType="slide" visible={isModel}>
      <View style={styles.inputContainer}>
        <View style={styles.btn}>
          <Button title="X" onPress={() => setIsModel(false)} />
        </View>
        <Image style={styles.Image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={textInputText}
          style={styles.textInput}
          placeholder="enter your goal"
          value={newGoal}
        />
        <Button onPress={() => addGoals()} title="add goal" />
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  btn: {
    position: "absolute",
    top: 50,
    left: 6,
  },
  textInput: {
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
  },
  Image: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
