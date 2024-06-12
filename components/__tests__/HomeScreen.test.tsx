import { render, waitFor } from "@testing-library/react-native";
import { HomeScreen } from "../Screens/HomeScreen";
import fetchMock from 'fetch-mock';

describe('HomeScreen ', () => {

  beforeEach(() => {
    fetchMock.reset();
  })
  it('displays the loading screen if no data is present', () => {
    //Arrange
    fetchMock.mock('https://blackbullion.com/api/_dev/pathways', [
      {
      "id": -1,
      "title": "",
      "internal_title": "",
      "url": "",
      "intro": "", 
      "duration": "", 
      "image": "", 
      "type": "",
      "has_summative_assessment": false
    }])
    const {getByText} = render(<HomeScreen />)

    //Assert
    expect(getByText('Loading Pathways...')).toBeTruthy();
  });

  it('displays a the pathways screen if data is present', async () => {
    //Arrange
    fetchMock.mock('https://blackbullion.com/api/_dev/pathways', [
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
      }]);

      const {getByText} = render(<HomeScreen />)

      //Assert
      await waitFor(() => expect(getByText('Starting University')).toBeTruthy());
  })
})