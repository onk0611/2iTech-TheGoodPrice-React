import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Medium() {
    const [nbr, setNbr] = useState('');
    const [price, setPrice] = useState(5000);
    const [attempt, setAttempt] = useState(1);
    const [username, setUsername] = useState('');
    const cheatCode = 15986;

    const fetchPrice = () => {
        setPrice(Math.floor(Math.random() * 50000) + 1);
    }

    useEffect(() => {
        fetchPrice()
    }, [])

    const handlePress = () => {
        if (nbr == cheatCode) {
            alert(price)
        }
        if (nbr > price && nbr != cheatCode) {
            alert('Trop haut')
            setAttempt(attempt + 1);
        }
        if (nbr < price && nbr != cheatCode) {
            alert('Trop bas')
            setAttempt(attempt + 1);
        }
        if (nbr == price) {
            alert('Bravo ' + username + ', vous avez trouvé le prix en ' + attempt + ' coups')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Trouve le juste prix d'un véhicule entre 5 000€ et 50 000€</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom d'utilisateur"
                onChangeText={newUsername => setUsername(newUsername)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Deviner le juste prix"
                onChangeText={newNbr => setNbr(newNbr)}
                value={nbr}
                keyboardType={"numeric"}
            />
            <Button
                title={"Valider"}
                onPress={handlePress}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

