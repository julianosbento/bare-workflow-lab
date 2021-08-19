import React from "react";
import { Button } from 'react-native';

import useCounter from "../../hooks/use-counter";

import * as S from "./styles";

interface CounterProps {}

function Counter({}: CounterProps) {
  const { counter, onAdd, onSubtract } = useCounter({ initialCounter: 10 });

  return (
    <S.Container>
      <S.Counter>{counter}</S.Counter>

      <Button accessibilityLabel="Pressione para somar um do contador" onPress={onAdd} title="somar" testID="components.counter.add-button" />
      <Button accessibilityLabel="Pressione para subtrair um do contador" onPress={onSubtract} title="subtrair" />
    </S.Container>
  );
}

export default Counter;
