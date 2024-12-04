import mongoose from 'mongoose';

export const mongodb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dm-db');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Connection error:', error);
  }
};

export default mongodb;
