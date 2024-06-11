import { View, Image } from 'react-native';
import { styled } from 'styled-components';

const Icon = styled(Image)`
  height: 20px;
  width: 20px;
  opacity: 0.5;
`

const BookIconContainer = styled(View)`
  padding-right: 5px; 
`

export const BookIcon = () => {

  return (
    <BookIconContainer>
      <Icon source={require('../../assets/icons8-book-black-50.png')}/>
    </BookIconContainer>
  )
}