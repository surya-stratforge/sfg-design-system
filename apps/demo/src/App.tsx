import { useState } from "react";
import { Button } from "@stratforge/ui";
import type { ButtonSize } from "@stratforge/ui/types";
import "@stratforge/ui/styles/index.css";

export type TempType = ButtonSize;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
}

export default App;
