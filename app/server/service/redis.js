import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://@redis-caching-container:6379'
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.error('Redis Error:', err);
});

const connectRedis = async () => {
    await redisClient.connect()
}


export { redisClient }
export default connectRedis
