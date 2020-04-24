import * as React from 'react';
import { render } from '@testing-library/react';
import { BodyComponent } from './body.component';
import { RowComponent } from 'common/components';
import { CellComponent } from './cell.component';

describe('common/table/BodyComponent', () => {
  it('should render as expected passing props without rowRenderer', () => {
    // Arrange
    const props = {
      rows: [{ testRow: 1 }, { testRow: 2 }, { testRow: 3 }],
    };

    // Act
    const { getByText } = render(<BodyComponent {...props} />);

    // Assert
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
  });

  it('should render as expected passing props and rowRenderer', () => {
    // Arrange
    const TestRowComponent: React.FunctionComponent = () => (
      <RowComponent>
        <CellComponent>Test cell</CellComponent>
      </RowComponent>
    );

    const props = {
      rows: [{ testRow: 1 }, { testRow: 2 }, { testRow: 3 }],
      rowRenderer: TestRowComponent,
    };

    // Act
    const { getAllByText } = render(<BodyComponent {...props} />);

    // Assert
    expect(getAllByText('Test cell').length).toEqual(3);
  });
});
