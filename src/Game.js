import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import logo from './assets/logo.jpg';

const Game = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    // Phaser game configuration
    const config = {
      type: Phaser.AUTO,  // Phaser will automatically choose WebGL or Canvas
      width: window.innerWidth,         // Game width
      height: window.innerHeight,        // Game height
      parent: gameContainerRef.current, // The div where the game will be rendered
      scene: {
        preload,
        create,
        update,
      }
    };

    // Initialize the Phaser game instance with the configuration
    const game = new Phaser.Game(config);

    // Preload function to load assets before starting the game
    function preload() {
      this.load.image('logo', logo);  // Replace with your own asset
    }

    // Create function to initialize game objects
    function create() {
      const logo = this.add.image(400, 300, 'logo');  // Add the logo image to the center
      this.tweens.add({
        targets: logo,
        y: 100,
        x: 100,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        repeat: -1
      });
    }

    // Update function for the game loop (e.g., movement, logic)
    function update() {
      // Game logic goes here
    }

    // Clean up the Phaser game instance when the component unmounts
    return () => {
      game.destroy(true);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <div ref={gameContainerRef}></div>;  // The game will render into this div
};

export default Game;
