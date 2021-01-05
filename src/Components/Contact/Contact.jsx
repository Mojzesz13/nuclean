import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Contact.scss';

const Contact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    let particleArray;

    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(100, 50, 100, 100);

    function Particle(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    Particle.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    };

    Particle.prototype.update = function () {
      if (this.x + this.size > canvas.width || this.x + this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.height || this.y + this.size < 0) {
        this.directionY = -this.directionY;
      }
      this.draw();
    };

    // CREATE PARTICLE ARRAY

    function init() {
      particleArray = [];
      for (let i = 0; i < 100; i++) {
        let size = Math.random() * 20;
        // let x = Math.random() * (window.innerWidth - size * 2);
        // let y = Math.random() * (window.innerHeight - size * 2);
        let x = Math.random() * (canvas.innerWidth - size * 2);
        let y = Math.random() * (canvas.innerHeight - size * 2);
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = 'red';

        particleArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);

      for (let i = 0; i < particleArray.lenght; i++) {
        particleArray[i].update();
      }
    }

    init();
    animate();
    // const particle1 = new Particle(100, 200, 1, 1, 20, 'white');
    // particle1.draw();
  }, []);

  return <canvas ref={canvasRef} className='main-container'></canvas>;
};

export default Contact;
