export type PartialGuild = {
  id: string;
  name: string;
  icon: string;
};

export type PartialGuildChannel = {
  id: string;
  last_message_id: string;
  type: number;
  name: string;
  position: number;
  parent_id?: string;
  topic?: string;
  guild_id: string;
  permission_overwrites: string[];
  nsfw: boolean;
  rate_limit_per_user: string;
  banner?: string;
};

export type GuildConfigType = {
  guildId: string;
  channelId: string;
  message: string;
};
