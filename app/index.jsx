import {View, Text} from 'react-native'
import React from 'react'
import {Link,useRouter} from 'expo-router'
import services from './../utils/services'
import { useEffect } from 'react'


export default function Home(){

    const router=useRouter()

    useEffect(()=>{
        CheckUser()
    },[])


    const CheckUser=async()=>{
        const result=await services.getData('login')
        if(result!=='true'){
            router.replace('/login')
        }
        
    }

    return (
        <View> 
            <Text>Detalhes </Text>
        </View>
    )
}