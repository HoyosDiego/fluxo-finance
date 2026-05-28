import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <StatusBar style="light" />
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="add-transaction"
                    options={{
                        presentation: 'modal',
                        title: 'Nuevo Movimiento',
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="filter"
                    options={{
                        presentation: 'modal',
                        title: 'Filtros Avanzados',
                        headerShown: false
                    }}
                />
            </Stack>
        </SafeAreaProvider>
    );
}