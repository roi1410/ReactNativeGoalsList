import { useState } from "react";
import { Button, FlatList, StatusBar, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModel, setIsModel] = useState(false);
  function textInputText(text) {
    setNewGoal(text);
  }
  const addGoals = () => {
    if (newGoal === "") return;
    setGoals((prev) => [
      ...prev,
      { text: newGoal, id: Math.round(Math.random() * 10) },
    ]);
    setNewGoal("");
  };
  function deleteItem(id) {
    setGoals((prev) => prev.filter((elm) => elm.id !== id));
  }
  const STYLES = ['default', 'dark-content', 'light-content']
  return (
    <>
      <StatusBar animated={true}  barStyles={'dark-content'} fade={"fade"}  />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={() => setIsModel(true)}
          color={"purple"}
        />
        <GoalInput
          isModel={isModel}
          setIsModel={setIsModel}
          textInputText={textInputText}
          addGoals={addGoals}
          newGoal={newGoal}
        />

        <FlatList
          data={goals}
          renderItem={(dataItem) => (
            <GoalItem dataItem={dataItem} deleteItem={deleteItem} />
          )}
          keyExtractor={(_,index)=>index}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
  },
});
