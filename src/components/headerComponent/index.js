import React from 'react';
import {HStack, Box, StatusBar, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeaderComponent = () => {
  return (
    <>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop={'10'} backgroundColor="#6200ee" />
      <HStack
        bg="#6200ee"
        px="5"
        py="5"
        justifyContent="space-between"
        alignItems="center">
        <Button variant={'ghost'}>
          <HStack space="3" alignItems="center">
            <Icon name={'bars'} size={30} />
          </HStack>
        </Button>
        <HStack space={'3'}>
          <Text
            color="white"
            fontSize="30"
            fontWeight="bold"
            fontStyle={'italic'}
            shadow={9}>
            TODO APP
          </Text>
        </HStack>
        <Button variant={'ghost'}>
          <HStack space="3">
            <Icon name={'angle-down'} size={30} />
          </HStack>
        </Button>
      </HStack>
    </>
  );
};
export default HeaderComponent;
