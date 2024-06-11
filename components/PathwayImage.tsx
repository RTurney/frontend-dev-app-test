import React, {FC} from 'react';
import { View, Image } from 'react-native';
import { styled } from 'styled-components';

const ImageContainer = styled(View)`
  box-shadow: 0px 2px 2px grey;
  padding: 5px;
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
    <ImageContainer>
      <DisplayedImage 
      source={imageUri ? {uri: imageUri} : undefined} 
      accessibilityLabel={accessibilityLabel + ' thumbnail'}
      style={[{borderRadius: 20}]}/>
    </ImageContainer>
  )
}