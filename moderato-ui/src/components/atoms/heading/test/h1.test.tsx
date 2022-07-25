import { render, screen } from '@testing-library/react';
import { H1 } from '@/components/atoms/heading';
import { screenShot } from '@/tests/util';

describe('Heading H1 test', () => {
  test('Check H1 view', () => {
    render(<H1 text='naohito-T' size='48px' />);
    expect(screen.getByText('naohito-T'));
  });

  test('Check snapshot', () => {
    const tree = screenShot(<H1 text='naohito-T' size='48px' />);
    expect(tree).toMatchSnapshot();
  });
});
