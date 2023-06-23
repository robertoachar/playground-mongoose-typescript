import mongoose from 'mongoose';
import { config } from './config';

export const connect = async (): Promise<typeof mongoose> =>
  mongoose.connect(config.DATABASE);

export const disconnect = async (): Promise<void> => mongoose.disconnect();

mongoose.connection
  .on('connecting', () => console.info('[DATABASE] Connecting database'))
  .on('connected', () => console.info('[DATABASE] Database connected'))
  .on('disconnected', () => console.warn('[DATABASE] Database disconnected'))
  .on('open', () => console.info('[DATABASE] Connection opened'))
  .on('close', () => console.warn('[DATABASE] Connection closed'))
  .on('error', (error) => console.error(`[DATABASE] ${error.message}`));
