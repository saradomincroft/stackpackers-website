"use client";
import { useEffect, useRef } from "react";

const LightningCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Grab canvas and its 2D context
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Set canvas to fill the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Lightning bolt class
    class Lightning {
      points: { x: number; y: number }[] = []; // Zig-zag path points
      forks: Lightning[] = [];                // Array of branches from this bolt
      life = 0;                               // How long this bolt has existed
      maxLife = 35 + Math.random() * 50;      // How long this bolt will last
      color: string;                          // Bolt color (blue or yellow)

      constructor(
        public startX: number,
        public startY: number,
        public endX: number,
        public endY: number,
        public forkLevel = 0 
      ) {
        this.color = Math.random() > 0.5 ? "#00faff" : "#fff800";

        this.generatePoints(); // Create bolt path

        // Optionally add forks if not too deep
        if (forkLevel < 2) {
          const numForks = Math.floor(Math.random() * 2);
          for (let i = 0; i < numForks; i++) {
            const forkIndex = Math.floor(this.points.length * Math.random()); // Random point to fork from
            const forkStart = this.points[forkIndex];
            const angle = Math.random() * Math.PI * 2; // Random angle
            const distance = 50 + Math.random() * 50;
            const forkEndX = forkStart.x + Math.cos(angle) * distance;
            const forkEndY = forkStart.y + Math.sin(angle) * distance;

            // Add a new Lightning instance as a fork
            this.forks.push(
              new Lightning(forkStart.x, forkStart.y, forkEndX, forkEndY, forkLevel + 1)
            );
          }
        }
      }

      // Build a path of zigzag points from start to end
      generatePoints() {
        const steps = 20;
        const dx = (this.endX - this.startX) / steps;
        const dy = (this.endY - this.startY) / steps;
        let x = this.startX;
        let y = this.startY;

        for (let i = 0; i < steps; i++) {
          x += dx + (Math.random() - 0.5) * 30; // Add random jitter
          y += dy + (Math.random() - 0.5) * 30;
          this.points.push({ x, y });
        }
      }

      // Advance the bolt's lifetime and update forks
      update() {
        this.life++;
        this.forks.forEach(f => f.update());
      }

      // Check if bolt should disappear
      isDead() {
        return this.life > this.maxLife;
      }

      // Draw the bolt to the canvas
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        for (const p of this.points) {
          ctx.lineTo(p.x, p.y); // Draw line to each point
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 4; // Small glow
        ctx.globalAlpha = 1 - this.life / this.maxLife; // Fade out over time
        ctx.stroke();
        ctx.restore();

        // Recursively draw forks
        this.forks.forEach(f => f.draw(ctx));
      }
    }

    const bolts: Lightning[] = []; // Array of all active bolts

    // Create a new lightning bolt at a random position
    const spawnBolt = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height * 0.5;
      const endX = Math.random() * canvas.width;
      const endY = startY + 100 + Math.random() * canvas.height * 0.5;
      bolts.push(new Lightning(startX, startY, endX, endY));
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the screen

      bolts.forEach((bolt, i) => {
        bolt.update();
        bolt.draw(ctx);
        if (bolt.isDead()) bolts.splice(i, 1); // Remove faded bolts
      });

      requestAnimationFrame(animate); // Continue animation
    };

    // Regularly spawn new bolts
    const interval = setInterval(() => {
        const numBoltsToSpawn = Math.floor(Math.random() * 4) + 1;    for (let i = 0; i < numBoltsToSpawn; i++) {
        spawnBolt();
        }
    }, 500); 

    animate(); // Start animation

    // Resize canvas when window changes
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        pointerEvents: "none", 
      }}
    />
  );
};

export default LightningCanvas;
