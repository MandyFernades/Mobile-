import React from "react";
import {View, Text, StatusBar, TextInput} from 'react-native'

export default class App extends React.Component {
  render(){
    return(
      <View>
        <View style={{
          alignSelf: 'center',
          backgroundColor: 'black',
          height: 200,
          width: 200,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10

        }}> 
        </View>
        <View style={{padding: 16}}>
        <TextInput 
         placeholder="Digite seu nome..."
         onFocus={_ => alert("0 campo  2 recebeu o focus...")} //quando o usuario clicar no campo vai aparecer o alerta
        //onSubmitEditing={_ => alert("Nome Cadastrado...")} //quando o usuario finalizar (apertar o botão de finalizado "check") vai aparecer um alerta quando ele termina de digitar
        //onBlur={_=> alert("Saiu do Campo 1")} --// um alerta quando o usuario sair do campo de um texto!
        //onChangeText={value => alert(value)} --//qualquer mudança de texto ele vai alertar
          style={{
            borderColor: 'black',
            borderWidth: 3,
            height: 100,//altura do texto
            fontSize: 20,
            paddingHorizontal: 16,
            marginBottom: 20
            
            }}>
            </TextInput> 
          <TextInput 
          autoFocus={true} //não vai direto para o campo (false)
          placeholder="Digite sua idade..." //mostra para o usuario oq ele deve colocar no campo
          //multiline={true} //ele serve para quebrar o texto
          textAlignVertical="center" //ele serve para colocar o texto onde quiser "centro", "incicio", "fim"
          //keyboardType="default" //Serve para o teclado mudar "numero", "texto", "email"
         //editable={true} //não deixa o usuario editar (false)
          //maxLength={3} //indicar a quantidade de caracteres que pode ser colocado
          //value="Mandy" --//valor do texto
          style={{
            borderColor: 'pink',
            borderWidth: 3,
            height: 100,//altura do texto
            fontSize: 20,
            paddingHorizontal: 16,
            
            }}>
            </TextInput> 

        </View>
      
        <View style={{padding: 16}}>
        <Text 
        selectable={true}
        style={{
          fontSize: 20,
          backgroundColor: 'yellow',
          color:'#F00',
        }}>Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text 
         ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
         make a type specimen book. It has survived not only five centuries, but also the leap into 
         electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
           publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
     
        <StatusBar/>
        </View>

    )
  }
}