import React, { useState } from "react";
import { Burger } from "@mantine/core";

export const Hamburguer = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
      color={"var(--white-1)"}
    />
  );
};
