import {
  mapProjectFromApiToVm,
  mapProjectFromVmToApi,
  mapProjectEmployeeListFromVmToApi,
} from './project.mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mappers', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return empty project when feeding null value', () => {
      // Arrange
      const project = null;
      const employees = null;

      // Act
      const result = mapProjectFromApiToVm(project, employees);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return empty project when feeding undefined value', () => {
      // Arrange
      const project = undefined;
      const employees = undefined;

      // Act
      const result = mapProjectFromApiToVm(project, employees);

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return expected result but feeding null employee list', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: null,
      };

      const employees: apiModel.Employee[] = [
        {
          id: '1',
          name: 'employee test 1',
        },
        {
          id: '2',
          name: 'employee test 2',
        },
      ];

      const expectedResult: viewModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [
          {
            id: '1',
            name: 'employee test 1',
            isAssigned: false,
          },
          {
            id: '2',
            name: 'employee test 2',
            isAssigned: false,
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(project, employees);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return expected result but feeding undefined employee list', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: undefined,
      };

      const expectedResult: viewModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [
          {
            id: '1',
            name: 'employee test 1',
            isAssigned: false,
          },
          {
            id: '2',
            name: 'employee test 2',
            isAssigned: false,
          },
        ],
      };

      const employees: apiModel.Employee[] = [
        {
          id: '1',
          name: 'employee test 1',
        },
        {
          id: '2',
          name: 'employee test 2',
        },
      ];

      // Act
      const result = mapProjectFromApiToVm(project, employees);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should return expected result feeding correct values', () => {
      // Arrange
      const project: apiModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [
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

      const employees: apiModel.Employee[] = [
        {
          id: '1',
          name: 'employee test 1',
        },
        {
          id: '2',
          name: 'employee test 2',
        },
      ];

      const expectedResult: viewModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [
          {
            id: '1',
            isAssigned: true,
            name: 'employee test 1',
          },
          {
            id: '2',
            isAssigned: false,
            name: 'employee test 2',
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(project, employees);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('mapProjectFromVmToApi', () => {
    it('should return empty project when feeding null', () => {
      // Arrange
      const project = null;

      // Act
      const result = mapProjectFromVmToApi(project);

      //Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return empty project when feeding undefined', () => {
      // Arrange
      const project = undefined;

      // Act
      const result = mapProjectFromVmToApi(project);

      //Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return expected value when feeding employee, and empty employee list', () => {
      // Arrange
      const project: viewModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [],
      };

      const expectedValue: apiModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
      };

      // Act
      const result = mapProjectFromVmToApi(project);

      //Assert
      expect(result).toEqual(expectedValue);
    });

    it('should return expected value when feeding project, and employee list', () => {
      // Arrange
      const project: viewModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
        employees: [
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

      const expectedValue: apiModel.Project = {
        id: 'test id',
        name: 'test name',
        isActive: true,
        comments: 'Test comments',
        externalId: '123',
      };

      // Act
      const result = mapProjectFromVmToApi(project);

      //Assert
      expect(result).toEqual(expectedValue);
    });
  });

  describe('mapProjectEmployeeListFromVmToApi', () => {
    it('should return empty array when feeding project employee null', () => {
      // Arrange
      const projectEmployeeList = null;

      // Act
      const result = mapProjectEmployeeListFromVmToApi(projectEmployeeList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when feeding project employee undefined', () => {
      // Arrange
      const projectEmployeeList = undefined;

      // Act
      const result = mapProjectEmployeeListFromVmToApi(projectEmployeeList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when feeding project employee empty array', () => {
      // Arrange
      const projectEmployeeList = [];

      // Act
      const result = mapProjectEmployeeListFromVmToApi(projectEmployeeList);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return expected result when feeding project employee list', () => {
      // Arrange
      const projectEmployeeList: viewModel.ProjectEmployee[] = [
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

      const expectedResult: apiModel.ProjectEmployee[] = [
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
      const result = mapProjectEmployeeListFromVmToApi(projectEmployeeList);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
