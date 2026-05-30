import { Button } from '@/shared/ui/Button/Button';
import { View } from 'react-native';

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-blue-500 p-6">
            <View className="bg-white p-8 rounded-2xl shadow-xl items-center w-full">
              

                <Button label="¡Haz clic en miii!" onPress={() => console.log('¡Botón presionado!')} disabled={false} />
            </View>
        </View>
    );
}