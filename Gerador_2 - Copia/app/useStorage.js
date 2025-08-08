import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  // BUSCAR
  const getItem = async (key) => {
    try {
      const password = await AsyncStorage.getItem(key);
      return JSON.parse(password) || [];
    } catch (error) {
      console.log("erro ao buscar", error);
      return [];
    }
  };

  // SALVAR
  const saveItem = async (key, value) => {
    try {
      let password = await getItem(key);
      password.push(value);
      await AsyncStorage.setItem(key, JSON.stringify(password));
    } catch (error) {
      console.log("erro ao salvar", error);
    }
  };

  // REMOVER
  const removeItem = async (key, item) => {
    try {
      let password = await getItem(key);
      let myPassword = password.filter((password) => password !== item);
      await AsyncStorage.setItem(key, JSON.stringify(myPassword));
      return myPassword;
    } catch (error) {
      console.log("erro ao deletar", error);
      return [];
    }
  };

  return {
    getItem,
    saveItem,
    removeItem,
  };
};

export default useStorage;
