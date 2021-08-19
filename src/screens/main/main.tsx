import React from "react";

import { Counter } from '../../components/counter';

import * as S from './styles';

interface MainProps {}

function Main({}: MainProps) {
  return (
    <S.Wrapper>
      <Counter />
    </S.Wrapper>
  );
}

export default Main;
