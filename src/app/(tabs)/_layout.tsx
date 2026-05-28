import { Tabs, useRouter } from 'expo-router';
import { PlusCircle } from 'lucide-react-native';

export default function TabsLayout() {
    const router = useRouter();
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#10B981',
                tabBarInactiveTintColor: '#94A3B8',
                tabBarStyle: {
                    backgroundColor: '#0F172A',
                    borderTopColor: '#334155',
                },
                headerStyle: {
                    backgroundColor: '#0F172A',
                    shadowColor: 'transparent',
                    elevation: 0,
                },
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
                }}
            />
            <Tabs.Screen
                name="new"
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