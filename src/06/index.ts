export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

// Time:      7  15   30
// Distance:  9  40  200

//Your toy boat has a starting speed of zero millimeters per millisecond.
//For each whole millisecond you spend at the beginning of the race holding down the button,
//the boat's speed increases by one millimeter per millisecond.
// Distance = speed * time => d(mm) = s(mm/ms) * t(ms)
// Distance = holdtime * (recordTime - holdtime)

// wins possible should be all the hold times between
// - the minimum hold time necessary to win
// - the maximum hold time necessary to win
//
// winning means you beat the record (d > record)
//
// So for hold time (t) the formula is: t * (time - t) > record
//
// For simplicity, let's aim for the spot where you tie the record:
// = t * (time - t) = record
// = -t^2 + t(time) = record
// = -t^2 + t(time) - record = 0
// ... a quadratic equation!

// to solve the quadratic, first we need to find the discriminant D:
// quadratic formula is ax^2 + bx + c (x is our unknown variable t)
// D = b^2 - 4ac
// a = -1
// b = time
// c = -record
// therefore, D = time^2 - 4 * -1 * -record = time^2 - 4 * record
const D = (time: number, distanceRecord: number) =>
  time * time - 4 * distanceRecord;

const totalDistance = (speed: number, time: number) => speed * time;

export const beatBoatRecord = (data: Array<string>) => {
  const time = data[0]
    .split(":")[1]
    .trim()
    .split(" ")
    .reduce((acc: number[], cur: string) => {
      if (cur !== "") {
        acc.push(+cur);
      }
      return acc;
    }, []);
  const distance = data[1]
    .split(":")[1]
    .trim()
    .split(" ")
    .reduce((acc: number[], cur: string) => {
      if (cur !== "") {
        acc.push(+cur);
      }
      return acc;
    }, []);

  const timeDistancePairs = [
    [time[0], distance[0]],
    [time[1], distance[1]],
    [time[2], distance[2]],
  ];

  let winningWays: Array<number> = [];

  for (const record of timeDistancePairs) {
    // 7     9
    const [timeRecord, distanceRecord] = record;
    //let hits = [];
    console.log(`timerecord ${timeRecord}, distancerecord ${distanceRecord}`);

    // for (let holdTime = 0; holdTime < timeRecord; holdTime++) {
    //   const boatSpeedMmMs = holdTime;
    //   const boatDistance = totalDistance(boatSpeedMmMs, timeRecord - holdTime);
    //   if (boatDistance > distanceRecord) {
    //     //console.log("holdtime", holdTime);
    //     hits.push(holdTime);
    //   }
    // }

    // now we can solve for x:
    // x = (-b +/- sqrt(D)) / 2a
    // x = (-time +/- sqrt(D)) / -2
    let shortest = Math.ceil(
      (-timeRecord + Math.sqrt(D(timeRecord, distanceRecord))) / -2
    );
    let longest = Math.floor(
      (-timeRecord - Math.sqrt(D(timeRecord, distanceRecord))) / -2
    );

    // Okay, so now we know the APPROXIMATE hold times to tie (we rounded since the hold time has to be whole numbers)
    // We need to figure out where the limit is for winning.
    // Let's back off by 1 in case rounding bumped us outside of a win.
    shortest += 1;
    longest -= 1;

    // oookay, so now we're really close to our shortest and longest times to win
    // We should only be off by 1 or 2

    // walk shortest backwards until we stop winning
    while (true) {
      const t = shortest - 1;
      if (totalDistance(t, timeRecord) > distanceRecord) {
        shortest = t;
      } else {
        break;
      }
    }

    // walk longest forward until we stop winning
    while (true) {
      const t = longest + 1;
      if (totalDistance(t, timeRecord) > timeRecord) {
        longest = t;
      } else {
        break;
      }
    }

    // console.log("hits", hits);
    winningWays.push(longest - shortest + 1);
  }
  console.log(winningWays);

  return winningWays.reduce((acc, cur) => (acc *= cur), 1);
};
