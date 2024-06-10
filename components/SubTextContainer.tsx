import React, {FC} from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'styled-components';

type subTextProps = {
  type: string,
  duration: string
}

const SubContainer = styled(View)`
  padding: 5px;
  flex-direction: row;
  align-self: left;
`
const Icon = styled(Image)`
  height: 20px;
  width: 20px;
`

const IconContainer = styled(View)`
  padding-right: 5px; 
`

const TypeContainer = styled(View)`
  padding: 3px;
  justify-content: center;
`

const DotIcon = styled(Image)`
  height: 5px;
  width: 5px;
`

const DotIconContainer = styled(View)`
  padding: 3px;
  justify-content: center
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
    <IconContainer>
      <Icon source={require('../assets/icons8-book-50.png')}/>
    </IconContainer>
    <TypeContainer>
      <Text>{capitalise(type)}</Text>
    </TypeContainer>
    <DotIconContainer>
      <DotIcon source={require('../assets/circle-grey.png')}/>
    </DotIconContainer>
    <DurationContainer>
      <Text>{duration}</Text>
    </DurationContainer>
  </SubContainer>
  )
}