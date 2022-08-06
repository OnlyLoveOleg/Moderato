import { render, screen } from '@testing-library/react';
import { H2 } from '@/components/atoms/heading';
import { screenShot } from '@/tests/util';

describe('Heading H2 test.', () => {
  test('Check H2 view', () => {
    render(<H2 text='naohito-T' size='32px' />);
    expect(screen.getByText('naohito-T'));
  });

  test('Check snapshot', () => {
    const tree = screenShot(<H2 text='naohito-T' size='32px' />);
    expect(tree).toMatchSnapshot();
  });
});
