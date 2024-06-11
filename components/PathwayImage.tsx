import React, {FC} from 'react';
import { View, Image, Platform } from 'react-native';
import { styled } from 'styled-components';

const ImageContainer = styled(View)`
  box-shadow: 0px 2px 2px grey;
  margin: 5px;
  height: 15vh;
`

const DisplayedImage = styled(Image)`
  aspectRatio: 2;
`
interface ImageProps {
  imageUri: string;
  accessibilityLabel: string;
};

export const PathwayImage: FC<ImageProps> = ({imageUri, accessibilityLabel}) => {

  return (
    <ImageContainer style={Platform.OS === 'android' ? {backgroundColor: 'white', elevation: 4, borderRadius: 20, shadowColor: 'black'} : {}}>
      <DisplayedImage 
      source={imageUri ? {uri: imageUri} : undefined} 
      accessibilityLabel={accessibilityLabel + ' thumbnail'}
      style={[{borderRadius: 20}]}/>
    </ImageContainer>
  )
}