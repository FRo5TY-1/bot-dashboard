import { useContext } from "react";
import {
  SidebarModulesContainer,
  SidebarModuleStyle,
} from "../styles/dashboard";
import { ModuleContext } from "../utils/contexts/moduleContext";

const modules = ["Welcome", "Leaderboard", "Settings"];

export const ModulesComponent = () => {
  const { updateModule } = useContext(ModuleContext);

  return (
    <SidebarModulesContainer>
      {modules.map((mod) => {
        return (
          <SidebarModuleStyle key={mod} onClick={() => updateModule(mod)}>
            {mod}
          </SidebarModuleStyle>
        );
      })}
    </SidebarModulesContainer>
  );
};
