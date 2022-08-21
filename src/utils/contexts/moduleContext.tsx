import { createContext } from "react";

type ModuleContextType = {
  selectedModule: string;
  updateModule: (module: string) => void;
};

export const ModuleContext = createContext<ModuleContextType>({
  selectedModule: "Welcome",
  updateModule: () => {},
});
