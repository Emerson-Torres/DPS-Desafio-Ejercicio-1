import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput,TouchableHighlight, Alert ,ScrollView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const Encabezado = () => {

    const [selected,setSelected]=React.useState("");
    const data = [{key:1.00, value:"Short 8 onz"},{key:1.50, value:"Tall 12 onz"},{key:2, value:"Grande 16 onz"}];
    
    const [selected2,setSelected2]=React.useState("");
    const data2 = [{key:2, value:"Mocha"},{key:2.50, value:"Te chai"},{key:1.50, value:"Americano"},{key:3.00, value:"Frapper"}];
    
    const [selected3,setSelected3]=React.useState("");
    const data3 = [{key:0.15, value:"Efectivo"},{key:0.05, value:"Tarjeta de Credito"}];

    const[text1, setText]=useState(0);
    
    const[compra, setCompra]=useState(0);
    const[totalCompra, setTotalCompra]=useState(0);
    const[descuento, setDescuento]=useState("");
    const[tamanio, setTamabio]=useState("");
    const[tipo, setTipo]=useState("");
    const funcionBoton=()=>{
        if(selected && selected2 && selected3 && text1){
            setCompra((selected+ selected2)* text1);
            switch(selected){
                case 1.00:
                    setTotalCompra(compra - (compra*0.05));
                    setTamabio('Short 8 onz');
                    break;
                case 1.50:
                    setTotalCompra(compra - (compra*0.15));
                    setTamabio('Tall 12 onz');
                    break;
                case 2:
                    setTotalCompra(compra - (compra*0.15));
                    setTamabio('Grande 16 onz');
                    break; 
            }
            switch(selected2){
                case 2:
                    setTotalCompra(compra - (compra*0.05));
                    setTipo('Mocha');
                    break;
                case 2.50:
                    setTotalCompra(compra - (compra*0.15));
                    setTipo('Te Chai');
                    break;
                case 1.50:
                    setTotalCompra(compra - (compra*0.15));
                    setTipo('Americano');
                    break; 
                case 3.00:
                    setTotalCompra(compra - (compra*0.15));
                    setTipo('Frapper');
                    break; 
            }
            switch(selected3){
                case 0.05:
                    setTotalCompra(compra - (compra*0.05));
                    setDescuento('5%');
                    break;
                case 0.15:
                    setTotalCompra(compra - (compra*0.15));
                    setDescuento('15%');
                    break; 
            }
        }else{
            Alert.alert("Se han detectado campos vacios");
        }
        
    }
   
    return(
        <ScrollView >
            <View  style={styles2.container3}>
            <Text style={styles2.text}>StarBosco APP</Text>
            <View style={styles2.estilocontenList}>
            <SelectList data={data} setSelected={setSelected}  dropdownTextStyles={{color:"white"}} ></SelectList>
            </View>
            <View style={styles2.estilocontenList}>
            <SelectList data={data2} setSelected={setSelected2}  dropdownTextStyles={{color:"white"}} ></SelectList>
            </View>
            <View style={styles2.estiloconten2}>
            <SelectList data={data3} setSelected={setSelected3}  dropdownTextStyles={{color:"white"}} ></SelectList>
            
            <TextInput style={styles2.inputtext}   onChangeText={newText => setText(newText)} placeholderTextColor="white"  placeholder="Cantidad a llevar" />
            </View>
            <TouchableHighlight onPress={funcionBoton}  style={styles2.boton}><Text style={styles2.textbtn}>Enviar</Text></TouchableHighlight>
            </View>
            <View style={styles2.containerTarjeta}>
                <View style={styles2.tarjeta}>
                <Text style={{fontWeight:'bold', fontSize:25, textAlign:'center'}}>Resumen de su orden</Text>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Cantidad solicitada:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{text1}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Tamaño:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{tamanio}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Tipo cafe:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{tipo}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Descuento:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{descuento}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Total sin descuento:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{compra}</Text>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                    <Text style={{fontWeight:'bold', fontSize:20}}>Total de su compra:</Text>
                    <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>{totalCompra}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles2 = StyleSheet.create({
    container3: {  
      backgroundColor:'#0A3B7B',
     
      paddingLeft:15,
      paddingRight:15,
    },
    text: {
        textAlign:'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
       
    },
    inputtext: {
        height:40,
        textAlign:'center',
        color:"white",
        borderRadius:5,
        marginLeft:80,
        borderColor: 'white',
        borderWidth:2
    },
    boton: {
        height:40,
        paddingTop:10,
        textAlign:'center',
        backgroundColor:'#0d6efd',
        borderRadius:10,
        borderWidth:2,
        fontWeight:'bold',
        marginBottom: 10
    },
    textbtn:{
        textAlign:"center", 
        color:"white", 
        fontWeight:'bold'
    },
    textslectlist:{
        borderColor: 'white',
        backgroundColor:"white",
        padding:10,
        textAlign:'center',
        borderWidth:2,
        marginBottom:10
    },estiloconten2:{
         flexDirection:'row',
         
          marginBottom:10
    },estilocontenList:{
        
         marginBottom:10
   },containerTarjeta:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   },tarjeta:{
    borderColor: 'black',
    borderWidth:2,
    marginTop:110,
    height:210,
    width:300, 
    borderRadius:20,
    padding:5
   }
    
  });
  
export default Encabezado