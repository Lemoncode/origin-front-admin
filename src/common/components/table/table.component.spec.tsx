import * as React from 'react';
import { render } from '@testing-library/react';
import { RowComponent } from './components/row.component';
import { TableComponent } from './table.component';

describe('table/TableComponent', () => {
  it('should render as expected passing required properties and only one column', () => {
    // Arrange
    const props = {
      columns: ['Test'],
      rows: ['Test 1', 'Test 2', 'Test 3'],
    };

    // Act
    const { getByText } = render(
      <TableComponent {...props}>{<h1>Not rendered column</h1>}</TableComponent>
    );

    // Assert
    expect(getByText(props.columns[0])).toBeInTheDocument();
  });

  it('should render as expected passing required properties and two columns', () => {
    // Arrange
    const props = {
      columns: ['Test1', 'Test2'],
      rows: ['Test 1', 'Test 2', 'Test 3'],
    };

    // Act
    const { getByText } = render(<TableComponent {...props} />);

    // Assert
    expect(getByText(props.columns[0])).toBeInTheDocument();
    expect(getByText(props.columns[1])).toBeInTheDocument();
  });

  it('should render as expected passing required and optional properties and two columns', () => {
    // Arrange

    const TestRowComponent: React.StatelessComponent = props => (
      <RowComponent {...props}>
        <td>Test 1</td>
        <td>Test 2</td>
      </RowComponent>
    );

    const componentProps = {
      columns: ['Test1', 'Test2'],
      rows: ['Test 1', 'Test 2', 'Test 3'],
      rowRenderer: TestRowComponent,
    };

    // Act
    const { getByText } = render(<TableComponent {...componentProps} />);

    // Assert
    expect(getByText(componentProps.columns[0])).toBeInTheDocument();
    expect(getByText(componentProps.columns[1])).toBeInTheDocument();
  });
});
