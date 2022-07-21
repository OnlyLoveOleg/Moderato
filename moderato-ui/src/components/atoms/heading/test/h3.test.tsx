import { render, screen } from '@testing-library/react';
import { H3 } from '@/components/atoms/heading';
import { screenShot } from '@/tests/helper';

describe('Heading H1 test', () => {
  test('Check H1 view', () => {
    render(<H3 text='naohito-T' size='24px' />);
    expect(screen.getByText('naohito-T'));
  });

  test('Check snapshot', () => {
    const tree = screenShot(<H3 text='naohito-T' size='24px' />);
    expect(tree).toMatchSnapshot();
  });
});
