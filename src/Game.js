// import React, { useEffect, useRef } from 'react';
// import Phaser from 'phaser';
// import logo from './assets/logo.jpg';
// import "./Game.css";

// const Game = () => {
//   const gameContainerRef = useRef(null);

//   useEffect(() => {
//     // Phaser game configuration
//     const config = {
//       type: Phaser.AUTO,  // Phaser will automatically choose WebGL or Canvas
//       width: window.innerWidth,         // Game width
//       height: window.innerHeight,        // Game height
//       parent: gameContainerRef.current, // The div where the game will be rendered
//       scene: {
//         preload,
//         create,
//         update,
//       }
//     };

//     // Initialize the Phaser game instance with the configuration
//     const game = new Phaser.Game(config);

//     // Preload function to load assets before starting the game
//     function preload() {
//       this.load.image('logo', logo);  // Replace with your own asset
//     }

//     // Create function to initialize game objects
//     function create() {
//       const logo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'logo'); 
//       logo.setScale(0.5); 
//       this.tweens.add({
//         targets: logo,
//         y: this.cameras.main.centerY - 100,
//         x: this.cameras.main.centerX - 100,
//         duration: 1000,
//         ease: 'Power2',
//         yoyo: true,
//         repeat: -1
//       });
//     }

//     // Update function for the game loop (e.g., movement, logic)
//     function update() {
//       // Game logic goes here
//     }

//     // Clean up the Phaser game instance when the component unmounts
//     return () => {
//       game.destroy(true);
//     };
//   }, []); // Empty dependency array ensures this runs once when the component mounts

//   return <div ref={gameContainerRef}></div>;  // The game will render into this div
// };

// export default Game;

import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import logo from './assets/logo.jpg';
import TopNav from './components/TopNav';
import "./Game.css";

const Game = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight - 50, // Adjust height to account for the top nav
      parent: gameContainerRef.current,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload,
        create,
        update,
      }
    };

    const game = new Phaser.Game(config);

    let player, cursors, scoreText, score = 0, stars;

    function preload() {
      this.load.image('logo', logo);
      this.load.image('star', 'https://examples.phaser.io/assets/sprites/star.png');
      this.load.image('ground', 'https://examples.phaser.io/assets/sprites/platform.png');
    }

    function create() {
      const platforms = this.physics.add.staticGroup();
      platforms.create(400, 568, 'ground').setScale(2).refreshBody();
      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');

      player = this.physics.add.sprite(100, 450, 'logo').setScale(0.2);
      player.setBounce(0.2);
      player.setCollideWorldBounds(true);

      cursors = this.input.keyboard.createCursorKeys();

      stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
      });

      stars.children.iterate((child) => {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });

      this.physics.add.collider(player, platforms);
      this.physics.add.collider(stars, platforms);
      this.physics.add.overlap(player, stars, collectStar, null, this);

      scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '32px',
        fill: '#000',
      });
    }

    function update() {
      if (cursors.left.isDown) {
        player.setVelocityX(-160);
      } else if (cursors.right.isDown) {
        player.setVelocityX(160);
      } else {
        player.setVelocityX(0);
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
      }
    }

    function collectStar(player, star) {
      star.disableBody(true, true);
      score += 10;
      scoreText.setText(`Score: ${score}`);
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div>
      <TopNav /> {/* Render TopNav above the game */}
      <div ref={gameContainerRef} style={{ height: 'calc(100vh - 50px)' }}></div>
    </div>
  );
};

export default Game;
