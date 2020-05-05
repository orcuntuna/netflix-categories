const categories = [
  {
    name: "Action & Adventure",
    code: 1365,
    other: [
      {
        name: "Asian Action Movies",
        code: 77232,
      },
      {
        name: "Classic Action & Adventure",
        code: 46576,
      },
      {
        name: "Action Comedies",
        code: 43040,
      },
      {
        name: "Action Thrillers",
        code: 43048,
      },
      {
        name: "Adventures",
        code: 7442,
      },
      {
        name: "Comic Book and Superhero Movies",
        code: 10118,
      },
      {
        name: "Westerns",
        code: 7700,
      },
      {
        name: "Spy Action & Adventure",
        code: 10702,
      },
      {
        name: "Foregin Action & Adventure",
        code: 11828,
      },
      {
        name: "Martial Arts Movies",
        code: 8985,
      },
      {
        name: "Military Action & Adventure",
        code: 2125,
      },
    ],
  },
  {
    name: "Anime",
    code: 7424,
    other: [
      {
        name: "Adult Animation",
        code: 11881,
      },
      {
        name: "Anime Action",
        code: 2653,
      },
      {
        name: "Anime Comedies",
        code: 9302,
      },
      {
        name: "Anime Dramas",
        code: 452,
      },
      {
        name: "Anime Features",
        code: 3063,
      },
      {
        name: "Anime Sci-Fi",
        code: 2729,
      },
      {
        name: "Anime Horror",
        code: 10695,
      },
      {
        name: "Anime Fantasty",
        code: 11146,
      },
      {
        name: "Anime Series",
        code: 6721,
      },
    ],
  },
  {
    name: "Children & Family Movies",
    code: 783,
    other: [
      {
        name: "Movies for ages 0 to 2",
        code: 6796,
      },
      {
        name: "Movies for ages 2 to 4",
        code: 6218,
      },
      {
        name: "Movies for ages 5 to 7",
        code: 5455,
      },
      {
        name: "Movies for ages 8 to 10",
        code: 561,
      },
      {
        name: "Movies for ages 11 to 12",
        code: 6962,
      },
      {
        name: "Education for Kids",
        code: 10659,
      },
      {
        name: "Disney",
        code: 67673,
      },
      {
        name: "Movies based on children's books",
        code: 10056,
      },
      {
        name: "Family Features",
        code: 51056,
      },
      {
        name: "TV Cartoons",
        code: 11177,
      },
      {
        name: "Kids TV",
        code: 27346,
      },
      {
        name: "Kids Music",
        code: 52843,
      },
      {
        name: "Animal Tales",
        code: 5507,
      },
    ],
  },
  {
    name: "Classic Movies",
    code: 31574,
    other: [
      {
        name: "Classic Comedies",
        code: 31694,
      },
      {
        name: "Classic Dramas",
        code: 29809,
      },
      {
        name: "Classic Sci-Fi & Fantasty",
        code: 47147,
      },
      {
        name: "Film Noir",
        code: 7687,
      },
      {
        name: "Classic War Movies",
        code: 48744,
      },
      {
        name: "Epics",
        code: 52858,
      },
      {
        name: "Classic Foreign Movies",
        code: 32473,
      },
      {
        name: "Slient Movies",
        code: 53310,
      },
      {
        name: "Classic Westerns",
        code: 47465,
      },
    ],
  },
  {
    name: "Comedies",
    code: 6548,
    other: [
      {
        name: "Dark Comedies",
        code: 869
      },
      {
        name: "Foreign Comedies",
        code: 4426
      },
      {
        name: "Late Night Comedies",
        code: 1402
      },
      {
        name: "Mockumentaries",
        code: 26
      },
      {
        name: "Political Comedies",
        code: 2700
      },
      {
        name: "Screwball Comedies",
        code: 9702
      },
      {
        name: "Sports Comedies",
        code: 5286
      },
      {
        name: "Stand-up Comedy",
        code: 11559
      },
      {
        name: "Teen Comedies",
        code: 3519
      },
      {
        name: "Satires",
        code: 4922
      },
      {
        name: "Romantic Comedies",
        code: 5475
      },
      {
        name: "Slapstick Comedies",
        code: 10256
      },
    ]
  },
  {
    name: "Cult Movies",
    code: 7627,
    other: [
      {
        name: "B-Horror Movies",
        code: 8195
      },
      {
        name: "Camp Movies",
        code: 1252
      },
      {
        name: "Cult Horror Movies",
        code: 10944
      },
      {
        name: "Cult Sci-Fi Fantasty",
        code: 4734
      },
      {
        name: "Cult Comedies",
        code: 934
      },
    ]
  },
  {
    name: "Documentaries",
    code: 6839,
    other: [
      {
        name: "Biographical Documentaries",
        code: 3652
      },
      {
        name: "Crime Documentaries",
        code: 9875
      },
      {
        name: "Foreign Documentaries",
        code: 5161
      },
      {
        name: "Historical Documentaries",
        code: 5349
      },
      {
        name: "Military Documentaries",
        code: 4006
      },
      {
        name: "Sports Documentaries",
        code: 180
      },
      {
        name: "Music & Concert Documentaries",
        code: 90361
      },
      {
        name: "Travel & Adventure Documentaries",
        code: 1159
      },
      {
        name: "Political Documentaries",
        code: 7018
      },
      {
        name: "Religious Documentaries",
        code: 10005
      },
      {
        name: "Science & Nature Documentaries",
        code: 2595
      },
      {
        name: "Social & Cultural Documentaries",
        code: 3675
      },
    ]
  },
  {
    name: "Dramas",
    code: 5763,
    other: [
      {
        name: "Biographical Dramas",
        code: 3179
      },
      {
        name: "Classic Dramas",
        code: 29809
      },
      {
        name: "Courtroom Dramas",
        code: 528582748
      },
      {
        name: "Crime Dramas",
        code: 6889
      },
      {
        name: "Dramas based on Books",
        code: 4961
      },
      {
        name: "Dramas based on real life",
        code: 3653
      },
      {
        name: "Tearjerkers",
        code: 6384
      },
      {
        name: "Foreign Dramas",
        code: 2150
      },
      {
        name: "Sports Dramas",
        code: 7243
      },
      {
        name: "Independent Dramas",
        code: 384
      },
      {
        name: "Teen Dramas",
        code: 9299
      },
      {
        name: "Military Dramas",
        code: 11
      },
      {
        name: "Period Pieces",
        code: 12123
      },
      {
        name: "Political Dramas",
        code: 6616
      },
      {
        name: "Romantic Dramas",
        code: 1255
      },
      {
        name: "Showbiz Dramas",
        code: 5012
      },
      {
        name: "Social Ussue Dramas",
        code: 3947
      },
    ]
  },
  {
    name: "Faith & Spirituality",
    code: 26835,
    other: [
      {
        name: "Faith & Spirituality Movies",
        code: 52804
      },
      {
        name: "Spiritual Documentaries",
        code: 2760
      },
      {
        name: "Kids Faith & Spirituality",
        code: 751423
      },
    ]
  },
  {
    name: "Foreign Movies",
    code: 7462,
    other: [
      {
        name: "Art House Movies",
        code: 29764
      },
      {
        name: "Foreign Action & Adventure",
        code: 11828
      },
      {
        name: "Classic Foreign Movies",
        code: 32473
      },
      {
        name: "Foreign Comedies",
        code: 4426
      },
      {
        name: "Foreign Documentaries",
        code: 5161
      },
      {
        name: "Foreign Dramas",
        code: 2150
      },
      {
        name: "Foreign Horror Movies",
        code: 8654
      },
      {
        name: "Foreign Sci-Fi & Fantasty",
        code: 6485
      },
      {
        name: "Foreign Thrillers",
        code: 10306
      },
      {
        name: "Romantic Foreign Movies",
        code: 7153
      },
      {
        name: "Turkish Movies",
        code: 1133133
      },
      {
        name: "African Movies",
        code: 3179
      },
      {
        name: "Australian Movies",
        code: 5230
      },
      {
        name: "Belgian Movies",
        code: 262
      },
      {
        name: "Korean Movies",
        code: 5685
      },
      {
        name: "Latin American Movies",
        code: 1613
      },
      {
        name: "Middle Eastern Movies",
        code: 5875
      },
      {
        name: "New Zealand Movies",
        code: 63782
      },
      {
        name: "Russian Movies",
        code: 11567
      },
      {
        name: "Scandinavlan Movies",
        code: 9292
      },
      {
        name: "Southeast Asian Movies",
        code: 9196
      },
      {
        name: "Spanish Movies",
        code: 58741
      },
      {
        name: "Greek Movies",
        code: 61115
      },
      {
        name: "German Movies",
        code: 58807
      },
      {
        name: "French Movies",
        code: 58807
      },
      {
        name: "Eastern European Movies",
        code: 5254
      },
      {
        name: "Dutch Movies",
        code: 10606
      },
      {
        name: "Irish Movies",
        code: 58750
      },
      {
        name: "Japanese Movies",
        code: 10398
      },
      {
        name: "Italian Movies",
        code: 8221
      },
      {
        name: "Indian Movies",
        code: 10463
      },
      {
        name: "Chinese Movies",
        code: 3960
      },
      {
        name: "British Movies",
        code: 10757
      },
    ]
  }
];

export default categories;
