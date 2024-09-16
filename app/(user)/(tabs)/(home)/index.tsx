import { Button, ButtonText } from '@/components/ui/button';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { Heading, Text, View, VStack } from '@/components/ui';
import { ExternalLink } from '@/components/ExternalLink';

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <VStack className="flex-1 items-center justify-center gap-5">
        <Heading>This Home Screen</Heading>

        <View className="h-[1px] w-full max-w-md bg-background-300 md:max-w-2xl" />

        <View className="max-w-md flex-col items-center justify-center gap-2 text-center">
          <Text>Open up the code for this screen :</Text>
          <View className="rounded bg-background-300 p-1 px-20 md:px-32">
            <Text className="text-base font-medium">
              app/(user)/(tabs)/(home)/index.tsx
            </Text>
          </View>

          <ExternalLink href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
            <Text className="text-center text-info-500">
              Tap here if your app doesn't automatically update!
            </Text>
          </ExternalLink>
        </View>

        <View className="h-[1px] w-full max-w-md bg-background-300 md:hidden" />

        <Link href={'/profile'} asChild>
          <Button
            action={'primary'}
            variant={'solid'}
            size={'sm'}
            isDisabled={false}>
            <ButtonText>Go to Profile</ButtonText>
          </Button>
        </Link>
      </VStack>
    </>
  );
}
