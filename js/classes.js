class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    statusss=0,
  }) {
    this.position = position
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
  }
  draw() {
                          // if (statusss==1)
                          // {
                          //   c.drawImage(
                          //     this.image,
                          //     0,0,1200,500
                          //   )
                          // } 
                         //else {
      c.drawImage(
        this.image,
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width / this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width / this.framesMax) * this.scale,
        this.image.height * this.scale
      )
                          //}
    
  }

  animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}
class levels{
  constructor({x,y,wide,high, imageSrc})
  {
    this.position={
      x:x,
      y:y 
    }
    this.width=wide;
    this.height=high;
    this.image = new Image();
    this.image.src = imageSrc
  }
  draw()
  {
    c.fillStyle="pink";
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
    // c.drawImage(
    //   this.image.src,
    //   this.position.x,
    //   this.position.y,
    //   this.width,
    //   this.height
    //   )
  }
}

                                  // class levels {
                                  //   constructor({
                                  //     x,y,wide,high, imageSrc
                                  //   }) {
                                  //     this.position = 
                                  //     {x:x,
                                  //     y:y}
                                  //     this.width = wide
                                  //     this.height = high
                                  //     this.image = new Image()
                                  //     this.image.src = imageSrc
                                  //     this.scale = 1
                                  //     this.framesMax = 1
                                  //     this.framesCurrent = 0
                                  //     this.framesElapsed = 0
                                  //     this.framesHold = 5
                                  //     this.offset = offset
                                  //   }
                                  //   draw() {
                                  //     c.drawImage(
                                  //       this.image,
                                  //       this.framesCurrent * (this.image.width / this.framesMax),
                                  //       0,
                                  //       this.image.width / this.framesMax,
                                  //       this.image.height,
                                  //       this.position.x - this.offset.x,
                                  //       this.position.y - this.offset.y,
                                  //       (this.image.width / this.framesMax) * this.scale,
                                  //       this.image.height * this.scale
                                  //     )
                                  //   }
                                  // }







class buttons{
  constructor({x,y})
  {
    this.position={
      x:x,
      y:y 
    }
    this.width=50;
    this.height=50;
  }
  draw()
  {
    c.fillStyle="yellow";
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
}
class gates{
  constructor({x,y,wide,high})
  {
    this.position={
      x:x,
      y:y,
    }
    this.width=wide; //25
    this.height=high; //100
    this.velocity=0;

  }
  
  draw()
  {
    this.position.y+=this.velocity;
    c.fillStyle="green";
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
}





class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset
    })

    this.velocity = velocity
    this.width = 50/2
    this.height = 150/2
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    }
    this.color = color
    this.isAttacking
    this.health = 100
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites
    this.dead = false

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }
  }

  update() {
    this.draw()
    if (!this.dead) this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // draw the attack box
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // )

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // gravity function                   
                                      let status_gravity=0;
                                      //test blocks //horizontal blocks
                                      // if (this.position.x+this.width+this.velocity.x>=200 &&this.position.y+this.height+this.velocity.y>=450)
                                      //                           {
                                      //                             this.velocity.x=0;
                                      //                             this.position.x=165;
                                      //                           }
                                      // if (this.position.y+this.height+this.velocity.y>=450 &&this.position.x+this.width+this.velocity.x>=200&&this.position.x+this.width+this.velocity.x<=300)
                                      //                           {
                                      //                           this.velocity.y=0;
                                      //                           this.position.y=430-this.height;
                                                                
                                                                
                                      //                           }
                                                            
                                                              // if( this.position.x+this.width+this.velocity.x>=200 && this.position.x+this.width+this.velocity.x<=300 && this.position.y+this.height<=300 ) 
                                                              // {status_gravity=1;}
                                                              // else
                                                              // {status_gravity=0;}
                                                if (status_gravity==0)
                                                { 
                                                  if (this.position.y + this.height + this.velocity.y >= canvas.height) 
                                                  { 
                                                                                          // if (status_gravity==1)                  //new gravity for when player is on a block
                                                                                          // {
                                                                                          //   this.velocity.y = 0
                                                                                          // this.position.y = 430 - this.height
                                                                                          //                   console.log("<",player.position.y,player.height,player.velocity.y, player.position.y+player.height+player.velocity.y,  canvas.height - 96 ,"|",enemy.position.y,enemy.height,enemy.velocity.y, enemy.position.y+enemy.height+enemy.velocity.y,canvas.height - 96 ,">")
                                                                                        
                                                                                          // } 
                                                      
                                                        this.velocity.y = 0
                                                      this.position.y = 480 - this.height
                                                                       
                                                      
                                                  } 
                                                    else 
                                                  {this.velocity.y += gravity}
                                                } 
                                                else if(status_gravity==1) 
                                                {
                                                  if (this.position.y + this.height + this.velocity.y >= 300 ) //change this with block's y
                                                  { 
                                                                                          // if (status_gravity==1)                  //new gravity for when player is on a block
                                                                                          // {
                                                                                          //   this.velocity.y = 0
                                                                                          // this.position.y = 430 - this.height
                                                                                          //                   console.log("<",player.position.y,player.height,player.velocity.y, player.position.y+player.height+player.velocity.y,  canvas.height - 96 ,"|",enemy.position.y,enemy.height,enemy.velocity.y, enemy.position.y+enemy.height+enemy.velocity.y,canvas.height - 96 ,">")
                                                                                        
                                                                                          // } 
                                                      
                                                        this.velocity.y = 0
                                                      this.position.y = 300 - this.height
                                                                        
                                                      
                                                  } 
                                                    else 
                                                  {this.velocity.y += gravity}



                                                  
                                                }
                          

  }

  attack() {
    this.switchSprite('attack1')
    this.isAttacking = true
  }

  takeHit() {
    this.health -= 20

    if (this.health <= 0) {
      this.switchSprite('death')
    } else this.switchSprite('takeHit')
  }

  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true
      return
    }

    // overriding all other animations with the attack animation
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
        }
        break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0
        }
        break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0
        }
        break

      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.framesMax = this.sprites.fall.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.framesCurrent = 0
        }
        break

      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.framesMax = this.sprites.takeHit.framesMax
          this.framesCurrent = 0
        }
        break

      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.framesCurrent = 0
        }
        break
    }
  }
}


function decrese_jump(jump_cooldown)
{ console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  jump_cooldown=jump_cooldown-1;
}