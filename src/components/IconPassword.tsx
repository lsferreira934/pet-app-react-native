import { useTheme, VStack, Box, Button, Icon, IconButton } from 'native-base';
import { Eye, EyeClosed } from 'phosphor-react-native';
import React, { useState } from 'react';
import { GestureResponderEvent } from 'react-native';

type props = {
    show: boolean;
    tooglePassword?: () => void;
}

export function IconPassword({ show, tooglePassword, ...rest }: props) {
    const { colors } = useTheme();

    function handleTooglePassword() {
        tooglePassword()
    }

    return (
        <IconButton
            onPress={handleTooglePassword}
            icon={<Icon as={show ? <Eye color={colors.muted[400]} /> : <EyeClosed color={colors.muted[400]} />} />}
            _pressed={{
                bg: "transparent",

            }}
            {...rest}
        />
    );
}


