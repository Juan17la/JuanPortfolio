import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  layer: number;
}

interface NebulaBlob {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  gray: number;
  phase: number;
}

export default function NebulaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Grayscale blob values
    const blobGrays = [40, 55, 70, 45, 60, 35];

    // Create grayscale nebula blobs
    const blobs: NebulaBlob[] = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: 200 + Math.random() * 300,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      gray: blobGrays[i % blobGrays.length],
      phase: Math.random() * Math.PI * 2,
    }));

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 180; i++) {
      const layer = Math.random();
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: layer < 0.3 ? 1 + Math.random() : layer < 0.7 ? 2 + Math.random() * 2 : 3 + Math.random() * 3,
        opacity: layer < 0.3 ? 0.15 + Math.random() * 0.2 : layer < 0.7 ? 0.3 + Math.random() * 0.3 : 0.5 + Math.random() * 0.4,
        layer,
      });
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    let time = 0;

    const draw = () => {
      time += 0.005;
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, w, h);

      // Draw grayscale nebula blobs
      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.radius) blob.x = w + blob.radius;
        if (blob.x > w + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = h + blob.radius;
        if (blob.y > h + blob.radius) blob.y = -blob.radius;

        blob.phase += 0.002;

        const pulse = 1 + Math.sin(blob.phase) * 0.15;
        const r = blob.radius * pulse;
        const g = blob.gray;

        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, r);
        grad.addColorStop(0, `rgba(${g}, ${g}, ${g + 5}, 0.4)`);
        grad.addColorStop(0.4, `rgba(${g}, ${g}, ${g + 5}, 0.15)`);
        grad.addColorStop(1, `rgba(${g}, ${g}, ${g + 5}, 0)`);

        ctx.fillStyle = grad;
        ctx.fillRect(blob.x - r, blob.y - r, r * 2, r * 2);
      });

      // Subtle connection lines
      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          const dx = blobs[i].x - blobs[j].x;
          const dy = blobs[i].y - blobs[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 400) {
            ctx.beginPath();
            ctx.moveTo(blobs[i].x, blobs[i].y);
            ctx.lineTo(blobs[j].x, blobs[j].y);
            ctx.strokeStyle = `rgba(120, 120, 130, ${0.03 * (1 - dist / 400)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      // Draw grayscale particles
      particles.forEach((p) => {
        const mouseInfluence = p.layer > 0.5 ? 0.02 : 0.005;
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250 && dist > 0) {
          p.vx += (dx / dist) * mouseInfluence;
          p.vy += (dy / dist) * mouseInfluence;
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const twinkle = 0.7 + Math.sin(time * 3 + p.x * 0.01 + p.y * 0.01) * 0.3;
        const baseGray = 160 + Math.floor(p.layer * 60);
        const alpha = p.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseGray}, ${baseGray}, ${baseGray + 10}, ${alpha})`;
        ctx.fill();

        // Glow for larger particles
        if (p.size > 2) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          glow.addColorStop(0, `rgba(180, 180, 190, ${0.12 * twinkle * p.opacity})`);
          glow.addColorStop(1, 'rgba(180, 180, 190, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Vignette
      const vignette = ctx.createRadialGradient(w / 2, h / 2, w * 0.3, w / 2, h / 2, w * 0.8);
      vignette.addColorStop(0, 'rgba(10, 10, 15, 0)');
      vignette.addColorStop(1, 'rgba(10, 10, 15, 0.75)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
