export const timePeriods = [
  {
    id: "week1",
    label: "Week1",

    range: {
      start: "2026-04-05",
      end: "2026-04-11",
    },

    totalHours: 16.68,

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
          clockIn: "14:19",
          clockOut: "22:15",
        },

        breaks: [
          {
            start: "16:15",
            end: "17:15",
            paid: false,
          },
        ],

        // Late clock-in
        workHours: 6.93,
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

        breaks: [
          {
            start: "20:36",
            end: "20:51",
            paid: true,
          },
        ],

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

    totalHours: 17,

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
          clockOut: "21:00",
        },

        breaks: [
          {
            start: "20:15",
            end: "20:30",
            paid: true,
          },
        ],

        workHours: 3.58,
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

        breaks: [
          {
            start: "20:05",
            end: "20:20",
            paid: true,
          },
        ],

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
      start: "2026-03-08",
      end: "2026-03-21",
    },

    hourlyRate: 18.75,

    totalHours: 33.68,
    regularHours: 33.18,
    overtimeHours: 0.5,

    grossPay: 631.56,

    deductions: {
      incomeTax: 22.05,
      cpp: 13.08,
      ei: 4.91,

      total: 40.04,
    },

    netPay: 591.52,

    currency: "CAD",
  },
];

export const weeklySummaries = [
  {
    id: "week1-summary",

    weekId: "week1",

    totalHours: 16.68,
    regularHours: 16.68,
    overtimeHours: 0,

    totalShifts: 3,
  },

  {
    id: "week2-summary",

    weekId: "week2",

    totalHours: 17,
    regularHours: 16.5,
    overtimeHours: 0.5,

    totalShifts: 3,
  },
];
