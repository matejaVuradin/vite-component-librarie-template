import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('when rendered with  prop', () => {
  it('should render the sending waves button', () => {
    render(<Button label={'test_button'} />);

    expect(screen.getByText('test_button')).toBeInTheDocument();
  });
});
