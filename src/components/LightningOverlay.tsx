"use client";
import { useEffect, useRef } from "react";

const LightningOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const boltsRef = useRef<Lightning[]>([]);

  class Lightning {
    points: { x: number; y: number }[] = [];
    forks: Lightning[] = [];
    life = 0;
    maxLife = 20 + Math.random() * 30;
    color: string;

    constructor(
      public startX: number,
      public startY: number,
      public endX: number,
      public endY: number,
      public forkLevel = 0
    ) {
      this.color = Math.random() > 0.5 ? "#00faff" : "#fff800";
      this.generatePoints();

      if (forkLevel < 2) {
        const numForks = Math.floor(Math.random() * 2);
        for (let i = 0; i < numForks; i++) {
          const forkIndex = Math.floor(Math.random() * this.points.length);
          const forkStart = this.points[forkIndex];
          const angle = Math.random() * Math.PI * 2;
          const distance = 50 + Math.random() * 50;
          const forkEndX = forkStart.x + Math.cos(angle) * distance;
          const forkEndY = forkStart.y + Math.sin(angle) * distance;
          this.forks.push(new Lightning(forkStart.x, forkStart.y, forkEndX, forkEndY, forkLevel + 1));
        }
      }
    }

    generatePoints() {
      const steps = 20;
      const dx = (this.endX - this.startX) / steps;
      const dy = (this.endY - this.startY) / steps;
      let x = this.startX;
      let y = this.startY;

      for (let i = 0; i < steps; i++) {
        x += dx + (Math.random() - 0.5) * 30;
        y += dy + (Math.random() - 0.5) * 30;
        this.points.push({ x, y });
      }
    }

    update() {
      this.life++;
      this.forks.forEach((f) => f.update());
    }

    isDead() {
      return this.life > this.maxLife;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.startX, this.startY);
      for (const p of this.points) {
        ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.globalAlpha = 1 - this.life / this.maxLife;
      ctx.stroke();
      ctx.restore();

      this.forks.forEach((f) => f.draw(ctx));
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const bolts = boltsRef.current;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    const spawnBolt = () => {
      const startX = Math.random() * canvas.width;
      const isTop = Math.random() > 0.5; // Randomly choose top or bottom
      const startY = isTop ? 0 : canvas.height; // If top, start from 0; if bottom, start from the bottom of the canvas
      const endX = Math.random() * canvas.width;
      const endY = (isTop ? 150 + Math.random() * canvas.height * 0.5 : canvas.height - (150 + Math.random() * canvas.height * 0.5));

      bolts.push(new Lightning(startX, startY, endX, endY));

      // Cap to 100 bolts
      if (bolts.length > 50) {
        bolts.splice(0, bolts.length - 100);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.update();
        bolt.draw(ctx);
        if (bolt.isDead()) {
          bolts.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const boltInterval: ReturnType<typeof setInterval> = setInterval(() => {
      const numBoltsToSpawn = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < numBoltsToSpawn; i++) {
        spawnBolt();
      }
    }, 500);

    const flashOnClick = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        const endX = e.clientX + Math.cos(angle) * distance;
        const endY = e.clientY + Math.sin(angle) * distance;
        bolts.push(new Lightning(e.clientX, e.clientY, endX, endY));
      }

      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // When the tab is focused again, reset the canvas size and restart animation
        setCanvasSize();
        bolts.length = 0; // Clear bolts to restart fresh
      }
    };

    // Event listeners
    canvas.addEventListener("click", flashOnClick);
    window.addEventListener("resize", setCanvasSize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    animate();

    return () => {
      clearInterval(boltInterval);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("click", flashOnClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      bolts.length = 0;
    };
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
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default LightningOverlay;
