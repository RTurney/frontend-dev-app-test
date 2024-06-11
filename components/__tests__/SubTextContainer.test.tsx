import { render } from '@testing-library/react-native';
import { subTextProps } from '@/interfaces/subTextProps';
import { SubTextContainer } from '../SubTextContainer';

describe('SubTextContainer', () => {
  let data: subTextProps;

  beforeEach(() => {
    data = {
      type: 'pathway',
      duration: '10 mins',
      hasAssessment: false
    }
  });
  it('renders correctly with data present', () => {
    //Arrange 
    const {getByText} = render(
    <SubTextContainer 
      type={data.type} 
      duration={data.duration}
      hasAssessment={data.hasAssessment}  />)

    //Assert
    expect(getByText('Pathway')).toBeTruthy();
    expect(getByText('10 mins')).toBeTruthy();
  });

  it('capitalises the data type passed into it', () => {
    //Arrange 
    const {queryByText} = render(
    <SubTextContainer 
      type={data.type} 
      duration={data.duration}
      hasAssessment={data.hasAssessment}  />);
    
      //Assert
      expect(queryByText('Pathway')).toBeTruthy();
      expect(queryByText('pathway')).toBeFalsy();
  });

  it('does not display the assessment text if no assessment required', () => {
    //Arrange
    const {queryByText} = render(
      <SubTextContainer 
        type={data.type} 
        duration={data.duration}
        hasAssessment={data.hasAssessment}  />);

    //Assert
    expect(queryByText('Assessment Required')).toBeFalsy();
  });
  
  it('displays the assessment text if an assessment is required', () => {
    //Arrange
    const newData: subTextProps = {
      type: 'pathway',
      duration: '10 mins',
      hasAssessment: true
    }

    const {queryByText} = render(
      <SubTextContainer 
        type={newData.type} 
        duration={newData.duration}
        hasAssessment={newData.hasAssessment}  />);

    //Assert
    expect(queryByText('Assessment Required')).toBeTruthy();
  });  
})