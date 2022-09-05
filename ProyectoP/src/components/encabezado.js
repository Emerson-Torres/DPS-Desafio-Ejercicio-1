import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { StyleSheet, Text, View } from 'react-native';

const Encabezado = () => {
    return(
        <View style={styles2.container3}>
            <Text style={styles2.text}>Planetas del sistema solar</Text>
        </View>
    )
}
const styles2 = StyleSheet.create({
    container3: {  
      backgroundColor:'#cce5ff',
    },
    text: {
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    }
 
  });
  
export default Encabezado