import { render } from '@testing-library/react-native';
import { Pathways } from '../Pathways';
import { pathwayData } from '@/interfaces/pathwayData';

describe('Pathways component', () => {
  let data: pathwayData[];

  beforeEach(() => {
    data = [
      {
        "id": 24,
        "title": "Starting University",
        "internal_title": "Starting University",
        "url": "https://www.blackbullion.com/pathways/starting-university-uk",
        "intro": "Learn what funding is available when you start uni and how you can get the best out of it.",
        "duration": "11 min",
        "image": "https://prodcontent.blackbullion.com/images/pathways/24/thumb",
        "type": "pathway",
        "has_summative_assessment": true
      },
      {
        "id": 25,
        "title": "21 Days of Savings",
        "internal_title": "21 Days of Savings",
        "url": "https://www.blackbullion.com/pathways/21-day-money-bootcamp",
        "intro": "Get your finances in shape for the academic year with some quick, long-lasting changes.",
        "duration": "21 min",
        "image": "https://prodcontent.blackbullion.com/images/pathways/25/thumb",
        "type": "pathway",
        "has_summative_assessment": false
      }
    ]
  })
  it('Renders all displayed fields from the data', () => {
    //Arrange 
    const {queryByText, queryAllByText, queryAllByAccessibilityHint} = render(<Pathways data={data} />)

    // Assert
    expect(queryByText('Starting University')).toBeTruthy();
    expect(queryByText('Learn what funding is available when you start uni and how you can get the best out of it.')).toBeTruthy();
    expect(queryByText('11 min')).toBeTruthy();
    expect(queryAllByAccessibilityHint('Press to view this pathway')).toBeTruthy();
    expect(queryAllByText('Pathway')).toBeTruthy();
    expect(queryByText('Assessment Required')).toBeTruthy();
  });

  it('renders multiple cards for multiple pathways', () => {
    //Arrange 

    const {queryByText} = render(<Pathways data={data} />)

    //Assert
    expect(queryByText('Starting University')).toBeTruthy();
    expect(queryByText('21 Days of Savings')).toBeTruthy();
  })
})