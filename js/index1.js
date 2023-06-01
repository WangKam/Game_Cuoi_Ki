const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7/2
                                  let jump_cooldown=0
                                  
                                  
                                  
const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: -2
  },
  
  //imageSrc: './img/test.png'
  imageSrc: './img/backgorru.png'
  //statusss=1;
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: '',
  scale: 2.75,
  framesMax: 6

})

const player = new Fighter({
  position: {
    x: 100,
    y: 450
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/Fire_vizard/Idle.png',
  framesMax: 8,
  scale: 2,                                       //Do lon cua nhan vat 1
  offset: {
    x: 215,                                       //bat hitbox cua nhan vat roi chinh x cho khop
    y: 157
  },
  sprites: {
    idle: {
      imageSrc: './img/Fire_vizard/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/Fire_vizard/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/Fire_vizard/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/Fire_vizard/Jump.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/Fire_vizard/Attack_1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/Fire_vizard/Hurt.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/Fire_vizard/Dead.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 30,
      y: 50/2
    },
    width: 85/2,
    height: 50/2
  }
})

const enemy = new Fighter({
  position: {
    x: 1000,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2,                                                //Do lon cua nhan vat 2
  offset: {
    x: 190,                                                 //bat hitbox cua nhan vat roi chinh x cho khop
    y: 167
  },
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/kenji/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    offset: {
      x: -170/2,
      y: 50/2
    },
    width: 170/2,
    height: 50
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

const leveles= [new levels({x:0,y:550,wide:1100,high:220,}),new levels({x:0,y:0,wide:5,high:1000,}),new levels({x:1015,y:0,wide:10,high:1000,}),new levels({x:0,y:420,wide:920,high:25,}),new levels({x:100,y:300,wide:920,high:25,}),new levels({x:100,y:170,wide:920,high:25,}),new levels({x:0,y:0,wide:1500,high:15,})]  //them levels
const buttones=[new buttons({x:30,y:500})]
let button_first_height=500+5;
let position_of_button=500;
const gateses=[new gates({x:400,y:450,wide:25,high:100})]
let default_pos_gate=450;
const horizontal_gateses=[new gates({x:010,y:300,wide:100,high:25})]
function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()                                           //attack range cua nhan vat
                                                                //c.fillStyle="red"                                                         
                                                                //c.fillRect(enemy.attackBox.position.x,enemy.attackBox.position.y,enemy.attackBox.width,enemy.attackBox.height)
                                                                //c.fillRect(player.attackBox.position.x,player.attackBox.position.y,player.attackBox.width,player.attackBox.height)
                                                               
                                                                if (jump_cooldown!=0)
                                                               {
                                                                  setTimeout(decrese_jump(jump_cooldown),1000)        
                           
                                                                }        
                                                                                                          
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  //enemy.update()                                                 
                                                                //hitbox cua nhan vat
                                                                //c.fillStyle="blue"                                                           
                                                                //c.fillRect(enemy.position.x,enemy.position.y,enemy.width,enemy.height)
                                                                //c.fillRect(player.position.x,player.position.y,player.width,player.height)
  player.velocity.x = 0
  //enemy.velocity.x = 0
                                                                //test levels
                                                                //c.fillStyle="yellow"                                                           
                                                                //c.fillRect(200,300,100,100/2)
                                                                //c.fillRect(player.position.x,player.position.y,player.width,player.height)

                                                                  leveles.forEach(level=>{
                                                                    level.draw()
                                                                  })
                                                                  buttones.forEach(buttonsss=>{
                                                                    buttonsss.draw()
                                                                  })
                                                                  gateses.forEach(gate=>{
                                                                    gate.draw()
                                                                  })
                                                                  gateses.forEach(gate=>{
                                                                    gate.draw()
                                                                  })
                                                                  horizontal_gateses.forEach(gate=>{gate.draw()})

                                                                          //buttons

                                                                  buttones.forEach(buttonsss=>{
                                                                    
                                                                    
                                                                    if (player.position.x+player.width>=buttonsss.position.x&&player.position.x<=buttonsss.position.x+buttonsss.width&&player.position.y+player.height>=buttonsss.position.y&&player.position.y<buttonsss.position.y+buttonsss.height)
                                                                    {
                                                                      buttonsss.height=45
                                                                      buttonsss.position.y=button_first_height;
                                                                      
                                                                      

                                                                      gateses.forEach(gate=>{
                                                                        gate.velocity=2;
                                                                      })
                                                                      horizontal_gateses.forEach(gatee=>{
                                                                       // console.log("gatee position: ",gatee.position.y+gatee.height)
                                                                        if (gatee.position.y+gatee.height<=450&&gatee.position.y>=300)
                                                                        {// console.log("asdas");
                                                                          gatee.velocity=2;
                                                                        } else {gatee.velocity=0;}
                                                                        //gatee.velocity=2;
                                                                      })

                                                                    } 
                                                                    else {buttonsss.height=50,
                                                                      buttonsss.position.y=position_of_button,
                                                                      
                                                                      gateses.forEach(gate=>{
                                                                        //console.log(default_pos_gate);
                                                                        if (gate.position.y>default_pos_gate)
                                                                        {gate.velocity=-1;
                                                                      }
                                                                      else {gate.velocity=0;}
                                                                        
                                                                      })
                                                                    
                                                                    }
                                                                  })

                                                                  


                                                                  
                                                                  leveles.forEach(level=>{
                                                                    if  //gravity cua levels
                                                                  (
                                                                    player.position.y+player.height<=level.position.y&&player.position.y+player.height+player.velocity.y>=level.position.y&&player.position.x+player.width>=level.position.x&&player.position.x<=level.position.x+level.width
                                                                  ) {player.velocity.y=0}

                                                                  
                                                                  if  //gravity cua levels phia duoi
                                                                  (
                                                                    player.position.y<=level.position.y+level.height&&player.position.x+player.width>=level.position.x&&player.position.x<=level.position.x+level.width&&player.position.y>=level.position.y+level.height-5
                                                                  ) {player.velocity.y=0.5}

                                                                   
                                                                  })
                                                                  
 // player movementdd  
  if (keys.a.pressed) {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.d.pressed) {
    player.velocity.x = 5
    player.switchSprite('run')
  } else {
    player.switchSprite('idle')
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  // if (keys.ArrowLeft.pressed) {
  //   enemy.velocity.x = -5
  //   enemy.switchSprite('run')
  // } else if (keys.ArrowRight.pressed) {
  //   enemy.velocity.x = 5
  //   enemy.switchSprite('run')
  // } else {
  //   enemy.switchSprite('idle')
  // }

  // jumping
  // if (enemy.velocity.y < 0) {
  //   enemy.switchSprite('jump')
  // } else if (enemy.velocity.y > 0) {
  //   enemy.switchSprite('fall')
  // }

  // detect for collision & enemy gets hit
  // if (
  //   rectangularCollision({
  //     rectangle1: player,
  //     rectangle2: enemy
  //   }) &&
  //   player.isAttacking &&
  //   player.framesCurrent === 4
  // ) {
  //   enemy.takeHit()
  //   player.isAttacking = false

  //   gsap.to('#enemyHealth', {
  //     width: enemy.health + '%'
  //   })
  // }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    player.isAttacking = false
  }

  // this is where our player gets hit
  // if (
  //   rectangularCollision({
  //     rectangle1: enemy,
  //     rectangle2: player
  //   }) &&
  //   enemy.isAttacking &&
  //   enemy.framesCurrent === 2
  // ) {
  //   player.takeHit()
  //   enemy.isAttacking = false

  //   gsap.to('#playerHealth', {
  //     width: player.health + '%'
  //   })
  // }

  // if player misses
  // if (enemy.isAttacking && enemy.framesCurrent === 2) {
  //   enemy.isAttacking = false
  // }

  // // end game based on health
  // if (enemy.health <= 0 || player.health <= 0) {
  //   determineWinner({ player, enemy, timerId })
  // }
                                                                   
                                                                      leveles.forEach(level=>{
  
                                                                    if 
                                                                  (
                                                                    player.position.y+player.height<=level.position.y+level.height&&player.position.y+player.height>=level.position.y
                                                                  )
                                                                  { 
                                                                    if (player.position.x+player.width+player.velocity.x>=level.position.x&&player.position.x<=level.position.x+level.width)
                                                                    {player.velocity.x=0
                                                                    }
                                                                  
                                                                  }
                                                                  })

                                                                  gateses.forEach(gate=>{
  
                                                                    if 
                                                                  (
                                                                    player.position.y+player.height<=gate.position.y+gate.height&&player.position.y+player.height>=gate.position.y
                                                                  )
                                                                  { 
                                                                    if (player.position.x+player.width+player.velocity.x>=gate.position.x&&player.position.x<=gate.position.x+gate.width)
                                                                    {player.velocity.x=0
                                                                   }
                                                                
                                                                  }
                                                                  })
}

animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true

        break
      case 'a':
        keys.a.pressed = true
        break
      case 'w':
       if (jump_cooldown==0)
       {
        player.velocity.y = -20/2;
          jump_cooldown=0;
       }
          
        
        break
      case ' ':
        player.attack()
        break
    }
  }

  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true

        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true

        break
      case 'ArrowUp':
        enemy.velocity.y = -20/2
        break
      case 'ArrowDown':
        enemy.attack()

        break
    }
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})
