import React, {FC} from 'react';
import { Text, Image, View } from 'react-native';
import { pathwayData } from '@/interfaces/pathwayData';
import { styled } from 'styled-components';
import Svg, {Circle} from 'react-native-svg';

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
  justify-content: center;
`

export const Card: FC<cardProps> = ({data}) => {
  
  return (
    <CardContainer>
      <PathwayImage source={data.image ? {uri: data.image} : undefined}/>
      <SubContainer>
        <IconContainer>
          <Icon source={require('../assets/icons8-book-50.png')}/>
        </IconContainer>
        <TypeContainer>
          <Text>{data.type}</Text>
        </TypeContainer>
        <DotIconContainer>
          <DotIcon source={require('../assets/circle-grey.png')}/>
        </DotIconContainer>
        <DurationContainer>
          <Text>{data.duration}</Text>
        </DurationContainer>
      </SubContainer>
      <TitleText>{data.title}</TitleText>
      <Text>{data.intro}</Text>
      <Text>url: {data.url}</Text>
    </CardContainer>
  )
}