import { Text, View } from 'react-native';

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-blue-500 p-6">
            <View className="bg-white p-8 rounded-2xl shadow-xl items-center w-full">
                <Text className="text-3xl font-bold text-gray-800 mb-2">
                    ¡Funciona!
                </Text>
                <Text className="text-gray-600 text-center text-lg">
                    Tailwind CSS y NativeWind están activos en tu proyecto.
                </Text>
            </View>
        </View>
    );
}