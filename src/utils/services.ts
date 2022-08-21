import { GuildConfigType, PartialGuild, PartialGuildChannel } from "./types";
import axios, { AxiosRequestConfig } from "axios";

export const API_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const CONFIG: AxiosRequestConfig = { withCredentials: true };

export const getMutualGuilds = () =>
  axios.get<PartialGuild[]>(`${API_URL}/api/guilds`, CONFIG);

export const getGuildChannels = (guildId: string) =>
  axios.get<PartialGuildChannel[]>(
    `${API_URL}/api/${guildId}/channels`,
    CONFIG
  );

export const getGuildConfig = (guildId: string) =>
  axios.get<GuildConfigType>(`${API_URL}/api/${guildId}/config`);

export const updateWelcomeMessage = (
  guildId: string,
  channelId: string,
  message: string
) =>
  axios.post(`${API_URL}/api/${guildId}/config/welcome-message`, {
    channelId,
    message,
  });
