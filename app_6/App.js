import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, scrollView , Image} from 'react-native';

/* Array de frutas */
const frutas = ["maçã", "banana", "Laranja", "Uva", "Manga"]

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView style={styles.container}>
          /* ScrollView Simples */
        <Text style={styles.texto}></Text>

        <Text style={styles.texto}>Item 1</Text>

        <Text style={styles.texto} >Item 2</Text>

        <Text style={styles.texto}>Item 3</Text>

        <Text style={styles.texto}>Item 4</Text>

        <Text style={styles.texto}>Item 5</Text>

        <Text style={styles.texto}>Item 6</Text>

        <Text style={styles.texto}>Item 7</Text>

        <Text style={styles.texto}>Item 8</Text>
      </ScrollView>

        /* ScrollView com array */

      <ScrollView style={styles.container}>
        {frutas.map((fruta, index) =>
          <View key={index} style={styles.frutas} >
            <Text style={styles.frutas} >{fruta} </Text>
          </View>
        )}
      </ScrollView>
      <ScrollView style={styles.container}>
        
        <View style={styles.imageBox}>
          <Image 
            source={{uri:'https://www.mymove.com/wp-content/uploads/2018/08/GettyImages-1178382593.jpg'}}
            style={styles.imagem}
          />
        </View>
        <View style={styles.imageBox}>
          <Image 
            source={{uri:'https://media.istockphoto.com/id/1334973209/photo/stunned-cat.jpg?s=612x612&w=0&k=20&c=1JBtPbDwlceEOqGXcR35KhE8zFIk_0PwXrAeublK-mM='}}
            style={styles.imagem}
          />
        </View>
        <View style={styles.imageBox}>
          <Image 
            source={{uri:'https://th.bing.com/th/id/OIP.Vp2czSwc0nbsgNc16GIn6wHaE8?cb=iwc2&w=600&h=400&rs=1&pid=ImgDetMain'}}
            style={styles.imagem}
          />
        </View>
        <View style={styles.imageBox}>
          <Image 
            source={{uri:'https://www.mymove.com/wp-content/uploads/2018/08/GettyImages-1178382593.jpg'}}
            style={styles.imagem}
          />
        </View>
        <View style={styles.imageBox}>
          <Image 
            source={{uri:'https://th.bing.com/th/id/OIP.xzyZK5dsa2NC-kVXrIDN4AAAAA?cb=iwc2&rs=1&pid=ImgDetMain'}}
            style={styles.imagem}
          />
        </View>
      </ScrollView>

      //ScrollView com Botão
      <ScrollView style={styles.container}>
        <Viws style={styles.container} >
            <button>ssss</button>
        </Viws>
      </ScrollView>






    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  texto: {
    fontSize: 20,
    color: "#000"
  },
  frutas: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#add8e6",
    borderRadius: 10,
    //borderColor: "#add8e6",
  },
  fruta: {
    fontSize: 30,
  },
  imageBox : {
    marginBlock: 20,
    alignItems : 'center',
  },
  imagem : {
    width : 300,
    height : 200,
    borderRadius : 20,

  },
});
