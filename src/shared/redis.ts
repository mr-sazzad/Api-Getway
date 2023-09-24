import { createClient } from "redis";
import config from "../config";
import logger from "./logger";

const redisClient = createClient({
  url: config.redis_url
});

redisClient.on("error", (err: Error) => {
  logger.error("Redis_Error", err);
});

redisClient.on("connect", () => {
  logger.info("Redis_Connected");
});

const connect = async () => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
