import { render } from '@testing-library/react-native';
import { Card } from '../Card';
import { cardProps } from '@/interfaces/cardProps';

describe('Loading Screen component', () => {
  let data: cardProps;

  beforeEach(() => {
    data = {
      title: 'Pathway 1',
      url: 'www.pathways.com',
      intro: 'I am an intro',
      duration: 'forever',
      image: 'imageUrl',
      type: 'pathway',
      hasAssessment: false
    }
  })
  it.each([
    ['title', 'Pathway 1'],
    ['intro', 'I am an intro'],
    ['duration', 'forever'],
    ['type', 'Pathway']
  ])('renders %s with %s', (title, expected) => {
    //Arrange 
    const {getByText} = render(
    <Card 
      title={data.title}
      url={data.url}
      duration={data.duration}
      intro={data.intro}
      image={data.image}
      type={data.type}
      hasAssessment={data.hasAssessment} />);

    //Assert 
    expect(getByText(expected)).toBeTruthy();
  })
})