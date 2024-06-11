import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { styled } from 'styled-components';
import { SubTextContainer } from './SubTextContainer';
import { PathwayImage } from './PathwayImage';
import { URLText } from './UrlText';

type cardProps = {
  title: string
  url: string,
  intro: string, 
  duration: string, 
  image: string, 
  type: string,
  hasAssessment: boolean;
}

const CardContainer = styled(View)`
  padding: 2%;
  width: 95vw;
  background-color: white;
  border-radius: 20%;
  margin: 2%;
`

const TitleText = styled(Text)`
  fontSize: 20pts;
  fontWeight: bold;
  color: purple;
  align-self: left;
  padding: 5px;
  letter-spacing: 1pt;
`

const Descriptiontext = styled(Text)`
  font-size: 16pts;
  padding: 5px;
  line-height: 20pt;
  letter-spacing: 1pt;
`

export const Card: FC<cardProps> = ({title, image, type, intro, duration, url, hasAssessment}) => {
  
  return (
    <CardContainer>
      <PathwayImage imageUri={image} />
      <SubTextContainer type={type} duration={duration} hasAssessment={hasAssessment}/>
      <TitleText>{title}</TitleText>
      <Descriptiontext>{intro}</Descriptiontext>
      <URLText url={url} />
    </CardContainer>
  )
}