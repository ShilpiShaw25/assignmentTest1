import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class RefineScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Refine Screen!</Text>
            </View>
        )
    }
}
