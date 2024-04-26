import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

const windowWidht = Dimensions.get('window').width;

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
        }
    }),
});

export default function Notificacoes() {
    const navigate = useNavigation();
    const route = useRoute();
    const [allNotifications, setAllNotifications] = useState(route.params?.itens)

    return (
        <View style={styles.container}>
            {allNotifications.data.map((item, index) => (
                <View style={styles.notificationContainer} key={index}>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.title}>{item.titleMessage}</Text>
                    <Text style={styles.body}>{item.bodyMessage}</Text>
                </View>
            ))}

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationContainer: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    date: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        marginBottom: 5,
    },
    body: {
        fontSize: 14,
    },

})