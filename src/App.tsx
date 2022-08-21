import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { GuildContext } from "./utils/contexts/guildContext";
import { ModuleContext } from "./utils/contexts/moduleContext";
import { PartialGuild } from "./utils/types";

function App() {
  const [guild, setGuild] = useState<PartialGuild>();
  const [selectedModule, setModule] = useState("Welcome");

  const updateGuild = (guild: PartialGuild) => setGuild(guild);
  const updateModule = (module: string) => setModule(module);

  return (
    <GuildContext.Provider value={{ guild, updateGuild }}>
      <ModuleContext.Provider value={{ selectedModule, updateModule }}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
        </Routes>
      </ModuleContext.Provider>
    </GuildContext.Provider>
  );
}
export default App;
