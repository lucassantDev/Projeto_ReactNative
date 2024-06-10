import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';



export default function TelaInicial({navigation}) {
    var usuario = ''
    var senha = ''

    {/*função para ver se o login do usuário e sua senha estão corretos*/}
    function Login(){
      if(usuario == 'admin' && senha == '1234'){
          navigation.navigate('Tela Opção')
      }else{
        Alert.alert('Usuário e/ou senha incorretos!')
      }
    }

  return (
    <View style={estilo.container}>
        <View style={estilo.fundoAzul}>
            <Text style={{color: 'white', 
                fontSize: 25, 
                fontWeight: 800,
                margin: 90}}>
                Login
            </Text>

            <View style={estilo.usuarioSenha}>
                    <TextInput
                    onChangeText={(texto) => {usuario=texto}}
                    mode='outlined'
                    label='usuário'
                    size={10}
                    style={{height: 50, width: 250, marginBottom: 20, marginTop: 30}}
                    />

                    <TextInput
                    onChangeText={(texto) => {senha=texto}}
                    mode='outlined'
                    label='senha'
                    size={20}
                    style={{height: 50, width: 250, marginBottom: 20}}
                    />

                    <TouchableOpacity
                    onPress={() => Login()}>
                    <View style={estilo.Botao}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 600}}>
                            
                            Entrar
                            </Text>
                    </View>
                    </TouchableOpacity>


                    {/*botão de não ter conta*/}
                    <TouchableOpacity
                    onPress={() => {navigation.navigate('Tela Cadastro')}}>
                      <View style={estilo.Cadastro}>
                          <Text style={{color: 'white',
                                        fontWeight: 500,
                                        fontSize: 15
                                      }}>
                              Não tenho conta
                          </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={estilo.Senai}>
                    <Image
                    source={require('./assets/logo_senai.png')}
                    />
                    </View>
            </View>
        </View>
       
        
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  fundoAzul:{
    backgroundColor: '#3850D2',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  usuarioSenha:{
    alignItems: 'center',
    borderRadius: 20

  },
  Senai:{
    marginTop: 120
  },

  Botao:{
    backgroundColor: '#6079FF',
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    margin: 20
  },
  

}); 

