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
  HELLO_WORLD: 'hello world',
  PORT: env('PORT', 3000),
};

export default config;
