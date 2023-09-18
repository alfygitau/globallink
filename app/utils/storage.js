import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw Error(`Error setting ${key}: ${error}`);
  }
};

export const deleteAsyncStorageItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Error deleting ${key}:`, error);
  }
};

export const getAsyncStorageItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error getting ${key}:`, error);
    return null;
  }
};
