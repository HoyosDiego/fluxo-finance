import { Tabs, useRouter } from 'expo-router';
import { PlusCircle, Wallet } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { View as RNView } from 'react-native';

// 🔥 Forzamos el mapeo manual de className a style para este componente
cssInterop(RNView, { className: 'style' });

function TabBackground() {
    return <RNView className="flex-1 bg-red-500 border-t border-slate-800" />;
}

function HeaderBackground() {
    return <RNView className="flex-1 bg-slate-900" />;
}

export default function TabsLayout() {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#10B981',
                tabBarInactiveTintColor: '#94A3B8',

                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                    borderTopWidth: 0,
                },

                // 🔄 Pasamos la referencia del componente limpio
                tabBarBackground: () => <TabBackground />,
                headerBackground: () => <HeaderBackground />,

                headerShadowVisible: false,
                headerTitleStyle: {
                    color: '#F8FAFC',
                    fontWeight: 'bold',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({ color, size }) => (
                        <Wallet color={color} size={size} />
                    ),
                }}
            />

            <Tabs.Screen
                name="add-transaction"
                options={{
                    title: 'Añadir',
                    tabBarIcon: () => (
                        <PlusCircle color="#10B981" size={28} />
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        router.push('/add-transaction');
                    },
                }}
            />
        </Tabs>
    );
}