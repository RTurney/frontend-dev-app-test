import { render } from '@testing-library/react-native';
import { LoadingScreen } from '../LoadingScreen';

describe('Loading Screen component', () => {
  it('renders with loading screen text', () => {
    //Arrange 
    const {getByText} = render(<LoadingScreen />);

    //Assert 
    expect(getByText('Loading Pathways...')).toBeTruthy();
  })
})