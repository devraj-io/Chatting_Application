import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { AuthContextProvider, useAuth } from './context/authContext';
import { NotificationProvider } from './context/NotificationContext';
import { ThemeProvider } from './context/ThemeContext';

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticated == 'undefined') return;
    const inApp = segments[0] == '(app)';
    if (isAuthenticated && !inApp) {
      router.replace('/home');
    } else if (isAuthenticated == false) {
      router.replace('/signIn');
    }
  }, [isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NotificationProvider>
          <MenuProvider>
            <MainLayout />
          </MenuProvider>
        </NotificationProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
} 