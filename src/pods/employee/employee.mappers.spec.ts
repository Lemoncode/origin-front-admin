import { mapEmployeeFromApiToVm } from './employee.mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

describe('./pods/employee/employee.mappers', () => {
  it('should return empty employee when feeding null value', () => {
    // Arrange
    const employee = null;
    const projects = null;

    // Act
    const result = mapEmployeeFromApiToVm(employee, projects);

    // Assert
    expect(result).toEqual(viewModel.createEmptyEmployee());
  });

  it('should return empty employee when feeding undefined value', () => {
    // Arrange
    const employee = undefined;
    const projects = undefined;

    // Act
    const result = mapEmployeeFromApiToVm(employee, projects);

    // Assert
    expect(result).toEqual(viewModel.createEmptyEmployee());
  });

  it('should return expected result but feeding null project list', () => {
    // Arrange
    const employee: apiModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: null,
    };

    const projects: apiModel.Project[] = [
      {
        id: '1',
        name: 'project test 1',
      },
      {
        id: '2',
        name: 'project test 2',
      },
    ];

    const expectedResult: viewModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: [
        {
          id: '1',
          name: 'project test 1',
          isAssigned: false,
        },
        {
          id: '2',
          name: 'project test 2',
          isAssigned: false,
        },
      ],
    };

    // Act
    const result = mapEmployeeFromApiToVm(employee, projects);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result but feeding undefined project list', () => {
    // Arrange
    const employee: apiModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: undefined,
    };

    const expectedResult: viewModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: [
        {
          id: '1',
          name: 'project test 1',
          isAssigned: false,
        },
        {
          id: '2',
          name: 'project test 2',
          isAssigned: false,
        },
      ],
    };

    const projects: apiModel.Project[] = [
      {
        id: '1',
        name: 'project test 1',
      },
      {
        id: '2',
        name: 'project test 2',
      },
    ];

    // Act
    const result = mapEmployeeFromApiToVm(employee, projects);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const employee: apiModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: [
        {
          id: '1',
          isAssigned: true,
        },
        {
          id: '2',
          isAssigned: false,
        },
      ],
    };

    const projects: apiModel.Project[] = [
      {
        id: '1',
        name: 'project test 1',
      },
      {
        id: '2',
        name: 'project test 2',
      },
    ];

    const expectedResult: viewModel.Employee = {
      id: 'test id',
      name: 'test name',
      email: 'test@email.com',
      isActive: true,
      temporalPassword: 'test password',
      projects: [
        {
          id: '1',
          isAssigned: true,
          name: 'project test 1',
        },
        {
          id: '2',
          isAssigned: false,
          name: 'project test 2',
        },
      ],
    };

    // Act
    const result = mapEmployeeFromApiToVm(employee, projects);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
