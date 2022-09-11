import { useContext } from "react";
import { ModuleContainer } from "../styles/dashboard";
import { ModuleContext } from "../utils/contexts/moduleContext";
import { EmbedComponent } from "./EmbedComponent";
import { WelcomeComponent } from "./WelcomeComponent";

export const ModuleComponent = () => {
  const { selectedModule } = useContext(ModuleContext);
  return (
    <ModuleContainer>
      {selectedModule === "Welcome" ? (
        <WelcomeComponent />
      ) : selectedModule === "Leaderboard" ? (
        <div>Coming Soon</div>
      ) : selectedModule === "Embed" ? (
        <EmbedComponent />
      ) : (
        <div>Coming Soon</div>
      )}
    </ModuleContainer>
  );
};
