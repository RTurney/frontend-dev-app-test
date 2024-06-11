import { FC } from 'react';
import { Text, Linking, TouchableOpacity } from 'react-native';
import { styled } from 'styled-components';
import { ArrowIcon } from './Icons/ArrowIcon';

const UrlText = styled(Text)`
  color: purple;
  padding: 10px 5px;
  fontWeight: bold;
`

const UrlLinkContainer = styled(TouchableOpacity)`
  display: flex; 
  flex-direction: row;
  justify-content: flex-start;
`

interface URLTextProps {
  url: string
}

export const URLText: FC<URLTextProps> = ({url}) => {
  
  return (
    <UrlLinkContainer 
      accessible={true}
      accessibilityLabel='View Pathway'
      accessibilityHint='Press to view this pathway'
      onPress={() => Linking.openURL(url)}>
      <UrlText>
        View pathway
      </UrlText> 
      <ArrowIcon />
    </UrlLinkContainer>
  )
}