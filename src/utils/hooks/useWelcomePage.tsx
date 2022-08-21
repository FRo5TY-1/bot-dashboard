import { useEffect, useState } from "react";
import { getGuildChannels, getGuildConfig } from "../services";
import { PartialGuildChannel } from "../types";

export function useWelcomePage(guildId: string) {
  const [channels, setChannels] = useState<PartialGuildChannel[]>();
  const [selectedChannel, setSelectedChannel] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getGuildConfig(guildId)
      .then(({ data }) => {
        setSelectedChannel(data.channelId);
        setMessage(data.message);
        return getGuildChannels(guildId);
      })
      .then(({ data }) => setChannels(data.filter((c) => c.type === 0)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [guildId]);

  return {
    channels,
    loading,
    selectedChannel,
    setSelectedChannel,
    message,
    setMessage,
  };
}
