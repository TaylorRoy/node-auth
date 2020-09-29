import mongoose from 'mongoose';
import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import Redis from 'ioredis';
import { MONGO_URI, MONGO_OPTIONS, REDIS_OPTIONS, SESSION_OPTIONS, APP_PORT } from './config'; //index.ts in config

//create a mongodb connection
(async () => {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    //invoke connectRedis on session 
    const RedisStore = connectRedis(session);

    //port, host, password being pass to redis via cache.ts.  Also connected to ioredis- Redis client
    const client = new Redis(REDIS_OPTIONS);

    const app = express();

    app.use(
        session({
            ...SESSION_OPTIONS,
            store: new RedisStore({ client })
        })
    )

    app.get('/', (req, res) => res.json({ message: 'Works' }));

    app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));

})()

