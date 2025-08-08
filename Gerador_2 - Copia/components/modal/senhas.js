import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../app/useStorage";

export function PasswordItem({data, removePassword}) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
        <Text style={styles.text}>{data}</Text>
    </Pressable>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding : 14,
    width : "100%",
    marginBottom : 14,
    borderRadius : 8,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
 
  },
  text :{
    color : '#fff'

  }
 
});
