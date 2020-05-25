const parkImgUrl = require("./imagesDB");

const initialVisits = [
  {
    id: 1,
    parkName: `Chase Field`,
    parkImg: `img.url`,
    date: { year: 2017, month: 10, day: 4 },
    teams: { home: `D-Backs`, away: `Rockies` },
    notes: `Game was amazing! Maybe had too much to drink. Energy was high as expected for a one and done playoff game. Archie's triple really set the tone.`,
    rating: 10,
  },
  {
    id: 2,
    parkName: `Comerica Park`,
    parkImg: `img.url`,
    date: { year: 2017, month: 6, day: 13 },
    teams: { home: `Tigers`, away: `D-Backs` },
    notes: `I am in Detroit for "work". My buddy has a crush on this girl we work with, except she is in the Detroit office. So we forced a business trip for us to work the week here. I made sure the trip was this week so I could go to the game. The park is pretty. Food is baseball food. Beer is above average. Coney Island is amazing.`,
    rating: 6,
  },
  {
    id: 3,
    parkName: `Camden Yards`,
    parkImg: `img.url`,
    date: { year: 2016, month: 9, day: 23 },
    teams: { home: `Orioles`, away: `D-Backs` },
    notes: `We did not win, but Baltimore is a beautiful city. This trip has sentimental feeling attached as my dad grew up an Orioles fan and then transitioned to the D-Backs when they were established. He got to meet his idol, Boog Powell. Food was amazing. The fans were great. Can't wait to come back.  `,
    rating: 9.5,
  },
  {
    id: 4,
    parkName: `Petco Park`,
    parkImg: `img.url`,
    date: { year: 2014, month: 6, day: 27 },
    teams: { home: `Padres`, away: `D-Backs` },
    notes: `It has been a rough season for the D-Backs, but they managed to pull this one through. Embarrassingly, there were some D-Backs fans behind us that also made the trip. They felt the need to heckle the home team. Please don't do this. We sat next to some awesome locals that pointed us to some great craft beer and a BBQ stand behind center field.`,
    rating: 6.5,
  },
  {
    id: 5,
    parkName: `Minute Maid Park`,
    parkImg: `img.url`,
    date: { year: 2007, month: 6, day: 15 },
    teams: { home: `Astros`, away: `Mariners` },
    notes: `This is the only game I have attended the D-Backs didn't play in. We were in Texas for a baseball tournament and have been rained out. We took a day to visit the local team. MM Park is bland. The train feature is ok. Just feels like playing ball in a gym.`,
    rating: 4,
  },
];

let parkVisits = initialVisits.map((parks) => {
  for (let i = 0; i < parkImgUrl.length; i++) {
    if (parks.parkName === parkImgUrl[i].parkName) {
      parks.parkImg = parkImgUrl[i].imgURL;
    }
  }
  return parks;
});

let id = 6;

function updateImgs(parkId) {
  const index = parkVisits.findIndex((elem) => elem.id === parkId);
  for (let i = 0; i < parkImgUrl.length; i++) {
    if (parkVisits[index].parkName === parkImgUrl[i].parkName) {
      return (parkVisits[index].parkImg = parkImgUrl[i].imgURL);
    }
  }
  return parkVisits;
}

module.exports = {
  getPV: (req, res) => {
    res.status(200).send(parkVisits);
  },

  newPV: (req, res) => {
    const { parkName, date, teams, notes, rating } = req.body;

    const newVisit = { id, parkName, parkImg: ``, date, teams, notes, rating };

    parkVisits.push(newVisit);

    updateImgs(newVisit.id);

    id++;

    res.status(200).send(parkVisits);
  },
  updatePV: (req, res) => {
    const { pv_id } = req.params;
    const { parkName, date, teams, notes, rating } = req.body;

    const index = parkVisits.findIndex((elem) => elem.id === +pv_id);

    if (index === -1) {
      return res.status(404).send(`No visit listed`);
    }

    const updatedVisit = {
      id: +pv_id,
      parkName,
      parkImg: ``,
      date,
      teams,
      notes,
      rating,
    };

    parkVisits.splice(index, 1, updatedVisit);

    updateImgs(updatedVisit.id);

    res.status(200).send(parkVisits);
  },

  deletePV: (req, res) => {
    const { pv_id } = req.params;

    const index = parkVisits.findIndex((elem) => elem.id === +pv_id);

    parkVisits.splice(index, 1);

    res.status(200).send(parkVisits);
  },
};
