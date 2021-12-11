const events = [
  /* Recurring Events */
  {
    color: '#2c9d5d',
    daysOfWeek: ['0', '2', '3', '4', '5', '6'],
    endTime: UtcToLocal('19:00'),
    startTime: UtcToLocal('18:00'),
    title: 'Fractals Team 1'
  },
  {
    color: '#186885',
    daysOfWeek: ['1'],
    endTime: UtcToLocal('23:00'),
    startTime: UtcToLocal('21:30'),
    title: 'Fractals Team 2'
  },
  {
    color: '#186885',
    daysOfWeek: ['0', '2', '3', '4', '5', '6'],
    endTime: UtcToLocal('21:00'),
    startTime: UtcToLocal('19:30'),
    title: 'Fractals Team 2'
  },
  {
    color: '#caaa2a',
    daysOfWeek: ['3'],
    endTime: UtcToLocal('18:00'),
    startTime: UtcToLocal('17:00'),
    title: 'PvE Guild Missions'
  },
  {
    color: '#caaa2a',
    daysOfWeek: ['5'],
    endTime: UtcToLocal('17:00'),
    startTime: UtcToLocal('16:30'),
    title: 'PvP Guild Mission'
  },
  {
    color: '#dc423e',
    daysOfWeek: ['0', '1', '2', '3', '4', '5', '6'],
    startTime: UtcToLocal('24:00'),
    title: 'Reset'
  },
  {
    color: '#a66356',
    daysOfWeek: ['2', '4', '6'],
    endTime: UtcToLocal('17:30'),
    startTime: UtcToLocal('17:00'),
    title: 'Strike Missions'
  },
  /* Non Recurring Events */
  {
    color: '#69278a',
    end: '2021-12-11T18:00:00Z',
    start: '2021-12-11T16:30:00Z',
    title: 'Raid'
  }
]