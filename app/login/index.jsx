import {View, Text, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import {client} from '../../utils/Kindeconfig'
import services from '../../utils/services'
import {useRouter} from 'expo-router'

export default function TelaLogin(){
    const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
          await services.storeData('login','true')
          router.replace('/')
        }
      };
    return (
        <View> 
            <Text>Login</Text>

            <TouchableOpacity onPress={handleSignIn}>
                <Text style={{textAlign:'center', color:Colors.PRIMARY}}>Acessar/Cadastrar</Text>
            </TouchableOpacity>

        </View>

    )
}
