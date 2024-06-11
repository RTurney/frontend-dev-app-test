import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'styled-components';
import { BookIcon } from './Icons/BookIcon';
import { DotIcon } from './Icons/DotIcon';
import { subTextProps } from '@/interfaces/subTextProps';

const SubContainer = styled(View)`
  padding: 5px;
  flex-direction: row;
  align-self: left;
`

const TextContainer = styled(View)`
  padding: 3px;
  justify-content: center;
`

const TypeText = styled(Text)`
  letter-spacing: 0.5px;
`

export const SubTextContainer: FC<subTextProps> = ({type, duration, hasAssessment}) => {

  const capitalise = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <SubContainer>
      <BookIcon />
      <TextContainer>
        <TypeText>{capitalise(type)}</TypeText>
      </TextContainer>
      <DotIcon />
      <TextContainer>
        <TypeText>{duration}</TypeText>
      </TextContainer>
      {hasAssessment ? 
      <>
        <DotIcon />
        <TextContainer>
          <TypeText>Assessment Required</TypeText>
        </TextContainer>
      </> : null}
    </SubContainer>
  )
}