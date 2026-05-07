export const timePeriods = [
  {
    id: "week1",
    label: "Week1",

    range: {
      start: "2026-04-05",
      end: "2026-04-11",
    },

    totalHours: 13.92,

    shifts: [
      {
        id: "shift-1",

        date: "2026-04-05",
        day: "Sun",

        assigned: {
          start: "17:50",
          end: "22:15",
        },

        actual: {
          clockIn: "17:50",
          clockOut: "22:15",
        },

        breaks: [],

        workHours: 4.42,
        overtimeHours: 0,

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

        // 17:42 -> 17:40
        // 22:16 -> 22:15
        workHours: 4.58,
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

        workHours: 4.92,
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

    totalHours: 18.25,

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

        workHours: 8.5,
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
          clockIn: "17:25",
          clockOut: "22:15",
        },

        breaks: [
          {
            start: "20:15",
            end: "20:30",
            paid: true,
          },
        ],

        workHours: 4.83,
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

        workHours: 4.92,
        overtimeHours: 0,

        color: "green",
      },
    ],
  },
];

export const paySummaries = [
  {
    id: "summary-1",

    label: "Current Pay Period",

    period: {
      start: "2026-04-05",
      end: "2026-04-18",
    },

    hourlyRate: 18.75,

    totalHours: 32.17,
    regularHours: 31.67,
    overtimeHours: 0.5,

    grossPay: 603.19,

    deductions: {
      incomeTax: 42.18,
      cpp: 24.91,
      ei: 9.53,

      total: 76.62,
    },

    netPay: 526.57,

    currency: "CAD",
  },
];

export const weeklySummaries = [
  {
    id: "week1-summary",

    weekId: "week1",

    totalHours: 13.92,
    regularHours: 13.92,
    overtimeHours: 0,

    totalShifts: 3,
  },

  {
    id: "week2-summary",

    weekId: "week2",

    totalHours: 18.25,
    regularHours: 17.75,
    overtimeHours: 0.5,

    totalShifts: 3,
  },
];