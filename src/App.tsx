import Alert from "./components/alert";
import Button from "./components/Button";
import React, { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
