import React, {FC} from 'react';
import { Text, Image, View } from 'react-native';
import { pathwayData } from '@/interfaces/pathwayData';
import { styled } from 'styled-components';
import { SubTextContainer } from './SubTextContainer';

type cardProps = {
  data: pathwayData
}

const PathwayImage = styled(Image)`
  height: 200px;
  width: 100%;
  border-radius: 20%; 
`

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

const ImageContainer = styled(View)`
  height: 20vh;
  box-shadow: 0px 2px 2px grey;
  padding: 5px;
`

export const Card: FC<cardProps> = ({data}) => {
  
  return (
    <CardContainer>
      <ImageContainer>
        <PathwayImage source={data.image ? {uri: data.image} : undefined}/>
      </ImageContainer>
      <SubTextContainer type={data.type} duration={data.duration}/>
      <TitleText>{data.title}</TitleText>
      <Text>{data.intro}</Text>
      <Text>url: {data.url}</Text>
    </CardContainer>
  )
}