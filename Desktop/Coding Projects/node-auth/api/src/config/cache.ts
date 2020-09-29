//provides client information about redis and ioredis for index.ts

import { RedisOptions } from 'ioredis';

const {
    REDIS_PORT = 6379,
    REDIS_HOST = 'localhost',
    REDIS_PASSORD = 'secret'
} = process.env

//declare object as RedisOptions
//process.env outputs string by default.  + is added to REDIS_PORT to make an number instead of a string
export const REDIS_OPTIONS: RedisOptions = {
    port: +REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASSORD
}