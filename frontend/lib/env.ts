const env = process.env;

if (!env.PEXELS_API_KEY || typeof env.PEXELS_API_KEY !== 'string') {
    throw new Error('PEXELS_API_KEY is missing or not a string');
}

export default env;
