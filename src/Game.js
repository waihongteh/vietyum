import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import TopNav from './components/TopNav';
import basketImg from './assets/basket.png';
import friesImg from './assets/fries.png';
import vegeImg from './assets/vege.png';
import "./Game.css";

const Game = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight - 50, // Account for top nav
      parent: gameContainerRef.current,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    let basket, cursors, stars, bombs, scoreText, score = 0, gameOver = false, speed = 200;

    function preload() {
      this.load.image('basket', basketImg);
      this.load.image('star', vegeImg);
      this.load.image('bomb', friesImg);
    }

    function create() {
      // Background color
      this.cameras.main.setBackgroundColor('#87CEEB');

      // Basket
      basket = this.physics.add.sprite(400, 550, 'basket').setScale(0.2);
      basket.setCollideWorldBounds(true);

      // Stars group
      stars = this.physics.add.group();

      // Bombs group
      bombs = this.physics.add.group();

      // Collisions
      this.physics.add.overlap(basket, stars, collectStar, null, this);
      this.physics.add.overlap(basket, bombs, hitBomb, null, this);

      // Score text
      scoreText = this.add.text(16, 16, 'Score: 0', {
        fontSize: '24px',
        fill: '#000',
      });

      // Input
      cursors = this.input.keyboard.createCursorKeys();

      // Spawn stars and bombs
      let spawnInterval = 1000;
      this.time.addEvent({
        delay: spawnInterval,
        callback: () => {
          spawnObjects();
          if (spawnInterval > 200) {
            spawnInterval -= 25;
          }
        },
        callbackScope: this,
        loop: true,
      });
    }

    function update() {
      if (gameOver) return;

      if (cursors.left.isDown) {
        basket.setVelocityX(-1500);
      } else if (cursors.right.isDown) {
        basket.setVelocityX(1500);
      } else {
        basket.setVelocityX(0);
      }
    }

    function collectStar(basket, star) {
      star.disableBody(true, true);
      score += 10;
      scoreText.setText(`Score: ${score}`);
      speed += 25; // Increase speed for progression
    }

    function hitBomb(basket, bomb) {
      this.physics.pause();
      basket.setTint(0xff0000);
      gameOver = true;
      scoreText.setText('Game Over! Press R to Restart.');
      this.input.keyboard.on('keydown-R', () => {
        window.location.reload();
      });
    }

    function spawnObjects() {
      if (gameOver) return;

      // Randomly spawn stars and bombs
      const randomX = Phaser.Math.Between(50, window.innerWidth - 50);

      if (Math.random() < 0.7) {
        const star = stars.create(randomX, 0, 'star').setScale(0.2);
        star.setVelocityY(speed);
      } else {
        const bomb = bombs.create(randomX, 0, 'bomb').setScale(0.2);
        bomb.setVelocityY(speed);
      }
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
