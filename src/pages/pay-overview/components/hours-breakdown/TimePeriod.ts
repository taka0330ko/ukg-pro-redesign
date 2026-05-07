export const timePeriods = [
  {
    id: "week1",
    label: "Week1",
    range: {
      start: "2026-04-05",
      end: "2026-04-11",
    },

    totalHours: 14.58,

    shifts: [
      {
        id: "shift-1",

        date: "2026-04-05",
        day: "Sun",

        assigned: {
          start: "13:30",
          end: "22:15",
        },

        actual: {
          clockIn: "13:30",
          clockOut: "23:00",
        },

        breaks: [
          {
            start: "16:15",
            end: "17:15",
            paid: false,
          },
        ],

        workHours: 8.0,
        overtimeHours: 0.5,

        color: "green",
      },

      {
        id: "shift-2",

        date: "2026-04-09",
        day: "Thu",

        assigned: {
          start: "17:25",
          end: "22:15",
        },

        actual: {
          clockIn: "17:42",
          clockOut: "22:16",
        },

        breaks: [
          {
            start: "20:15",
            end: "20:30",
            paid: true,
          },
        ],

        workHours: 4.5,
        overtimeHours: 0,

        color: "green",
      },

      {
        id: "shift-3",

        date: "2026-04-10",
        day: "Fri",

        assigned: {
          start: "17:50",
          end: "22:45",
        },

        actual: {
          clockIn: "17:50",
          clockOut: "22:45",
        },

        breaks: [],

        workHours: 4.9,
        overtimeHours: 0,

        color: "green",
      },
    ],
  },

  {
    id: "week2",
    label: "Week2",

    range: {
      start: "2026-04-12",
      end: "2026-04-18",
    },

    totalHours: 14.58,

    shifts: [
      {
        id: "shift-4",

        date: "2026-04-12",
        day: "Sun",

        assigned: {
          start: "13:30",
          end: "22:15",
        },

        actual: {
          clockIn: "13:30",
          clockOut: "23:00",
        },

        breaks: [
          {
            start: "16:15",
            end: "17:15",
            paid: false,
          },
        ],

        workHours: 8.0,
        overtimeHours: 0.5,

        color: "green",
      },

      {
        id: "shift-5",

        date: "2026-04-16",
        day: "Thu",

        assigned: {
          start: "17:25",
          end: "22:15",
        },

        actual: {
          clockIn: "17:42",
          clockOut: "22:16",
        },

        breaks: [
          {
            start: "20:15",
            end: "20:30",
            paid: true,
          },
        ],

        workHours: 4.5,
        overtimeHours: 0,

        color: "green",
      },

      {
        id: "shift-6",

        date: "2026-04-17",
        day: "Fri",

        assigned: {
          start: "17:50",
          end: "22:45",
        },

        actual: {
          clockIn: "17:50",
          clockOut: "22:45",
        },

        breaks: [],

        workHours: 4.9,
        overtimeHours: 0,

        color: "green",
      },
    ],
  },
];