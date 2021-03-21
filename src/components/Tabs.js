import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Transition, Transitioning} from 'react-native-reanimated';

import Images from '../assets/images';

const bgColors = {
  home: '#FFE97C',
  directory: '#FFE97C',
  favorite: '#FFE97C',
  account: '#FFE97C',
};

const textColors = {
  home: '#222',
  directory: '#222',
  favorite: '#222',
  account: '#222',
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : 'white')};
  border-radius: 100px;
  margin: 7px;
`;
const Icon = styled.Image`
  height: 22px;
  width: 22px;
`;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-family: 'Poppins-Medium';
  font-size: 13px;
  padding-top:3px;
  font-weight: 600;
  margin-left: 8px;
`;

function Tab({label, accessibilityState, onPress}) {
  const focused = accessibilityState.selected;
  const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;