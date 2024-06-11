import { View, Image } from 'react-native';
import { styled } from 'styled-components';

const Icon = styled(Image)`
  height: 20px;
  width: 20px;
`
const ArrowIconContainer = styled(View)`
  padding-left: 2vw;
  align-self: center;
`
export const ArrowIcon = () => {

  return (
    <ArrowIconContainer>
      <Icon source={require('../../assets/icons8-right-arrow-50.png')}/>
    </ArrowIconContainer>
  )
}