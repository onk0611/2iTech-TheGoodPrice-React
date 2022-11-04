import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EasyGameGoodPrice from "./GoodPriceGame/Easy";
import MediumGameGoodPrice from "./GoodPriceGame/Medium";
import HardcoreGameGoodPrice from "./GoodPriceGame/Hardcore";
import ScoreBoard from './Scoreboard';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Good Price Game</Text>
            <Button title="Vetement" onPress={() => navigation.navigate('EasyGoodPrice')} />
            <Button title="Vehicule" onPress={() => navigation.navigate('MediumGoodPrice')} />
            <Button title="Immobilier" onPress={() => navigation.navigate('HardGoodPrice')} />
            <Button title="ScoreBoard" onPress={() => navigation.navigate('ScoreBoard')} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function GameNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="EasyGoodPrice" component={EasyGameGoodPrice} />
                <Stack.Screen name="MediumGoodPrice" component={MediumGameGoodPrice} />
                <Stack.Screen name="HardGoodPrice" component={HardcoreGameGoodPrice} />
                <Stack.Screen name="ScoreBoard" component={ScoreBoard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
