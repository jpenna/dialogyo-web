let avatarId = 0;

const dyosList = [
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
  { avatar: `https://api.adorable.io/avatars/70/${avatarId++}` },
]

const repliesList = [
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "I don't agree with you...",
    name: 'Dupty Dup',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.",
    name: 'Break Cheese',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "Yeaaaahhh!",
    name: 'Grizzly Bear',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)",
    name: 'Huffle Morg',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "I don't have to account for anything to you.",
    name: 'Dupty Dup',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "The first step in freezing out competitors is to create a superior product.",
    name: 'Break Cheese',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "After finding out her horrible secret, the son froze his mother out of his life.",
    name: 'Grizzly Bear',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "The torrential downpour would account for the saturated state of the land.",
    name: 'Huffle Morg',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "German speakers accounted for 37% of the population.",
    name: 'Dupty Dup',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "Your trousers need to dry out before you put them on.",
    name: 'Break Cheese',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "We killed off the Dodo by over-hunting",
    name: 'Grizzly Bear',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "Could you bring in the groceries?",
    name: 'Huffle Morg',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "The authorities are trying to crack down on drunk driving during the holidays.",
    name: 'Dupty Dup',
  },
  {
    avatar: `https://api.adorable.io/avatars/70/${avatarId++}`,
    body: "Hillary Clinton (born 1947) is an American politician, diplomat, lawyer, and writer. She was First Lady of the United States from 1993 to 2001, a U.S. senator from New York from 2001 to 2009, and the 67th secretary of state from 2009 to 2013. As a Democrat running in the 2016 presidential election, she became the first woman to receive the nomination of a major U.S. political party. Clinton was raised in the Chicago suburb of Park Ridge. She graduated from Wellesley College, and in 1973 earned a law degree from Yale, where she met future president Bill Clinton; they married in 1975. She was appointed the first female chair of the Legal Services Corporation in 1978.",
    name: 'Huffle Morg',
  },
]

export default [
  {
    id: '129vn',
    headline: 'My Title',
    body: `Read more about how to adapt styling based on props in the Adapting based on props section.

    The properties that are passed into an interpolated function get attached a special property, theme, which is injected by a higher level ThemeProvider component. Check the section on Theming for more information on this.`,
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(0, 4),
    repliesList: [],
    tags: ['styling', 'css', 'theming', 'provider', 'web design', 'computer life'],
  },
  {
    id: '19vn',
    headline: 'My Title',
    body: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    author: {
      name: 'Break Cheese',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList,
    repliesList: [...repliesList].splice(3, 8),
    tags: ['design', 'style', 'sketch skills'],
  },
  {
    id: '12vn',
    headline: 'My Title',
    body: `third-person singular simple present adds on, present participle adding on, simple past and past participle added on)
    To incorporate (something extra, often an amount of money) into something else (often a bill).
    To put an expansion onto a building, usually a home.`,
    author: {
      name: 'Grizzly Bear',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList: [],
    repliesList: [...repliesList].splice(9, 11),
    tags: ['word', 'english', 'add on'],
  },
  {
    id: '129v',
    headline: 'My Title',
    body: `Wooden Arduino Knocking Calculator: This is a mathematical invention made by using Arduino. In this project we design a calculator by implementing the knock sensor (sound sensor) in a wooden box. To perform the mathematical operations, we run the Arduino program in computer.
    Smartwatch Prototype Turns Your Wrist into a Joystick: Smart watches can be used as an alternative to the smart phones. But for operating these smart watches it is necessary to use another hand. So, an interactive smart watch that can be controlled using gestures of the hand to which it is held is shown here. This contains several IR sensors, piezo vibration sensor and an Arduino board.
    This Arduino G Meter Shows How Fast Your Car Really Is!: This project shows how fast your car is driving. It uses Arduino along with acceleration sensor. This project shows how many G’s that this car is pulling.
    Smoke Detection using MQ-2 Gas Sensor: Smoke detection is done using MQ2 smoke sensor. When the smoke level greater than a certain level, a buzzer starts ringing and a red LED is switched ON.
    Ultrasonic Map-Maker using an Arduino Yun: This project uses ultrasonic sensor and Arduino. This sensor transmits ultrasonic waves and if nay obstacle is present it reflects back. Arduino calculates the distance between the obstacle by using the time taken by the waves to reflect back. Servo motor rotates the sensor at particular angle.
    Reef Controller: Reef/aquarium maintenance is bit difficult task. This system allows the user to monitor the temperature, lighting etc of the tank. Arduino sends the status of these sensors the user, accordingly user can control these parameters.
    Automatic Pet Watering System: The automatic pet watering system, monitors the water level in the tub. If the water level is below the fixed, it automatically fills water into it. Water level is sensed using ultrasonic sensor.
    Arduino Based Distance Sensor: Arduino based distance sensor uses 2 sensors along with Arduino. The two sensors are infrared proximity sensor and ultrasonic range finding sensor. The IR sensor has a light source, which bounces the infrared light from the objects to the sensor. The ultrasonic range finer sensor produces the high frequency sound waves and calculates the echo time, to determine the distance.`,
    author: {
      name: 'Huffle Morg',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(10),
    repliesList: [...repliesList].splice(2, 10),
    tags: ['arduino', 'iot', 'microcontroller', 'dit', 'arm', 'geek style', '8-bit atmel', 'arduino starter kit'],
  },
];
