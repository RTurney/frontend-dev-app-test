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
  display: flex;
  align-items: center;
  padding: 10%;
  width: 100%;
`

const TitleText = styled(Text)`
  fontSize: 20px;
  fontWeight: bold;
  color: purple;
  align-self: left;
  padding: 10px;
`
export const Card: FC<cardProps> = ({data}) => {
  
  return (
    <CardContainer>
      <PathwayImage source={data.image ? {uri: data.image} : undefined}/>
      <SubTextContainer type={data.type} duration={data.duration}/>
      <TitleText>{data.title}</TitleText>
      <Text>{data.intro}</Text>
      <Text>url: {data.url}</Text>
    </CardContainer>
  )
}