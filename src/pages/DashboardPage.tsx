import { useContext, useState } from "react";
import { useFetchGuilds } from "../utils/hooks/useFetchGuilds";
import { MoonLoader } from "react-spinners";
import { Flex } from "../styles";
import {
  GuildNotSelected,
  Page,
  GuildsGrid,
  DashboardSidebar,
} from "../styles/dashboard";
import { GuildContext } from "../utils/contexts/guildContext";
import {
  GuildDropdownMenu,
  GuildMenuItem,
} from "../components/GuildsComponent";
import { PartialGuild } from "../utils/types";
import { ModulesComponent } from "../components/ModulesComponent";
import { ModuleComponent } from "../components/ModuleComponent";

export const DashboardPage = () => {
  // const { guild, updateGuild } = useContext(GuildContext);
  // const { guilds, loading } = useFetchGuilds();
  const [guild, updateGuild] = useState({
    id: "913318880561205268",
    name: "BTU",
    icon: "https://cdn.discordapp.com/icons/913318880561205268/ab6c23a930a24c19ee845d65891f4f34.png?size=32",
  });
  const [guilds] = useState([]);
  const [loading] = useState(false);

  return (
    <Page>
      {guild ? (
        loading ? (
          <Flex justifyContent="center">
            <MoonLoader size={50} color="white" />
          </Flex>
        ) : (
          <>
            <DashboardSidebar>
              <h2>BTU Bot Dashboard</h2>
              <GuildDropdownMenu guilds={guilds as PartialGuild[]} />
              <h2>Modules</h2>
              <ModulesComponent />
            </DashboardSidebar>
            <ModuleComponent />
          </>
        )
      ) : (
        <GuildNotSelected>
          <h2>Select A Server</h2>
          <GuildsGrid>
            {loading ? (
              <Flex justifyContent="center">
                <MoonLoader size={50} color="white" />
              </Flex>
            ) : (
              <div>
                {guilds &&
                  guilds.map((guild) => (
                    <div key={guild} onClick={() => updateGuild(guild)}>
                      <GuildMenuItem guild={guild} />
                    </div>
                  ))}
              </div>
            )}
          </GuildsGrid>
        </GuildNotSelected>
      )}
    </Page>
  );
};
