import React from 'react';
import {
  Box,
  Button,
  HStack,
  Menu,
  StatusBar,
  Text,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import * as fromBody from '../bodyComponent/index';
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

        <HStack space="3">
          <Menu
            w="190"
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}>
                  <Icon name={'angle-down'} size={30} />
                </Pressable>
              );
            }}>
            <Menu.Item onPress={() => {}} style={styles.menuItem}>
              Delete All
              <Icon name={'trash-o'} size={20} />
            </Menu.Item>
            <Menu.Item style={styles.menuItem} isDisabled>
              Undo Task
              <Icon name={'repeat'} size={20} />
            </Menu.Item>
            <Menu.Item style={styles.menuItem} isDisabled>
              Archive
              <Icon name={'archive'} size={20} />
            </Menu.Item>
          </Menu>
        </HStack>
      </HStack>
    </>
  );
};
const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default HeaderComponent;
