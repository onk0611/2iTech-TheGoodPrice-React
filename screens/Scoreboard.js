import {Text, View, StyleSheet} from "react-native";

export default function ScoreBoard() {
    return (
        <View style={styles.containerScoreboard}>
            <Text style={styles.titleScoreboard}>Scoreboard</Text>
            <Text style={styles.textScoreboard}>[OnK] à réaliser le juste prix [Immobilier] en 17 tentative(s) !</Text>
            <Text style={styles.textScoreboard}>[Adrien] à réaliser le juste prix [Vehicule] en 7 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Alban] à réaliser le juste prix [Immobilier] en 23 tentatives !</Text>
            <Text style={styles.textScoreboard}>[OnK] à réaliser le juste prix [Immobilier] en 22 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Alban] à réaliser le juste prix [Vetement] en 5 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Oceane] à réaliser le juste prix [Vetement] en 4 tentatives !</Text>
            <Text style={styles.textScoreboard}>[OnK] à réaliser le juste prix [Vehicule] en 13 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Oceane] à réaliser le juste prix [Immobilier] en 27 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Sirius] à réaliser le juste prix [Immobilier] en 14 tentatives !</Text>
            <Text style={styles.textScoreboard}>[Adrien] à réaliser le juste prix [Vehicule] en 18 tentatives !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerScoreboard: {
        flex: 1,
        alignItems: "center",
    },
    titleScoreboard: {
        fontSize: 32,
    },
    textScoreboard: {
        textAlign: "center",
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 8,
        width: 400,
        fontSize: 13,
    }
})
