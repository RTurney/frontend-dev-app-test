import React, {FC} from 'react';
import { Text, View } from 'react-native';
import { styled } from 'styled-components';
import { SubTextContainer } from './SubTextContainer';
import { PathwayImage } from './PathwayImage';
import { URLText } from './UrlText';
import { cardProps } from '@/interfaces/cardProps';

const CardContainer = styled(View)`
  padding: 2%;
  width: 95vw;
  background-color: white;
  margin: 2%;
`

const TitleText = styled(Text)`
  fontSize: 20px;
  fontWeight: bold;
  color: purple;
  align-self: left;
  padding: 5px;
  letter-spacing: 0.5px;
`

const Descriptiontext = styled(Text)`
  font-size: 16px;
  padding: 5px;
  line-height: 20px;
  letter-spacing: 0.5px;
`

export const Card: FC<cardProps> = ({title, image, type, intro, duration, url, hasAssessment}) => {
  
  return (
    <CardContainer style={[{borderRadius: 20}]}>
      <PathwayImage imageUri={image} accessibilityLabel={title}/>
      <SubTextContainer type={type} duration={duration} hasAssessment={hasAssessment}/>
      <TitleText>{title}</TitleText>
      <Descriptiontext>{intro}</Descriptiontext>
      <URLText url={url} />
    </CardContainer>
  )
}