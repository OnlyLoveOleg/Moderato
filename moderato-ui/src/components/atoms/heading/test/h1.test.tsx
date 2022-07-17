import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { H1 } from '@/components/atoms/heading';

describe('Heading H1 test', () => {
  test('Check H1 view', () => {
    render(<H1 text='naohito-T' size='48px' />);
    expect(screen.getByText('naohito-T'));
  });

  test('Check snapshot', () => {
    const component = renderer.create(<H1 text='naohito-T' size='48px' />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
