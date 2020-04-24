import { Project } from './time.vm';

export const mockData: Project[] = [
  {
    name: 'Bankia',
    assignments: [
      {
        date: '08/02/2020',
        hours: '04:00',
      },
      {
        date: '09/02/2020',
        hours: '04:00',
      },
      {
        date: '10/02/2020',
        hours: '00:00',
      },
      {
        date: '11/02/2020',
        hours: '00:00',
      },
      {
        date: '12/02/2020',
        hours: '03:30',
      },
      {
        date: '13/02/2020',
        hours: '00:00',
      },
      {
        date: '14/02/2020',
        hours: '00:00',
      },
    ],
  },
  {
    name: 'Mapfre',
    assignments: [
      {
        date: '08/02/2020',
        hours: '04:00',
      },
      {
        date: '09/02/2020',
        hours: '04:00',
      },
      {
        date: '10/02/2020',
        hours: '00:00',
      },
      {
        date: '11/02/2020',
        hours: '04:00',
      },
      {
        date: '12/02/2020',
        hours: '00:00',
      },
      {
        date: '13/02/2020',
        hours: '00:00',
      },
      {
        date: '14/02/2020',
        hours: '00:00',
      },
    ],
  },
  {
    name: 'Interno',
    assignments: [
      {
        date: '08/02/2020',
        hours: '04:00',
      },
      {
        date: '09/02/2020',
        hours: '04:00',
      },
      {
        date: '10/02/2020',
        hours: '00:00',
      },
      {
        date: '11/02/2020',
        hours: '04:00',
      },
      {
        date: '12/02/2020',
        hours: '03:30',
      },
      {
        date: '13/02/2020',
        hours: '00:00',
      },
      {
        date: '14/02/2020',
        hours: '00:00',
      },
    ],
  },
  {
    name: 'Vacaciones',
    assignments: [
      {
        date: '08/02/2020',
        hours: '00:00',
      },
      {
        date: '09/02/2020',
        hours: '00:00',
      },
      {
        date: '10/02/2020',
        hours: '00:00',
      },
      {
        date: '11/02/2020',
        hours: '00:00',
      },
      {
        date: '12/02/2020',
        hours: '00:00',
      },
      {
        date: '13/02/2020',
        hours: '00:00',
      },
      {
        date: '14/02/2020',
        hours: '00:00',
      },
    ],
  },
];

export const header = mockData[0].assignments.map(
  assignment => assignment.date
);

export const counters = [
  '04:00',
  '03:00',
  '04:00',
  '05:00',
  '02:30',
  '00:00',
  '00:00',
];
