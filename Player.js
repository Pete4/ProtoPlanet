function Player(id,name) {
  this.id = id;
  this.x = 0;
  this.y = 0;
  this.angle = 270;
  this.name = name;
  this.canvasSize = {width:1980,height:1024};
  this.fuel = 60;
  this.junk = 0;
  this.health = 1000;
  this.shield = 0;
  this.cash = 5000;
  this.width = 64;
  this.height = 64;
  this.accelerationX = 20; //fixed
  this.accelerationY = 20; //fixed
  this.speedX = 0;
  this.speedY = 0;
  this.speedMax = 100; // px/sec
  this.forwardSpeed = 100; // px/sec
  this.rotationSpeed = 160; // deg/sec
  this.lastMovedTime = Date.now();
  this.ping = 0;
  this.pingStart = 0;
  this.keyState = {};
  this.state = 0;
  this.holdLevel = 0;
  this.weaponLevel = 0;
  this.engineLevel = 0;
  this.starterShip = false;
  this.lastCollisionTime = 0;
  this.hitShop = false;
  this.lastFiredTime = 0;

  return {
    id: this.id,
    x: this.x,
    y: this.y,
    angle: this.angle,
    name: this.name,
    canvasSize: this.canvasSize,
    fuel: this.fuel,
    junk: this.junk,
    health: this.health,
    shield: this.shield,
    cash: this.cash,
    width: this.width,
    height: this.height,
    accelerationX: this.accelerationX,
    accelerationY: this.accelerationY,
    speedX: this.speedX,
    speedY: this.speedY,
    speedMax: this.speedMax,
    forwardSpeed: this.forwardSpeed,
    rotationSpeed: this.rotationSpeed,
    lastMovedTime: this.lastMovedTime,
    ping: this.ping,
    pingStart: this.pingStart,
    keyState: this.keyState,
    state: this.state,
    weaponLevel: this.weaponLevel,
    holdLevel: this.holdLevel,
    engineLevel: this.engineLevel,
    starterShip: this.starterShip,
    lastCollisionTime: this.lastCollisionTime,
    hitShop: this.hitShop,
    lastFiredTime: this.lastFiredTime
  };
}
exports.Player = Player;