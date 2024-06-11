import { FC } from 'react';
import { Text, Linking, Image, View } from 'react-native';
import { styled } from 'styled-components';
import { ArrowIcon } from './Icons/ArrowIcon';

const UrlText = styled(Text)`
  color: purple;
  padding: 10px 5px;
  fontWeight: bold;
`

const UrlLinkContainer = styled(View)`
  display: flex; 
  flex-direction: row;
  justify-content: flex-start;
`

interface URLTextProps {
  url: string
}

export const URLText: FC<URLTextProps> = ({url}) => {
  return (
    <UrlLinkContainer>
      <UrlText onPress={() => Linking.openURL(url)}>
        View pathway
      </UrlText> 
      <ArrowIcon />
    </UrlLinkContainer>
  )
}