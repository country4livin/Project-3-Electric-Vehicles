// pgAdmin4 outputs
let state_stations = [
  {
    state: "AK",
    location: [63.588753, -154.493062],
    station_count: 74
  },
  {
    state: "AL",
    location: [32.318231, -86.902298],
    station_count: 615
  },
  {
    state: "AR",
    location: [35.20105, -91.831833],
    station_count: 407
  },
  {
    state: "AZ",
    location: [34.048928, -111.093731],
    station_count: 1573
  },
  {
    state: "CA",
    location: [36.778261, -119.417932],
    station_count: 20038
  },
  {
    state: "CO",
    location: [39.550051, -105.782067],
    station_count: 2780
  },
  {
    state: "CT",
    location: [41.603221, -73.087749],
    station_count: 1482
  },
  {
    state: "DC",
    location: [38.905985, -77.033418],
    station_count: 450
  },
  {
    state: "DE",
    location: [38.910832, -75.52767],
    station_count: 305
  },
  {
    state: "FL",
    location: [27.664827, -81.515754],
    station_count: 4323
  },
  {
    state: "GA",
    location: [32.157435, -82.907123],
    station_count: 2449
  },
  {
    state: "HI",
    location: [19.898682, -155.665857],
    station_count: 425
  },
  {
    state: "IA",
    location: [41.878003, -93.097702],
    station_count: 510
  },
  {
    state: "ID",
    location: [44.068202, -114.742041],
    station_count: 243
  },
  {
    state: "IL",
    location: [40.633125, -89.398528],
    station_count: 1735
  },
  {
    state: "IN",
    location: [40.551217, -85.602364],
    station_count: 734
  },
  {
    state: "KS",
    location: [39.011902, -98.484246],
    station_count: 645
  },
  {
    state: "KY",
    location: [37.839333, -84.270018],
    station_count: 376
  },
  {
    state: "LA",
    location: [31.244823, -92.145024],
    station_count: 337
  },
  {
    state: "MA",
    location: [42.407211, -71.382437],
    station_count: 4026
  },
  {
    state: "MD",
    location: [39.045755, -76.641271],
    station_count: 1997
  },
  {
    state: "ME",
    location: [45.253783, -69.445469],
    station_count: 578
  },
  {
    state: "MI",
    location: [44.314844, -85.602364],
    station_count: 1848
  },
  {
    state: "MN",
    location: [46.729553, -94.6859],
    station_count: 1076
  },
  {
    state: "MO",
    location: [37.964253, -91.831833],
    station_count: 1458
  },
  {
    state: "MS",
    location: [32.354668, -89.398528],
    station_count: 220
  },
  {
    state: "MT",
    location: [46.879682, -110.362566],
    station_count: 163
  },
  {
    state: "NC",
    location: [35.759573, -79.0193],
    station_count: 2122
  },
  {
    state: "ND",
    location: [47.551493, -101.002012],
    station_count: 99
  },
  {
    state: "NE",
    location: [41.492537, -99.901813],
    station_count: 309
  },
  {
    state: "NH",
    location: [43.193852, -71.572395],
    station_count: 338
  },
  {
    state: "NJ",
    location: [40.058324, -74.405661],
    station_count: 1769
  },
  {
    state: "NM",
    location: [34.97273, -105.032363],
    station_count: 410
  },
  {
    state: "NV",
    location: [38.80261, -116.419389],
    station_count: 717
  },
  {
    state: "NY",
    location: [43.299428, -74.217933],
    station_count: 5468
  },
  {
    state: "OH",
    location: [40.417287, -82.907123],
    station_count: 1994
  },
  {
    state: "OK",
    location: [35.007752, -97.092877],
    station_count: 429
  },
  {
    state: "OR",
    location: [43.804133, -120.554201],
    station_count: 1707
  },
  {
    state: "PA",
    location: [41.203322, -77.194525],
    station_count: 2204
  },
  {
    state: "RI",
    location: [41.580095, -71.477429],
    station_count: 393
  },
  {
    state: "SC",
    location: [33.836081, -81.163725],
    station_count: 762
  },
  {
    state: "SD",
    location: [43.969515, -99.901813],
    station_count: 122
  },
  {
    state: "TN",
    location: [35.517491, -86.580447],
    station_count: 1150
  },
  {
    state: "TX",
    location: [31.968599, -99.901813],
    station_count: 4380
  },
  {
    state: "UT",
    location: [39.32098, -111.093731],
    station_count: 1073
  },
  {
    state: "VA",
    location: [37.431573, -78.656894],
    station_count: 2064
  },
  {
    state: "VT",
    location: [44.558803, -72.577841],
    station_count: 511
  },
  {
    state: "WA",
    location: [47.751074, -120.740139],
    station_count: 2968
  },
  {
    state: "WI",
    location: [43.78444, -88.787868],
    station_count: 806
  },
  {
    state: "WV",
    location: [38.597626, -80.454903],
    station_count: 196
  },
  {
    state: "WY",
    location: [43.075968, -107.290284],
    station_count: 121
  }
];
let access_stations = [
  {
    state: "AK",
    location: [63.588753, -154.493062],
    private: 6.0,
    public: 68.0
  },
  {
    state: "AL",
    location: [32.318231, -86.902298],
    private: 94.0,
    public: 521.0
  },
  {
    state: "AR",
    location: [35.20105, -91.831833],
    private: 24.0,
    public: 383.0
  },
  {
    state: "AZ",
    location: [34.048928, -111.093731],
    private: 82.0,
    public: 1491.0
  },
  {
    state: "CA",
    location: [36.778261, -119.417932],
    private: 1149.0,
    public: 18889.0
  },
  {
    state: "CO",
    location: [39.550051, -105.782067],
    private: 142.0,
    public: 2638.0
  },
  {
    state: "CT",
    location: [41.603221, -73.087749],
    private: 148.0,
    public: 1334.0
  },
  {
    state: "DC",
    location: [38.905985, -77.033418],
    private: 47.0,
    public: 403.0
  },
  {
    state: "DE",
    location: [38.910832, -75.52767],
    private: 19.0,
    public: 286.0
  },
  {
    state: "FL",
    location: [27.664827, -81.515754],
    private: 277.0,
    public: 4046.0
  },
  {
    state: "GA",
    location: [32.157435, -82.907123],
    private: 101.0,
    public: 2348.0
  },
  {
    state: "HI",
    location: [19.898682, -155.665857],
    private: 30.0,
    public: 395.0
  },
  {
    state: "IA",
    location: [41.878003, -93.097702],
    private: 23.0,
    public: 487.0
  },
  {
    state: "ID",
    location: [44.068202, -114.742041],
    private: 22.0,
    public: 221.0
  },
  {
    state: "IL",
    location: [40.633125, -89.398528],
    private: 115.0,
    public: 1620.0
  },
  {
    state: "IN",
    location: [40.551217, -85.602364],
    private: 59.0,
    public: 675.0
  },
  {
    state: "KS",
    location: [39.011902, -98.484246],
    private: 35.0,
    public: 610.0
  },
  {
    state: "KY",
    location: [37.839333, -84.270018],
    private: 20.0,
    public: 356.0
  },
  {
    state: "LA",
    location: [31.244823, -92.145024],
    private: 40.0,
    public: 297.0
  },
  {
    state: "MA",
    location: [42.407211, -71.382437],
    private: 176.0,
    public: 3850.0
  },
  {
    state: "MD",
    location: [39.045755, -76.641271],
    private: 118.0,
    public: 1879.0
  },
  {
    state: "ME",
    location: [45.253783, -69.445469],
    private: 24.0,
    public: 554.0
  },
  {
    state: "MI",
    location: [44.314844, -85.602364],
    private: 94.0,
    public: 1754.0
  },
  {
    state: "MN",
    location: [46.729553, -94.6859],
    private: 43.0,
    public: 1033.0
  },
  {
    state: "MO",
    location: [37.964253, -91.831833],
    private: 63.0,
    public: 1395.0
  },
  {
    state: "MS",
    location: [32.354668, -89.398528],
    private: 22.0,
    public: 198.0
  },
  {
    state: "MT",
    location: [46.879682, -110.362566],
    private: 4.0,
    public: 159.0
  },
  {
    state: "NC",
    location: [35.759573, -79.0193],
    private: 104.0,
    public: 2018.0
  },
  {
    state: "ND",
    location: [47.551493, -101.002012],
    private: 2.0,
    public: 97.0
  },
  {
    state: "NE",
    location: [41.492537, -99.901813],
    private: 8.0,
    public: 301.0
  },
  {
    state: "NH",
    location: [43.193852, -71.572395],
    private: 37.0,
    public: 301.0
  },
  {
    state: "NJ",
    location: [40.058324, -74.405661],
    private: 101.0,
    public: 1668.0
  },
  {
    state: "NM",
    location: [34.97273, -105.032363],
    private: 15.0,
    public: 395.0
  },
  {
    state: "NV",
    location: [38.80261, -116.419389],
    private: 33.0,
    public: 684.0
  },
  {
    state: "NY",
    location: [43.299428, -74.217933],
    private: 239.0,
    public: 5229.0
  },
  {
    state: "OH",
    location: [40.417287, -82.907123],
    private: 98.0,
    public: 1896.0
  },
  {
    state: "OK",
    location: [35.007752, -97.092877],
    private: 32.0,
    public: 397.0
  },
  {
    state: "OR",
    location: [43.804133, -120.554201],
    private: 94.0,
    public: 1613.0
  },
  {
    state: "PA",
    location: [41.203322, -77.194525],
    private: 109.0,
    public: 2095.0
  },
  {
    state: "RI",
    location: [41.580095, -71.477429],
    private: 28.0,
    public: 365.0
  },
  {
    state: "SC",
    location: [33.836081, -81.163725],
    private: 62.0,
    public: 700.0
  },
  {
    state: "SD",
    location: [43.969515, -99.901813],
    private: 3.0,
    public: 119.0
  },
  {
    state: "TN",
    location: [35.517491, -86.580447],
    private: 96.0,
    public: 1054.0
  },
  {
    state: "TX",
    location: [31.968599, -99.901813],
    private: 221.0,
    public: 4159.0
  },
  {
    state: "UT",
    location: [39.32098, -111.093731],
    private: 44.0,
    public: 1029.0
  },
  {
    state: "VA",
    location: [37.431573, -78.656894],
    private: 141.0,
    public: 1923.0
  },
  {
    state: "VT",
    location: [44.558803, -72.577841],
    private: 22.0,
    public: 489.0
  },
  {
    state: "WA",
    location: [47.751074, -120.740139],
    private: 155.0,
    public: 2813.0
  },
  {
    state: "WI",
    location: [43.78444, -88.787868],
    private: 34.0,
    public: 772.0
  },
  {
    state: "WV",
    location: [38.597626, -80.454903],
    private: 17.0,
    public: 179.0
  },
  {
    state: "WY",
    location: [43.075968, -107.290284],
    private: 9.0,
    public: 112.0
  }
];
let status_stations = [
  {
    state: "AK",
    location: [63.588753, -154.493062],
    Available: 71.0,
    Planned: 0.0,
    Temporarily_Unavailable: 3.0
  },
  {
    state: "AL",
    location: [32.318231, -86.902298],
    Available: 586.0,
    Planned: 1.0,
    Temporarily_Unavailable: 28.0
  },
  {
    state: "AR",
    location: [35.20105, -91.831833],
    Available: 385.0,
    Planned: 1.0,
    Temporarily_Unavailable: 21.0
  },
  {
    state: "AZ",
    location: [34.048928, -111.093731],
    Available: 1493.0,
    Planned: 0.0,
    Temporarily_Unavailable: 80.0
  },
  {
    state: "CA",
    location: [36.778261, -119.417932],
    Available: 18424.0,
    Planned: 174.0,
    Temporarily_Unavailable: 1440.0
  },
  {
    state: "CO",
    location: [39.550051, -105.782067],
    Available: 2608.0,
    Planned: 13.0,
    Temporarily_Unavailable: 159.0
  },
  {
    state: "CT",
    location: [41.603221, -73.087749],
    Available: 1405.0,
    Planned: 5.0,
    Temporarily_Unavailable: 72.0
  },
  {
    state: "DC",
    location: [38.905985, -77.033418],
    Available: 387.0,
    Planned: 1.0,
    Temporarily_Unavailable: 62.0
  },
  {
    state: "DE",
    location: [38.910832, -75.52767],
    Available: 290.0,
    Planned: 0.0,
    Temporarily_Unavailable: 15.0
  },
  {
    state: "FL",
    location: [27.664827, -81.515754],
    Available: 4006.0,
    Planned: 15.0,
    Temporarily_Unavailable: 302.0
  },
  {
    state: "GA",
    location: [32.157435, -82.907123],
    Available: 2228.0,
    Planned: 11.0,
    Temporarily_Unavailable: 210.0
  },
  {
    state: "HI",
    location: [19.898682, -155.665857],
    Available: 385.0,
    Planned: 10.0,
    Temporarily_Unavailable: 30.0
  },
  {
    state: "IA",
    location: [41.878003, -93.097702],
    Available: 484.0,
    Planned: 3.0,
    Temporarily_Unavailable: 23.0
  },
  {
    state: "ID",
    location: [44.068202, -114.742041],
    Available: 235.0,
    Planned: 0.0,
    Temporarily_Unavailable: 8.0
  },
  {
    state: "IL",
    location: [40.633125, -89.398528],
    Available: 1620.0,
    Planned: 3.0,
    Temporarily_Unavailable: 112.0
  },
  {
    state: "IN",
    location: [40.551217, -85.602364],
    Available: 688.0,
    Planned: 3.0,
    Temporarily_Unavailable: 43.0
  },
  {
    state: "KS",
    location: [39.011902, -98.484246],
    Available: 574.0,
    Planned: 0.0,
    Temporarily_Unavailable: 71.0
  },
  {
    state: "KY",
    location: [37.839333, -84.270018],
    Available: 364.0,
    Planned: 1.0,
    Temporarily_Unavailable: 11.0
  },
  {
    state: "LA",
    location: [31.244823, -92.145024],
    Available: 316.0,
    Planned: 1.0,
    Temporarily_Unavailable: 20.0
  },
  {
    state: "MA",
    location: [42.407211, -71.382437],
    Available: 3806.0,
    Planned: 13.0,
    Temporarily_Unavailable: 207.0
  },
  {
    state: "MD",
    location: [39.045755, -76.641271],
    Available: 1630.0,
    Planned: 42.0,
    Temporarily_Unavailable: 325.0
  },
  {
    state: "ME",
    location: [45.253783, -69.445469],
    Available: 565.0,
    Planned: 0.0,
    Temporarily_Unavailable: 13.0
  },
  {
    state: "MI",
    location: [44.314844, -85.602364],
    Available: 1762.0,
    Planned: 2.0,
    Temporarily_Unavailable: 84.0
  },
  {
    state: "MN",
    location: [46.729553, -94.6859],
    Available: 1031.0,
    Planned: 2.0,
    Temporarily_Unavailable: 43.0
  },
  {
    state: "MO",
    location: [37.964253, -91.831833],
    Available: 1344.0,
    Planned: 0.0,
    Temporarily_Unavailable: 114.0
  },
  {
    state: "MS",
    location: [32.354668, -89.398528],
    Available: 211.0,
    Planned: 0.0,
    Temporarily_Unavailable: 9.0
  },
  {
    state: "MT",
    location: [46.879682, -110.362566],
    Available: 156.0,
    Planned: 1.0,
    Temporarily_Unavailable: 6.0
  },
  {
    state: "NC",
    location: [35.759573, -79.0193],
    Available: 1897.0,
    Planned: 25.0,
    Temporarily_Unavailable: 200.0
  },
  {
    state: "ND",
    location: [47.551493, -101.002012],
    Available: 98.0,
    Planned: 0.0,
    Temporarily_Unavailable: 1.0
  },
  {
    state: "NE",
    location: [41.492537, -99.901813],
    Available: 300.0,
    Planned: 0.0,
    Temporarily_Unavailable: 9.0
  },
  {
    state: "NH",
    location: [43.193852, -71.572395],
    Available: 328.0,
    Planned: 1.0,
    Temporarily_Unavailable: 9.0
  },
  {
    state: "NJ",
    location: [40.058324, -74.405661],
    Available: 1665.0,
    Planned: 18.0,
    Temporarily_Unavailable: 86.0
  },
  {
    state: "NM",
    location: [34.97273, -105.032363],
    Available: 382.0,
    Planned: 0.0,
    Temporarily_Unavailable: 28.0
  },
  {
    state: "NV",
    location: [38.80261, -116.419389],
    Available: 670.0,
    Planned: 2.0,
    Temporarily_Unavailable: 45.0
  },
  {
    state: "NY",
    location: [43.299428, -74.217933],
    Available: 4938.0,
    Planned: 52.0,
    Temporarily_Unavailable: 478.0
  },
  {
    state: "OH",
    location: [40.417287, -82.907123],
    Available: 1897.0,
    Planned: 4.0,
    Temporarily_Unavailable: 93.0
  },
  {
    state: "OK",
    location: [35.007752, -97.092877],
    Available: 409.0,
    Planned: 1.0,
    Temporarily_Unavailable: 19.0
  },
  {
    state: "OR",
    location: [43.804133, -120.554201],
    Available: 1603.0,
    Planned: 12.0,
    Temporarily_Unavailable: 92.0
  },
  {
    state: "PA",
    location: [41.203322, -77.194525],
    Available: 2053.0,
    Planned: 4.0,
    Temporarily_Unavailable: 147.0
  },
  {
    state: "RI",
    location: [41.580095, -71.477429],
    Available: 369.0,
    Planned: 1.0,
    Temporarily_Unavailable: 23.0
  },
  {
    state: "SC",
    location: [33.836081, -81.163725],
    Available: 717.0,
    Planned: 2.0,
    Temporarily_Unavailable: 43.0
  },
  {
    state: "SD",
    location: [43.969515, -99.901813],
    Available: 116.0,
    Planned: 0.0,
    Temporarily_Unavailable: 6.0
  },
  {
    state: "TN",
    location: [35.517491, -86.580447],
    Available: 1093.0,
    Planned: 6.0,
    Temporarily_Unavailable: 51.0
  },
  {
    state: "TX",
    location: [31.968599, -99.901813],
    Available: 3990.0,
    Planned: 60.0,
    Temporarily_Unavailable: 330.0
  },
  {
    state: "UT",
    location: [39.32098, -111.093731],
    Available: 970.0,
    Planned: 4.0,
    Temporarily_Unavailable: 99.0
  },
  {
    state: "VA",
    location: [37.431573, -78.656894],
    Available: 1950.0,
    Planned: 2.0,
    Temporarily_Unavailable: 112.0
  },
  {
    state: "VT",
    location: [44.558803, -72.577841],
    Available: 485.0,
    Planned: 4.0,
    Temporarily_Unavailable: 22.0
  },
  {
    state: "WA",
    location: [47.751074, -120.740139],
    Available: 2686.0,
    Planned: 15.0,
    Temporarily_Unavailable: 267.0
  },
  {
    state: "WI",
    location: [43.78444, -88.787868],
    Available: 763.0,
    Planned: 2.0,
    Temporarily_Unavailable: 41.0
  },
  {
    state: "WV",
    location: [38.597626, -80.454903],
    Available: 190.0,
    Planned: 0.0,
    Temporarily_Unavailable: 6.0
  },
  {
    state: "WY",
    location: [43.075968, -107.290284],
    Available: 116.0,
    Planned: 0.0,
    Temporarily_Unavailable: 5.0
  }
];
