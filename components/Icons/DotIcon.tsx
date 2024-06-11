import { View, Image } from "react-native";
import { styled } from "styled-components";

const Icon = styled(Image)`
  height: 3px;
  width: 3px;
`

const DotIconContainer = styled(View)`
  padding: 3px;
  justify-content: center
`
export const DotIcon = () => {

  return (
    <DotIconContainer>
      <Icon source={require('../../assets/circle-grey.png')}/>
    </DotIconContainer>
  )
}