function Missile(id,x,y,angle,ind,shooterID) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.health = 20;
  this.angle = angle;
  this.width = 10;
  this.height = 25;
  this.type = 'missile';
  this.lastMovedTime = Date.now();
  this.shooterID = shooterID;
  
  return {
    id: this.id,
    ind: this.ind,
    x: this.x,
    y: this.y,
    health: this.health,
    angle: this.angle,
    width: this.width,
    height: this.height,
    type: this.type,
    lastMovedTime: this.lastMovedTime,
    shooterID: this.shooterID
  };
}
exports.Missile = Missile;