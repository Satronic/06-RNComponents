import React, { useState } from 'react';
import { Container } from '../components/Container';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/themeContext';

export const TextInputScreen = () => {

    const { form, onChange } = useForm();

    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <Container title='Text Input'>
            <ScrollView>
                <TextInput
                    style={{
                        ...styles.input,
                        color: colors.text,
                        backgroundColor: colors.background,
                        borderColor: colors.primary
                    }}
                    placeholder="Name"
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={(value) => onChange(value, 'name')}
                />
                <TextInput
                    style={{
                        ...styles.input,
                        color: colors.text,
                        backgroundColor: colors.background,
                        borderColor: colors.primary
                    }}
                    placeholder="E-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(value) => onChange(value, 'email')}
                    keyboardType="email-address"
                />
                <TextInput
                    style={{
                        ...styles.input,
                        color: colors.text,
                        backgroundColor: colors.background,
                        borderColor: colors.primary
                    }}
                    placeholder="Phone"
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value, 'phone')}
                    keyboardType="phone-pad"
                />
                <View style={styles.switchContainer}>
                    <Text style={{ ...styles.text, color: colors.text }}>Suscribeme</Text>
                    <CustomSwitch isOn={form.isSuscribed} onChange={(value: boolean) => onChange(value, 'isSuscribed')} />
                </View>

                <Text style={{ ...styles.text, color: colors.text }}>
                    {JSON.stringify(form, null, 4)}
                </Text>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: 'white'
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
});
