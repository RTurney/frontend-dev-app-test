import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { styled } from 'styled-components';
import { SubTextContainer } from './SubTextContainer';
import { PathwayImage } from './PathwayImage';

type cardProps = {
  title: string
  url: string,
  intro: string, 
  duration: string, 
  image: string, 
  type: string,
}

const CardContainer = styled(View)`
  padding: 2%;
  width: 95vw;
  background-color: white;
  border-radius: 20%;
  margin: 2%;
`

const TitleText = styled(Text)`
  fontSize: 20px;
  fontWeight: bold;
  color: purple;
  align-self: left;
  padding: 5px;
`

export const Card: FC<cardProps> = ({title, image, type, intro, duration, url}) => {
  
  return (
    <CardContainer>
      <PathwayImage imageUri={image} />
      <SubTextContainer type={type} duration={duration}/>
      <TitleText>{title}</TitleText>
      <Text>{intro}</Text>
      <Text>url: {url}</Text>
    </CardContainer>
  )
}