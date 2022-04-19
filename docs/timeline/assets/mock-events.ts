import { Mode } from 'src/app/shared/mode.enum';

export module MockEvents {
  export const mockEvents = [
    {
      id: 0,
      date: new Date('2018-1-1'),
      highlights: `First year highlights.`,
      type: Mode.Year,
      children: [
        {
          id: 10,
          date: new Date('2018-1-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
          children: [
            {
              id: 100,
              date: new Date('2018-1-1'),
              highlights: `First day event.`,
              type: Mode.Day,
            },
            {
              id: 101,
              date: new Date('2018-1-2'),
              highlights: `First day event.`,
              type: Mode.Day,
            },
            {
              id: 102,
              date: new Date('2018-1-3'),
              highlights: `First day event.`,
              type: Mode.Day,
            },
            {
              id: 103,
              date: new Date('2018-1-4'),
              highlights: `First day event.`,
              type: Mode.Day,
            },
            {
              id: 104,
              date: new Date('2018-1-5'),
              highlights: `First day event.`,
              type: Mode.Day,
            },
          ],
        },
        {
          id: 11,
          date: new Date('2018-2-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 12,
          date: new Date('2018-3-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 13,
          date: new Date('2018-4-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
        {
          id: 14,
          date: new Date('2018-5-1'),
          highlights: `First month highlights.`,
          type: Mode.Month,
        },
      ],
    },
    {
      id: 1,
      date: new Date('2019-1-1'),
      highlights: `Second year highlights.`,
      type: Mode.Year,
    },
    {
      id: 2,
      date: new Date('2020-1-1'),
      highlights: `Third year highlights.`,
      type: Mode.Year,
    },
    {
      id: 3,
      date: new Date('2021-1-1'),
      highlights: `4th year highlights.`,
      type: Mode.Year,
    },
    {
      id: 4,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 5,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 6,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 7,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 8,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 9,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 10,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
    {
      id: 11,
      date: new Date('2022-1-1'),
      highlights: `5th year highlights`,
      type: Mode.Year,
    },
  ];
}
