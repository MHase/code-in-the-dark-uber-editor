import React from 'react';
import { render } from '@testing-library/react';

import Form from './';

describe('View | Form', () => {
  it('matches the snapshot', () => {
    const container = render(<Form />);
    expect(container).toMatchSnapshot();
  });
});
