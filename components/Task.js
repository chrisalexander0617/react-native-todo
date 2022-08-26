import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import CheckBox from '@react-native-community/checkbox';


function Task({title}){
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{title}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        backgroundColor:"#fff",
        marginVertical:10,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
       
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:"#55BCF6",
        opacity:0.4,
        marginRight:20
    },
    itemText:{
        maxWidth:'80%'
    },
    circular:{
        width:12,
        hegiht:12,
        padding:5,
        borderColor:"#55BCF6",
        borderWidth:2,
        borderRadius:10
    }
})

export default Task