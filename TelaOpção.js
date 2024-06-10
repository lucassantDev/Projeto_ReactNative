import {View, Text, StyleSheet, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicon from '@expo/vector-icons/Ionicons';
import Opcao from './componenteOpção';

export default function TelaOpcão() {
    return(
        <View style={estilo.container}>
            <View style={estilo.fundoAzul}>
                    <View style={estilo.nomeUsuario}>
                            <View>
                                <Text style={{color: 'white', fontSize: 15}}>Bem vindo,</Text>
                                <Text style={{color: 'white', fontSize: 20, fontWeight: 800}}>Fulano de tal</Text>
                            </View>
                            <View style={estilo.circulo}>
                                <Ionicon name='person' size={25} color={'gray'}/>
                            </View>
                            
                    </View>  
                
                {/*view das opções do usuário*/}
                    <View style={estilo.primeiraLinha}>
                    <Opcao
                    nome='Requerimento'
                    />
                    <Opcao
                    nome='Notas'/>
                    </View>

                    <View style={estilo.segundaLinha}>
                    <Opcao
                    nome='Frequência'
                    />
                    <Opcao
                    nome='Avaliações'/>
                    </View>

                    <View style={estilo.terceiraLinha}>
                    <Opcao
                    nome='Financeiro'
                    />
                    <Opcao
                    nome='Documentos'/>
                    </View>

                   
                
                {/*view da imagem da logo do senai*/}
                <View style={estilo.logo}>
                <Image
                source={require('./assets/logo_senai.png')}/>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>

    );
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,

    },
    fundoAzul:{
        backgroundColor: '#3850D2',
        height: '100%'
    },
    nomeUsuario:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 30
    },
    circulo:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
        width: '14%',
        borderRadius: 100

    },

    logo:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    primeiraLinha:{
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    segundaLinha:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    terceiraLinha:{
        alignItems: 'center',
        flexDirection: 'row',
    }

});