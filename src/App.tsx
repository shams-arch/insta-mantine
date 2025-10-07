import { useState } from "react";
import { Box, Button, Text, TextInput, Card } from "@mantine/core";

export default function App() {
  const [name, setName] = useState("");

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 50,
        gap: 20,
      }}
    >
      {/* Text component: use 'fw' for font weight */}
      <Text size="xl" fw={700}>
        Hello Mantine!
      </Text>

      {/* TextInput: use 'style' instead of 'sx' */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        style={{ width: 300 }}
      />

      <Button color="blue" onClick={() => alert(`Hello ${name}`)}>
        Say Hello
      </Button>

      {/* Card: use 'style' instead of 'sx' */}
      <Card shadow="sm" style={{ width: 300, textAlign: "center" }}>
        <Text>Welcome to Mantine Components!</Text>
      </Card>
    </Box>
  );
}
