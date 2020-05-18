import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({route}) {
    const [devs, setDevs] = useState([])
  const id = route.params?.user ?? 'teste';
  const navigation = useNavigation();

  async function loadDevs() {
    const res = await api.get('/devs', {
      headers: {
        user: id
      }
    })

    setDevs(res.data)
  }

  async function handleLike() {
    // const [dev, ...rest] = devs;

    // await api.post(`/devs/${dev._id}/likes`, null, {
    //   headers: { user: id },
    // })

    // setDevs(rest)
    
    console.log('handleLike', id)
  }

  async function handleDislike() {
    // const [dev, ...rest] = devs;

    // await api.post(`/devs/${dev._id}/dislikes`, null, {
    //   headers: { user: id },
    // })

    // setDevs(rest)

    console.log('handleDislike', id)
  }

  async function handleLogout() {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  useEffect(() => {
    loadDevs()
  }, [id])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.cardsContainer}>
                <View style={[styles.card, { zIndex: 1 }]}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/59174720?v=4' }} />
                    <View style={styles.footer}>
                        <Text style={styles.name}>Marcel Botelho</Text>
                        <Text style={styles.bio} numberOfLines={3}>Aprendiz programador e apredendo muiro com a RocketSeat com suas semanas Omnistack me apresentando as tecnologias mais recentes e como eles funcionan</Text>
                    </View>
                </View>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttons}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}>
                    <Image source={like} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },

    card: {
        borderWidth: 3,
        borderColor: '#DDD',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    avatar: {
        flex: 1,
        height: 300,
    },

    footer: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },

    logo: {
        marginTop: 30,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },

    buttons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
    },
});