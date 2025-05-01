import { Text, View } from "react-native";
import { Link } from 'expo-router'


export default function Index() {
  return (
    <View className="bg-primary w-screen h-screen">
      <Text className="font-bold text-2xl ">Edit app/index.tsx to edit this screen.</Text>
        <Link href="/akhlaq/others">others</Link>
    </View>
  );
}
