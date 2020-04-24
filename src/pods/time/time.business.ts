import * as VM from './time.vm';

const updateAssignment = (
  assignment: VM.Assignment,
  updateAssignment: VM.Assignment
): VM.Assignment =>
  Boolean(updateAssignment) && assignment.date === updateAssignment.date
    ? updateAssignment
    : assignment;

export const replaceAssignmentInProject = (
  project: VM.Project,
  projectName: string,
  assignmentToUpdate: VM.Assignment
): VM.Project =>
  Boolean(project)
    ? project.name !== projectName
      ? project
      : {
          name: projectName,
          assignments: project.assignments.map(item =>
            updateAssignment(item, assignmentToUpdate)
          ),
        }
    : null;

const normalizeStringToNumber = (expression: string): number =>
  isNaN(parseInt(expression)) ? 0 : parseInt(expression);

const extractHoursAndMinutesFromExpression = (timeExpression: string) => {
  const splitTime = timeExpression.split(':');
  const hoursAsNumber = normalizeStringToNumber(splitTime[0]);
  const minutesAsNumber = normalizeStringToNumber(splitTime[1]);
  return { hoursAsNumber, minutesAsNumber };
};

const addHoursFromMinutes = (minutes: number, hours: number) => {
  if (minutes >= 60) {
    const h = (minutes / 60) << 0;
    hours += h;
    minutes -= 60 * h;
  }
  return { hours, minutes };
};

const formattedTimeExpressionFromNumbers = (
  hours: number,
  minutes: number
): string => `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;

export const calculateCounter = (
  date: string,
  projects: VM.Project[]
): VM.Counter => {
  const filteredProjectsByDate =
    Boolean(projects) &&
    projects
      .map(project =>
        project.assignments.filter(assignment => assignment.date === date)
      )
      .reduce((acc, item) => [...acc, ...item], []);

  const result: VM.Counter = filteredProjectsByDate.reduce(
    (acc, { hours }) => {
      let {
        hoursAsNumber: accHours,
        minutesAsNumber: accMinutes,
      } = extractHoursAndMinutesFromExpression(acc.hours);

      let {
        hoursAsNumber: itemHours,
        minutesAsNumber: itemMinutes,
      } = extractHoursAndMinutesFromExpression(hours);

      ({ minutes: itemMinutes, hours: itemHours } = addHoursFromMinutes(
        itemMinutes,
        itemHours
      ));

      accHours += itemHours;
      accMinutes += itemMinutes;

      ({ minutes: accMinutes, hours: accHours } = addHoursFromMinutes(
        accMinutes,
        accHours
      ));

      return {
        date,
        hours: formattedTimeExpressionFromNumbers(accHours, accMinutes),
      };
    },
    {
      date,
      hours: '00:00',
    }
  );

  return result;
};

export const getCountersFromProject = (
  dates: string[],
  projects: VM.Project[]
): VM.Counter[] =>
  Boolean(dates) &&
  dates.reduce((acc, date) => [...acc, calculateCounter(date, projects)], []);
