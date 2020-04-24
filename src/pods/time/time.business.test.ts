import {
  replaceAssignmentInProject,
  calculateCounter,
  getCountersFromProject,
} from './time.business';
import * as VM from './time.vm';

describe('replaceAssignmentInProject =>', () => {
  const testProject: VM.Project = {
    name: 'testProject',
    assignments: [
      { date: '1', hours: '1' },
      { date: '2', hours: '2' },
    ],
  };

  it('should return null when pass a null project', () => {
    // Act
    const result = replaceAssignmentInProject(null, null, null);

    // Assert
    expect(result).toEqual(null);
  });

  it('should return the same project when pass a null name project', () => {
    // Arrange
    const expectedProject: VM.Project = {
      name: 'testProject',
      assignments: [
        { date: '1', hours: '1' },
        { date: '2', hours: '2' },
      ],
    };

    // Act
    const result = replaceAssignmentInProject(testProject, null, null);

    // Assert
    expect(result).toEqual(expectedProject);
  });

  it('should return the same project when pass a distinct name project', () => {
    // Arrange
    const expectedProject: VM.Project = {
      name: 'testProject',
      assignments: [
        { date: '1', hours: '1' },
        { date: '2', hours: '2' },
      ],
    };

    // Act
    const result = replaceAssignmentInProject(
      testProject,
      'irrelevantName',
      null
    );

    // Assert
    expect(result).toEqual(expectedProject);
  });

  it('should return the same project when pass a same name project and a null assignment', () => {
    // Arrange
    const expectedProject: VM.Project = {
      name: 'testProject',
      assignments: [
        { date: '1', hours: '1' },
        { date: '2', hours: '2' },
      ],
    };

    // Act
    const result = replaceAssignmentInProject(
      testProject,
      testProject.name,
      null
    );

    // Assert
    expect(result).toEqual(expectedProject);
  });

  it('should return the same project when pass a same name project and a distinct assignment', () => {
    // Arrange
    const expectedProject: VM.Project = {
      name: 'testProject',
      assignments: [
        { date: '1', hours: '1' },
        { date: '2', hours: '2' },
      ],
    };

    // Act
    const result = replaceAssignmentInProject(testProject, testProject.name, {
      date: 'irrelevantDate',
      hours: '0',
    });
    // Assert
    expect(result).toEqual(expectedProject);
  });

  it('should return the same project with updated assignments when pass a same name project and a same assignment', () => {
    // Arrange
    const expectedProject: VM.Project = {
      name: 'testProject',
      assignments: [
        { date: '1', hours: '8' },
        { date: '2', hours: '2' },
      ],
    };

    // Act
    const result = replaceAssignmentInProject(testProject, testProject.name, {
      date: '1',
      hours: '8',
    });

    // Assert
    expect(result).toEqual(expectedProject);
  });
});

describe('calculateCounter =>', () => {
  it('Should return 00:00 as time when pass an empty projects', () => {
    // Arrange
    const date = '';
    const projects: VM.Project[] = [];

    const expectedCounter: VM.Counter = {
      date: '',
      hours: '00:00',
    };
    // Act
    const result = calculateCounter(date, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });

  it('Should return 00:00 as time when pass an empty assignments', () => {
    // Arrange
    const date = '';
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [],
      },
    ];

    const expectedCounter: VM.Counter = {
      date: '',
      hours: '00:00',
    };
    // Act
    const result = calculateCounter(date, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });

  it('Should return a same date passed and 00:00 as time when pass an empty assignments and a valid date', () => {
    // Arrange
    const date = '1';
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [],
      },
    ];

    const expectedCounter: VM.Counter = {
      date: '1',
      hours: '00:00',
    };
    // Act
    const result = calculateCounter(date, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });

  it('Should return a valid counter when pass a valid projects', () => {
    // Arrange
    const date = '1';
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [
          { date: '1', hours: '00:59' },
          { date: '2', hours: '00:30' },
        ],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [
          { date: '1', hours: '04:01' },
          { date: '2', hours: '00:30' },
        ],
      },
    ];

    const expectedCounter: VM.Counter = {
      date: '1',
      hours: '05:00',
    };
    // Act
    const result = calculateCounter(date, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });
});

describe('getCountersFromProject =>', () => {
  it('Should return an empty list of counters when pass an empty dates', () => {
    // Arrange
    const dates = [];
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [
          { date: '1', hours: '00:59' },
          { date: '2', hours: '00:30' },
        ],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [
          { date: '1', hours: '04:01' },
          { date: '2', hours: '00:30' },
        ],
      },
    ];

    const expectedCounter: VM.Counter[] = [];
    // Act
    const result = getCountersFromProject(dates, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });

  it('Should return a valid list of counters when pass a valid dates', () => {
    // Arrange
    const dates = ['1'];
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [
          { date: '1', hours: '00:59' },
          { date: '2', hours: '00:30' },
        ],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [
          { date: '1', hours: '04:01' },
          { date: '2', hours: '00:30' },
        ],
      },
    ];

    const expectedCounter: VM.Counter[] = [{ date: '1', hours: '05:00' }];
    // Act
    const result = getCountersFromProject(dates, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });

  it('Should return a valid list of counters when pass a valid dates', () => {
    // Arrange
    const dates = ['1', '4'];
    const projects: VM.Project[] = [
      {
        name: 'Irrelevant name 1',
        assignments: [
          { date: '1', hours: '00:59' },
          { date: '2', hours: '00:30' },
          { date: '3', hours: '00:00' },
          { date: '4', hours: '00:30' },
        ],
      },
      {
        name: 'Irrelevant name 2',
        assignments: [
          { date: '1', hours: '04:01' },
          { date: '2', hours: '00:30' },
          { date: '3', hours: '01:00' },
          { date: '4', hours: '02:50' },
        ],
      },
    ];

    const expectedCounter: VM.Counter[] = [
      { date: '1', hours: '05:00' },
      { date: '4', hours: '03:20' },
    ];
    // Act
    const result = getCountersFromProject(dates, projects);
    // Assert
    expect(result).toEqual(expectedCounter);
  });
});
