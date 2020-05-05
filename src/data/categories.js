const categories = [
  {
    name: "Action & Adventure",
    code: 1365,
    background: "#227093",
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
    background: "#553772",
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
    background: "#9D5716",
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
    background: "#b71540",
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
    background: "#474787",
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
    background: "#664200",
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
    background: "#006666",
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
    background: "#9D5716",
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
    background: "#166D9D",
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
    background: "#8F3B76",
    other: [
      {
        name: "Art House Movies",
        code: 29764
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
  },
  {
    name: "Horror Movies",
    code: 8711,
    background: "#535c68",
    other: [
      {
        name: "B-Horror Movies",
        code: 8195
      },
      {
        name: "Creature Features",
        code: 6895
      },
      {
        name: "Cult Horror Movies",
        code: 10944
      },
      {
        name: "Deep Sea Horror Movies",
        code: 45028
      },
      {
        name: "Foreign Horror Movies",
        code: 8654
      },
      {
        name: "Horror Comedy",
        code: 89585
      },
      {
        name: "Monster Movies",
        code: 947
      },
      {
        name: "Slasher and Seial Killer Movies",
        code: 8646
      },
      {
        name: "Supernatural Horror Movies",
        code: 42023
      },
      {
        name: "Teen Screams",
        code: 52147
      },
      {
        name: "Vampire Horror Movies",
        code: 75804
      },
      {
        name: "Werewolf Horror Movies",
        code: 75930
      },
      {
        name: "Zombie Horror Movies",
        code: 75405
      },
      {
        name: "Satanic Stories",
        code: 6998
      },

    ]
  },
  {
    name: "Independent Movies",
    code: 7077,
    background: "#343090",
    other: [
      {
        name: "Exprimental Movies",
        code: 11079
      },
      {
        name: "Independent Action & Adventure",
        code: 11804
      },
      {
        name: "Independent Thrillers",
        code: 3269
      },
      {
        name: "Romantic Independent Movies",
        code: 9916
      },
      {
        name: "Independent Comedies",
        code: 4195
      },
      {
        name: "Independent Dramas",
        code: 384
      },
    ]
  },
  {
    name: "Music",
    code: 1701,
    background: "#006600",
    other: [
      {
        name: "Kids Music",
        code: 52843
      },
      {
        name: "Country & Western/Folk",
        code: 1105
      },
      {
        name: "Jazz & Easy Listening",
        code: 10271
      },
      {
        name: "Latin Music",
        code: 10741
      },
      {
        name: "Urban & Dance Concerts",
        code: 9472
      },
      {
        name: "World Music Concerts",
        code: 2856
      },
      {
        name: "Rock & Pop Concerts",
        code: 3278
      },
    ]
  },
  {
    name: "Musicals",
    code: 13335,
    background: "#007D71",
    other: [
      {
        name: "Classic Musicals",
        code: 32392
      },
      {
        name: "Disney Musicals",
        code: 59433
      },
      {
        name: "Showbiz Musicals",
        code: 13573
      },
      {
        name: "Stage Musicals",
        code: 55774
      },
    ]
  },
  {
    name: "Romantic Movies",
    code: 8883,
    background: "#8F3B76",
    other: [
      {
        name: "Romantic Favorites",
        code: 502675
      },
      {
        name: "Quirky Romantic",
        code: 36103
      },
      {
        name: "Romantic Independent Movies",
        code: 9916
      },
      {
        name: "Romantic Foreign Movies",
        code: 7153
      },
      {
        name: "Romantic Dramas Movies",
        code: 1255
      },
      {
        name: "Steamy romantic Movies",
        code: 35800
      },
      {
        name: "Classic Romantic Movies",
        code: 31273
      },
      {
        name: "Romantic Comedies",
        code: 5475
      },
    ]
  },
  {
    name: "Sci-Fi & Fantasy",
    code: 1492,
    background: "#218c74",
    other: [
      {
        name: "Action Sci-Fi & Fantasy",
        code: 1568
      },
      {
        name: "Alien Sci-Fi",
        code: 3327
      },
      {
        name: "Classic Sci-Fi & Fantasy",
        code: 47147
      },
      {
        name: "Cult Sci-Fi & Fantasy",
        code: 4734
      },
      {
        name: "Fantasy Movies",
        code: 9744
      },
      {
        name: "Sci-Fi Adventure",
        code: 6926
      },
      {
        name: "Sci-Fi Dramas",
        code: 3916
      },
      {
        name: "Sci-Fi Horror Movies",
        code: 1694
      },
      {
        name: "Sci-Fi Thrillers",
        code: 11014
      },
      {
        name: "Foreign Sci-Fi & Fantasy",
        code: 6485
      },
    ]
  },
  {
    name: "Sports Movies",
    code: 4370,
    background: "#3655B3",
    other: [
      {
        name: "Sports Comedies",
        code: 5286
      },
      {
        name: "Sports Documentaries",
        code: 180
      },
      {
        name: "Sports Dramas",
        code: 7243
      },
      {
        name: "Baseball Movies",
        code: 12339
      },
      {
        name: "Football Movies",
        code: 12803
      },
      {
        name: "Boxing M10499ovies",
        code: 12443
      },
      {
        name: "Soccer Movies",
        code: 12549
      },
      {
        name: "Martial Arts, Boxing & Wrestling",
        code: 6695
      },
      {
        name: "Basketball Movies",
        code: 12762
      },
      {
        name: "Sports & Fitness",
        code: 9327
      },
    ]
  },
  {
    name: "Thrillers",
    code: 8933,
    background: "#474700",
    other: [
      {
        name: "Action Thrillers",
        code: 43048
      },
      {
        name: "Classic Thrillers",
        code: 46588
      },
      {
        name: "Crime Thrillers",
        code: 10499
      },
      {
        name: "Foreign Thrillers",
        code: 10306
      },
      {
        name: "Independent Thrillers",
        code: 3269
      },
      {
        name: "Gangster Movies",
        code: 31851
      },
      {
        name: "Psychological Thrillers",
        code: 5505
      },
      {
        name: "Political Thrillers",
        code: 10504
      },
      {
        name: "Mysteries",
        code: 9994
      },
      {
        name: "Sci-Fi Thrillers",
        code: 11014
      },
      {
        name: "Spy Thrillers",
        code: 9147
      },
      {
        name: "Steamy Thrillers",
        code: 972
      },
      {
        name: "Supernatural Thrillers",
        code: 11140
      },
    ]
  },
  {
    name: "TV Shows",
    code: 83,
    background: "#6F1E51",
    other: [
      {
        name: "British TV Shows",
        code: 52117
      },
      {
        name: "Classic TV Shows",
        code: 46553
      },
      {
        name: "Crime TV Shows",
        code: 26146
      },
      {
        name: "Cult TV Shows",
        code: 74652
      },
      {
        name: "Food & Travel TV",
        code: 72436
      },
      {
        name: "Kids' TV",
        code: 27346
      },
      {
        name: "Korean TV Shows",
        code: 67879
      },
      {
        name: "Miniseries",
        code: 4814
      },
      {
        name: "Military TV Shows",
        code: 25804
      },
      {
        name: "Science & Nature TV",
        code: 52780
      },
      {
        name: "TV Action & Adventure",
        code: 10673
      },
      {
        name: "TV Comedies",
        code: 10375
      },
      {
        name: "TV Documentaries",
        code: 10105
      },
      {
        name: "TV Dramas",
        code: 11714
      },
      {
        name: "TV Horror",
        code: 83059
      },
      {
        name: "TV Mysteries",
        code: 4366
      },
      {
        name: "TV Sci-Fi & Fantasy",
        code: 1372
      },
      {
        name: "Reality TV",
        code: 9833
      },
      {
        name: "Teen TV Shows",
        code: 60951
      },
    ]
  },
];

export default categories;
