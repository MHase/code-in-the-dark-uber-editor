import React from 'react';
import { render } from '@testing-library/react';

import Form from './';
import StorageProvider from '../../context/storage';

describe('View | Form', () => {
  it('matches the snapshot', () => {
    const container = render(<Form />, { wrapper: StorageProvider });
    expect(container).toMatchSnapshot();
  });
});
