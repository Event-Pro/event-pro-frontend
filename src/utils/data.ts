import baseball from "../assets/images/baseball.webp";
import hockey from "../assets/images/hockey.webp";
import basketball from "../assets/images/basketball.webp";
import soccer from "../assets/images/soccer.webp";
import football from "../assets/images/football.webp";
import tennis from "../assets/images/tennis.webp";
import golf from "../assets/images/golf.webp";
import rockConcert from "../assets/images/rockConcert.webp";
import popConcert from "../assets/images/popConcert.webp";
import jazzConcert from "../assets/images/jazzConcert.webp";
import indieConcert from "../assets/images/indieConcert.webp";
import classicalConcert from "../assets/images/classicalConcert.webp";
import latinConcert from "../assets/images/latinConcert.webp";
import electronicConcert from "../assets/images/electronicConcert.webp";
import countryConcert from "../assets/images/countryConcert.webp";
import colorRun from "../assets/images/colorRun.webp";
import park from "../assets/images/park.webp";
import fundraiser from "../assets/images/fundraiser.webp";
import fitness from "../assets/images/fitness.webp";
import movie from "../assets/images/movie.webp";
import paint from "../assets/images/paint.webp";

export const sportEvents = [
  {
    name: "Baseball",
    is_virtual: false,
    location: "Globe Life Park",
    startDatetime: "2023-03-02T18:00:00.000Z",
    endDatetime: "2023-03-30T20:00:00.000Z",
    price: 28,
    tags: ["Baseball", "Peanuts", "Crackerjacks"],
    creatorId: "user123",
    managedBy: "Tech Events Inc.",
    imgUrl: baseball,
    description:
      "Join our virtual conference to learn about the latest technologies.",
  },
  {
    name: "Hockey",
    is_virtual: false,
    location: "American Airlines Center",
    startDatetime: "2023-10-15T19:00:00.000Z",
    endDatetime: "2023-10-15T22:00:00.000Z",
    price: 35,
    tags: ["Hockey", "Maple Syrup", "Brawls"],
    creatorId: "user456",
    managedBy: "FitLife Gym",
    imgUrl: hockey,
    description: "Get fit with our high-intensity fitness class.",
  },
  {
    name: "Basketball",
    is_virtual: false,
    location: "American Airlines Center",
    startDatetime: "2023-07-16T20:30:00.000Z",
    endDatetime: "2023-07-16T23:00:00.000Z",
    price: 20,
    tags: ["Basketball", "Whoomp! There it is", "Free Throws"],
    creatorId: "user789",
    managedBy: "Local Art Society",
    imgUrl: basketball,
    description: "Explore your creative side in our art workshop.",
  },
  {
    name: "Soccer",
    is_virtual: false,
    location: "Toyota Stadium",
    startDatetime: "2023-02-25T19:30:00.000Z",
    endDatetime: "2023-02-25T22:30:00.000Z",
    price: 40,
    tags: ["Soccer", "Chants", "Scarves"],
    creatorId: "user101",
    managedBy: "City Events Committee",
    imgUrl: soccer,
    description:
      "Experience a weekend of live music at our annual music festival.",
  },
  {
    name: "Football",
    is_virtual: false,
    location: "AT&T Stadium",
    startDatetime: "2023-09-10T19:20:00.000Z",
    endDatetime: "2023-09-10T22:30:00.000Z",
    price: 500,
    tags: ["Football", "Americas Team", "Thanksgiving"],
    creatorId: "user101",
    managedBy: "City Events Committee",
    imgUrl: football,
    description:
      "Experience a weekend of live music at our annual music festival.",
  },
  {
    name: "Tennis",
    is_virtual: false,
    location: "AT&T Stadium",
    startDatetime: "2023-09-10T19:20:00.000Z",
    endDatetime: "2023-09-10T22:30:00.000Z",
    price: 500,
    tags: ["Tennis", "Rackets", "Volleys"],
    creatorId: "user101",
    managedBy: "City Events Committee",
    imgUrl: tennis,
    description:
      "Experience a weekend of live music at our annual music festival.",
  },
  {
    name: "Golf",
    is_virtual: false,
    location: "AT&T Stadium",
    startDatetime: "2023-09-10T19:20:00.000Z",
    endDatetime: "2023-09-10T22:30:00.000Z",
    price: 500,
    tags: ["Golf", "Fairways", "Putts"],
    creatorId: "user101",
    managedBy: "City Events Committee",
    imgUrl: golf,
    description:
      "Experience a weekend of live music at our annual music festival.",
  },
];

