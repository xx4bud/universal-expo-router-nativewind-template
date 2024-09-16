import { Link, Stack } from 'expo-router';
import { Heading, Text, VStack } from '@/components/ui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <VStack className="flex-1 items-center justify-center">
        <Heading>This screen doesn't exist.</Heading>
        <Link href={'/'}>
          <Text className="text-center text-info-500">Go to home screen!</Text>
        </Link>
      </VStack>
    </>
  );
}
