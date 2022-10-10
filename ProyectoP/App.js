import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import { StyleSheet, Text, View,  } from 'react-native';
import repositories from './src/data/repositories';
import Encabezado from './src/components/encabezado';
import ModalC from './src/components/modal';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function App() {
   
  return (

    <View style={styles3.container}>
      <Encabezado ></Encabezado>

    </View>

  );
}

const styles3 = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
  items: {
    backgroundColor: '#e2e3e5',
    padding: 10,
    borderRadius: 5
  },
  itemname: {
    fontSize: 20,
    textAlign: 'center'
  },
  itemconten: {
    padding: 10,

  },
  titlesecon: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  imgstyle: {
    width:110,
    height:70,
    borderRadius:20,
    position: 'relative',
    left:120,
    alignItems: 'center'
  },
  texto:{
    textAlign:'center'
  },  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
