import { useContext, useState } from "react";
import { GuildItemStyle } from "../styles";
import {
  GuildDropdownOptionsStyle,
  GuildDropdownOptionStyle,
  GuildDroptdownStyle,
  SelectGuildDropdownStyle,
} from "../styles/dashboard";
import { GuildContext } from "../utils/contexts/guildContext";
import { API_URL } from "../utils/services";
import { PartialGuild } from "../utils/types";

type Props = {
  guild: PartialGuild;
};

export const GuildMenuItem = ({ guild }: Props) => (
  <GuildItemStyle>
    <img
      src={guild.icon}
      alt={guild.name}
      width={50}
      style={{ borderRadius: "50%" }}
    />
  </GuildItemStyle>
);

type DroptdownProps = {
  guilds: PartialGuild[];
};

export const GuildDropdownMenu = ({ guilds }: DroptdownProps) => {
  const { guild, updateGuild } = useContext(GuildContext);
  const [isActive, setActive] = useState(false);

  const updateSelection = (guild: PartialGuild) => {
    setActive(false);
    updateGuild(guild);
  };

  const redirect = () => {
    window.location.href = `${API_URL}/invite`;
  };

  return (
    <div>
      {guild && (
        <GuildDroptdownStyle>
          <SelectGuildDropdownStyle onClick={() => setActive(!isActive)}>
            <img
              src={guild.icon}
              alt={guild.name}
              style={{ borderRadius: "50%" }}
            />
            <p>{guild.name}</p>
            <span></span>
          </SelectGuildDropdownStyle>
          {isActive && (
            <GuildDropdownOptionsStyle>
              {guilds &&
                guilds.map((g) => {
                  return (
                    <GuildDropdownOptionStyle
                      onClick={() => updateSelection(g)}
                    >
                      <img
                        src={g.icon}
                        alt={g.name}
                        style={{ borderRadius: "50%" }}
                      />
                      <p>{g.name}</p>
                    </GuildDropdownOptionStyle>
                  );
                })}
              <GuildDropdownOptionStyle onClick={() => redirect()}>
                Add To Server
              </GuildDropdownOptionStyle>
            </GuildDropdownOptionsStyle>
          )}
        </GuildDroptdownStyle>
      )}
    </div>
  );
};
