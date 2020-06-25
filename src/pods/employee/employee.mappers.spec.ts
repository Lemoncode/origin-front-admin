import {
  mapEmployeeFromApiToVm,
  mapEmployeeFromVmToApi,
  mapEmployeeProjectListFromVmToApi,
} from './employee.mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

describe('./pods/employee/employee.mappers', () => {
  describe('mapEmployeeFromApiToVm', () => {
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

  describe('mapEmployeeFromVmToApi', () => {
    it('should return empty employee when feeding null', () => {
      // Arrange
      const employee = null;

      // Act
      const result = mapEmployeeFromVmToApi(employee);

      //Assert
      expect(result).toEqual(viewModel.createEmptyEmployee());
    });

    it('should return empty employee when feeding undefined', () => {
      // Arrange
      const employee = undefined;

      // Act
      const result = mapEmployeeFromVmToApi(employee);

      //Assert
      expect(result).toEqual(viewModel.createEmptyEmployee());
    });

    it('should return expected value when feeding employee, and empty project list', () => {
      // Arrange
      const employee: viewModel.Employee = {
        id: '1',
        isActive: true,
        name: 'test name',
        email: 'test@email.com',
        temporalPassword: 'test',
        projects: [],
      };

      const expectedValue: apiModel.Employee = {
        id: '1',
        isActive: true,
        name: 'test name',
        email: 'test@email.com',
        temporalPassword: 'test',
      };

      // Act
      const result = mapEmployeeFromVmToApi(employee);

      //Assert
      expect(result).toEqual(expectedValue);
    });

    it('should return expected value when feeding employee, and project list', () => {
      // Arrange
      const employee: viewModel.Employee = {
        id: '1',
        isActive: true,
        name: 'test name',
        email: 'test@email.com',
        temporalPassword: 'test',
        projects: [
          {
            id: '1',
            isAssigned: true,
            name: 'test name',
          },
          {
            id: '2',
            isAssigned: false,
            name: 'test name',
          },
        ],
      };

      const expectedValue: apiModel.Employee = {
        id: '1',
        isActive: true,
        name: 'test name',
        email: 'test@email.com',
        temporalPassword: 'test',
      };

      // Act
      const result = mapEmployeeFromVmToApi(employee);

      //Assert
      expect(result).toEqual(expectedValue);
    });
  });

  describe('mapEmployeeProjectListFromVmToApi', () => {
    it('should return emtpy array when feeding employee project null', () => {
      // Arrange
      const employeeProjectList = null;

      // Act
      const result = mapEmployeeProjectListFromVmToApi(employeeProjectList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return emtpy array when feeding employee project undefined', () => {
      // Arrange
      const employeeProjectList = undefined;

      // Act
      const result = mapEmployeeProjectListFromVmToApi(employeeProjectList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return emtpy array when feeding employee project empty array', () => {
      // Arrange
      const employeeProjectList = [];

      // Act
      const result = mapEmployeeProjectListFromVmToApi(employeeProjectList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return expected result when feeding employee project list', () => {
      // Arrange
      const employeeProjectList: viewModel.EmployeeProject[] = [
        {
          id: '1',
          name: 'test name',
          isAssigned: true,
        },
        {
          id: '2',
          name: 'test name',
          isAssigned: false,
        },
      ];

      const expectedResult: apiModel.EmployeeProject[] = [
        {
          id: '1',
          isAssigned: true,
        },
        {
          id: '2',
          isAssigned: false,
        },
      ];

      // Act
      const result = mapEmployeeProjectListFromVmToApi(employeeProjectList);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
