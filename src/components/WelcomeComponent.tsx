import { useContext } from "react";
import { MoonLoader } from "react-spinners";
import { Flex } from "../styles";
import { Select, TextArea } from "../styles/dashboard";
import { GuildContext } from "../utils/contexts/guildContext";
import { useWelcomePage } from "../utils/hooks/useWelcomePage";
import { updateWelcomeMessage } from "../utils/services";

export const WelcomeComponent = () => {
  const { guild } = useContext(GuildContext);
  const {
    channels,
    selectedChannel,
    setSelectedChannel,
    loading,
    message,
    setMessage,
  } = useWelcomePage(guild?.id || "");

  return (
    <>
      {channels && !loading ? (
        <div>
          <section>
            <Select
              defaultValue={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
            >
              <option disabled={true}>Please Select a Channel</option>
              {channels.map((channel) => (
                <option value={channel.id}>#{channel.name}</option>
              ))}
            </Select>
            <TextArea
              value={message}
              onChange={(t) => setMessage(t.target.value)}
            />
          </section>
          <Flex justifyContent="flex-end">
            <button
              onClick={() =>
                updateWelcomeMessage(
                  guild?.id || "",
                  selectedChannel || "",
                  message || ""
                )
              }
            >
              Save
            </button>
          </Flex>
        </div>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          <MoonLoader size={40} color="white" />
        </Flex>
      )}
    </>
  );
};
