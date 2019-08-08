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

export default [
  {
    headline: 'My Title',
    body: `Read more about how to adapt styling based on props in the Adapting based on props section.

    The properties that are passed into an interpolated function get attached a special property, theme, which is injected by a higher level ThemeProvider component. Check the section on Theming for more information on this.`,
    author: {
      name: 'Dupty Dup',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'private',
    dyosList: [...dyosList].splice(9),
    tags: ['styling', 'css', 'theming', 'provider', 'web design', 'computer life'],
  },
  {
    headline: 'My Title',
    body: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    author: {
      name: 'Break Cheese',
      avatar: `https://api.adorable.io/avatars/70/${avatarId++}`
    },
    mode: 'public',
    dyosList,
    tags: ['design', 'style', 'sketch skills'],
  },
  {
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
    tags: ['word', 'english', 'add on'],
  },
  {
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
    tags: ['arduino', 'iot', 'microcontroller', 'dit', 'arm', 'geek style', '8-bit atmel', 'arduino starter kit'],
  },
];
