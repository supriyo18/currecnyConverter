import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type currecnyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>


const CurrencyButton = (props: currecnyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: '#FFFFFF',
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: '#2475B0',
        marginBottom: 4
    }
})

export default CurrencyButton;