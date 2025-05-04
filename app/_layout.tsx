import { Stack } from "expo-router";
import './global.css'

export default function RootLayout() {
  return <Stack >
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }} />
        {/* <Stack.Screen 
        name="akhlaq/[id]"
        options={({ route }) => ({ 
          headerShown: true,
          title: `akhlaq/${route.params?.id || ''}`,
        })} 
      /> */}
        <Stack.Screen
        name="akhlaq"
        options={{ 
          headerShown: false // Hide the header for this group as we're handling it in akhlaq/_layout.tsx
        }} 
      />
  </Stack>
} 
