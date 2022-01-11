function env(key: string, fallback: string): string;

function env(key: string, fallback: number): number;

function env(key: string, fallback: string | number): string | number {
  const value = process.env[key] ?? fallback;
  if (typeof fallback === 'string') {
    return value;
  }
  return Number.parseFloat(env(key, fallback.toString()));
}

const config = {
  HELLO_WORLD: env('HELLO_WORLD', 'hello world'),
  PORT: env('PORT', 3001),
  MONGO_URL: env('MONGO_URL', 'mongodb://localhost:27017/database-name'),
};

export default config;
