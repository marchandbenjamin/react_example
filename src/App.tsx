import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import MyButton from "./components/MyButton";

function App() {
  let items = ["New York", "Tokyo", "Paris", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <MyButton onClick={() => setAlertVisibility(true)}>Click me</MyButton>
    </div>
  );
}

export default App;
