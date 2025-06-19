import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "./useStorage";
import { FlatList } from "react-native";
import { PasswordItem } from "../components/modal/senhas";

export function Senhas() {
  const [listPassword, setListPassword] = useState([]);
  const focused = useIsFocused();
  const { getItem , removeItem} = useStorage();

  useEffect(() => {
    async function loadPassword() {
      const passwords = await getItem("@pass");
      setListPassword(passwords);
    }
    loadPassword();
  }, [focused]);

  async function handleDeletePassword (item) {
    const passwords = await removeItem("@pass", item) 
    setListPassword(passwords)
  } 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItem data={item}    removePassword={() => handleDeletePassword(item)}
 />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 50,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
