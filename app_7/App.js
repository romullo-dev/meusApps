import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SectionList} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList 
        sections = {[
          {title : 'Ouro', data : ['França', 'Maria'] },
          {title : 'Prara', date : ['Romulo', 'Mara'] },
          {title : 'Bronze', data : ['Carlos', 'Mari'] },
          {title : 'Vai de onibus', data : ['Sergio', 'Sergio'] },
          {title : 'ouro', data : ['França', 'Maria'] },
          {title : 'ouro', data : ['França', 'Maria'] },
      ]}
      renderItem = {({item}) => (
        <View style={styles.item}>
          <Text style={styles.itemTexto}>{item}</Text>
        </View>

      )}
      renderSectionHeader = {({ section }) =>(

        <Text style={styles.header}>{section.title}</Text>

      )}

      keyExtractor = {(item, index) => item + index }

      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