export const musicEvents = [
  {
    name: "Rockin' Live",
    is_virtual: false,
    location: "Wembley Stadium",
    startDatetime: "2023-08-15T18:00:00.000Z",
    endDatetime: "2023-08-15T23:00:00.000Z",
    price: 75,
    tags: ["Rock", "Live Performance", "Summer"],
    creatorId: "user202",
    managedBy: "Rockstar Events",
    imgUrl: rockConcert,
    description: "Get ready to rock with an unforgettable night of live music.",
  },
  {
    name: "Pop Sensation Night",
    is_virtual: true,
    location: "Virtual Stage",
    startDatetime: "2023-08-22T20:00:00.000Z",
    endDatetime: "2023-08-22T22:30:00.000Z",
    price: 25,
    tags: ["Pop", "Virtual Concert", "Chart-Toppers"],
    creatorId: "user305",
    managedBy: "Global Entertainment Network",
    imgUrl: popConcert,
    description:
      "Join us for a virtual pop sensation showcase from top artists.",
  },
  {
    name: "Jazz Elegance",
    is_virtual: false,
    location: "Royal Opera House",
    startDatetime: "2023-09-05T19:30:00.000Z",
    endDatetime: "2023-09-05T22:00:00.000Z",
    price: 90,
    tags: ["Jazz", "Elegant Setting", "Cultural Night"],
    creatorId: "user518",
    managedBy: "Harmony Productions",
    imgUrl: jazzConcert,
    description:
      "Indulge in an evening of sophisticated jazz in a grand setting.",
  },
  {
    name: "Indie Vibes Fest",
    is_virtual: false,
    location: "City Park Amphitheater",
    startDatetime: "2023-09-15T17:00:00.000Z",
    endDatetime: "2023-09-16T23:00:00.000Z",
    price: 40,
    tags: ["Indie", "Outdoor Festival", "Local Bands"],
    creatorId: "user752",
    managedBy: "Indie Beats Collective",
    imgUrl: indieConcert,
    description: "Experience the best indie bands in an open-air festival.",
  },
  {
    name: "Classic Symphony Gala",
    is_virtual: false,
    location: "Grand Hall Symphony",
    startDatetime: "2023-10-01T18:30:00.000Z",
    endDatetime: "2023-10-01T21:30:00.000Z",
    price: 120,
    tags: ["Classical", "Orchestra", "Elegant Evening"],
    creatorId: "user936",
    managedBy: "Symphony Events Management",
    imgUrl: classicalConcert,
    description:
      "Immerse yourself in the timeless beauty of classical symphony.",
  },
  {
    name: "Latin Grooves Fiesta",
    is_virtual: false,
    location: "Salsa Street Plaza",
    startDatetime: "2023-10-15T19:00:00.000Z",
    endDatetime: "2023-10-16T00:00:00.000Z",
    price: 55,
    tags: ["Latin", "Dance", "Fiesta"],
    creatorId: "user124",
    managedBy: "Salsa Rhythms Productions",
    imgUrl: latinConcert,
    description: "Move to the rhythm of sizzling Latin beats all night long.",
  },
  {
    name: "Electronica Eclipse",
    is_virtual: true,
    location: "Virtual Reality Arena",
    startDatetime: "2023-11-05T21:00:00.000Z",
    endDatetime: "2023-11-06T02:00:00.000Z",
    price: 30,
    tags: ["Electronica", "Virtual Experience", "Cutting-Edge"],
    creatorId: "user629",
    managedBy: "Digital Soundscapes",
    imgUrl: electronicConcert,
    description:
      "Dive into the virtual world of electronica, a sensory journey.",
  },
  {
    name: "Country Heartstrings",
    is_virtual: false,
    location: "Rustic Ranch Arena",
    startDatetime: "2023-11-20T16:00:00.000Z",
    endDatetime: "2023-11-20T21:30:00.000Z",
    price: 65,
    tags: ["Country", "Rustic Charm", "Heartfelt Lyrics"],
    creatorId: "user821",
    managedBy: "Country Roads Productions",
    imgUrl: countryConcert,
    description: "Let the twang of country music tug at your heartstrings.",
  },
];

