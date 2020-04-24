import * as React from 'react';
import { render } from '@testing-library/react';
import { HeaderComponent } from './header.component';

describe('common/table/HeaderComponent', () => {
  it('should be rendered as expected passing required properties', () => {
    // Arrange
    const props = {
      columns: ['Test label'],
    };

    // Act
    const { getByText } = render(<HeaderComponent {...props} />);

    // Assert
    expect(getByText(props.columns[0])).toBeInTheDocument();
  });

  it('should be rendered as expected passing required and optional properties', () => {
    // Arrange
    const props = {
      columns: ['Test label'],
    };

    // Act
    const { getByText } = render(<HeaderComponent {...props} />);

    // Assert
    expect(getByText(props.columns[0])).toBeInTheDocument();
  });

  it('should render two columns passing two columns', () => {
    // Arrange
    const props = {
      columns: ['Test label1', 'Test label2'],
    };

    // Act
    const { getByText } = render(<HeaderComponent {...props} />);

    // Assert
    expect(getByText(props.columns[0])).toBeInTheDocument();
    expect(getByText(props.columns[1])).toBeInTheDocument();
  });
});
