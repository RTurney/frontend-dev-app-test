import React, {FC} from 'react';
import { View, Image } from 'react-native';
import { styled } from 'styled-components';

const ImageContainer = styled(View)`
  height: 20vh;
  box-shadow: 0px 2px 2px grey;
  padding: 5px;
`

const DisplayedImage = styled(Image)`
  height: 200px;
  width: 100%;
  border-radius: 20%; 
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
      accessibilityLabel={accessibilityLabel + ' thumbnail'}/>
    </ImageContainer>
  )
}