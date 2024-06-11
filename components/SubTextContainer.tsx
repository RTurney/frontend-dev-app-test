import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'styled-components';
import { BookIcon } from './Icons/BookIcon';
import { DotIcon } from './Icons/DotIcon';

type subTextProps = {
  type: string,
  duration: string
}

const SubContainer = styled(View)`
  padding: 5px;
  flex-direction: row;
  align-self: left;
`

const TypeContainer = styled(View)`
  padding: 3px;
  justify-content: center;
`

const TypeText = styled(Text)`
  letter-spacing: 0.5pt;
`

const DurationContainer = styled(View)`
  padding: 3px;
  justify-content: center;
`

export const SubTextContainer: FC<subTextProps> = ({type, duration}) => {

  const capitalise = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <SubContainer>
      <BookIcon />
      <TypeContainer>
        <TypeText>{capitalise(type)}</TypeText>
      </TypeContainer>
      <DotIcon />
      <DurationContainer>
        <Text>{duration}</Text>
      </DurationContainer>
    </SubContainer>
  )
}