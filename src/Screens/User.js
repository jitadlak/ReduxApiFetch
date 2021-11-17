import React,{useEffect} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from '../redux/actions'

const User = () => {

    const {users} = useSelector(state=> state.userReducer)
    const dispatch = useDispatch()


    useEffect(()=>{
dispatch(getUser())
console.log(users)
    },[])

    return (
        <View style={styles.container}>
            <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>Users</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.subtitle}>Username : {item.username}</Text>
                        <Text style={styles.subtitle}> Email : {item.email}</Text>
                        <Text style={styles.subtitle}> Phone : {item.phone}</Text>
                        <Text style={styles.subtitle}> Address : {item.address.city}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'tomato'
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        margin: 3,
        color: 'black',
        
    }
})

export default User