export const parkEvents = [
  {
    name: "Picnic in the Park",
    is_virtual: false,
    location: "Central Park",
    startDatetime: "2023-08-20T11:00:00.000Z",
    endDatetime: "2023-08-20T15:00:00.000Z",
    price: 0,
    tags: ["Picnic", "Games", "Food"],
    creatorId: "user301",
    managedBy: "City Parks and Recreation",
    imgUrl: park,
    description: "Join us for a delightful picnic with games, music, and food.",
  },
  {
    name: "Fundraisers",
    is_virtual: false,
    location: "Sunset Park",
    startDatetime: "2023-08-25T09:00:00.000Z",
    endDatetime: "2023-08-25T10:30:00.000Z",
    price: 10,
    tags: ["Yoga", "Wellness", "Outdoors"],
    creatorId: "user402",
    managedBy: "Mindful Wellness Center",
    imgUrl: fundraiser,
    description:
      "Unwind and find inner peace with a morning yoga session in nature.",
  },
  {
    name: "Color Runs",
    is_virtual: false,
    location: "Riverside Park",
    startDatetime: "2023-09-02T10:00:00.000Z",
    endDatetime: "2023-09-03T18:00:00.000Z",
    price: 0,
    tags: ["Art", "Crafts", "Local Artists"],
    creatorId: "user503",
    managedBy: "Community Arts Collective",
    imgUrl: colorRun,
    description:
      "Explore a showcase of local art, crafts, and creativity in the park.",
  },
  {
    name: "Outdoor Movie Night",
    is_virtual: false,
    location: "Meadowview Park",
    startDatetime: "2023-09-10T19:30:00.000Z",
    endDatetime: "2023-09-10T22:00:00.000Z",
    price: 0,
    tags: ["Movies", "Family", "Entertainment"],
    creatorId: "user604",
    managedBy: "Neighborhood Association",
    imgUrl: movie,
    description:
      "Grab your blankets and popcorn for a family movie night under the stars.",
  },
  {
    name: "Fitness Bootcamp",
    is_virtual: false,
    location: "Greenway Park",
    startDatetime: "2023-09-18T08:00:00.000Z",
    endDatetime: "2023-09-18T09:30:00.000Z",
    price: 15,
    tags: ["Fitness", "Exercise", "Health"],
    creatorId: "user705",
    managedBy: "FitLife Gym",
    imgUrl: fitness,
    description:
      "Challenge yourself with a high-intensity fitness bootcamp in the park.",
  },
  {
    name: "Group Paint",
    is_virtual: false,
    location: "Greenway Park",
    startDatetime: "2023-09-18T08:00:00.000Z",
    endDatetime: "2023-09-18T09:30:00.000Z",
    price: 15,
    tags: ["Art", "Creativity", "Painting"],
    creatorId: "user705",
    managedBy: "Artistic Collective",
    imgUrl: paint,
    description:
      "Express your creativity with a group painting session in the park.",
  },
];
