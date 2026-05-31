export function GothDecoration() {
  return (
    <svg
      viewBox="0 0 500 600"
      className="w-full h-full max-h-[580px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mossGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a8a6e" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3d6b4f" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5a8a6e" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="darkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── OUTER ORNATE FRAME ── */}
      {/* Top-left corner flourish */}
      <path
        d="M20 80 
           C20 40, 40 20, 80 20
           C50 25, 30 50, 30 80
           C30 60, 45 45, 65 45
           C55 50, 48 60, 48 75
           C48 65, 55 58, 62 58
           C58 62, 55 68, 55 75
           L55 85 L48 85 L48 75
           M80 20
           C80 50, 60 70, 40 70
           C55 68, 68 55, 68 35
           C68 48, 58 58, 48 58"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.2"
        opacity="0.7"
        filter="url(#glow)"
      />

      {/* Top-right corner flourish */}
      <path
        d="M480 80
           C480 40, 460 20, 420 20
           C450 25, 470 50, 470 80
           C470 60, 455 45, 435 45
           C445 50, 452 60, 452 75
           C452 65, 445 58, 438 58
           C442 62, 445 68, 445 75
           L445 85 L452 85 L452 75
           M420 20
           C420 50, 440 70, 460 70
           C445 68, 432 55, 432 35
           C432 48, 442 58, 452 58"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.2"
        opacity="0.7"
        filter="url(#glow)"
      />

      {/* Bottom-left corner flourish */}
      <path
        d="M20 520
           C20 560, 40 580, 80 580
           C50 575, 30 550, 30 520
           C30 540, 45 555, 65 555
           C55 550, 48 540, 48 525
           C48 535, 55 542, 62 542
           C58 538, 55 532, 55 525
           L55 515 L48 515 L48 525
           M80 580
           C80 550, 60 530, 40 530
           C55 532, 68 545, 68 565
           C68 552, 58 542, 48 542"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.2"
        opacity="0.7"
        filter="url(#glow)"
      />

      {/* Bottom-right corner flourish */}
      <path
        d="M480 520
           C480 560, 460 580, 420 580
           C450 575, 470 550, 470 520
           C470 540, 455 555, 435 555
           C445 550, 452 540, 452 525
           C452 535, 445 542, 438 542
           C442 538, 445 532, 445 525
           L445 515 L452 515 L452 525
           M420 580
           C420 550, 440 530, 460 530
           C445 532, 432 545, 432 565
           C432 552, 442 542, 452 542"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.2"
        opacity="0.7"
        filter="url(#glow)"
      />

      {/* Frame borders with thorn pattern */}
      <path
        d="M80 20 L420 20 M20 80 L20 520 M480 80 L480 520 M80 580 L420 580"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="1"
      />
      <path
        d="M80 20 L420 20 M20 80 L20 520 M480 80 L480 520 M80 580 L420 580"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* ── CENTRAL GOTHIC ARCH / TRACERY ── */}
      <path
        d="M120 480
           L120 280
           Q120 180, 180 140
           Q250 100, 250 60
           Q250 100, 320 140
           Q380 180, 380 280
           L380 480"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M135 480
           L135 290
           Q135 200, 185 165
           Q250 130, 250 90
           Q250 130, 315 165
           Q365 200, 365 290
           L365 480"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* Arch inner filigree */}
      <path
        d="M180 140
           Q220 160, 250 200
           Q280 160, 320 140"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.6"
        opacity="0.5"
      />
      <path
        d="M195 165
           Q225 180, 250 210
           Q275 180, 305 165"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* ── BAROQUE SCROLLWORK ── */}
      {/* Left side elaborate scroll */}
      <path
        d="M60 300
           C40 300, 30 280, 50 260
           C65 245, 85 255, 75 275
           C70 285, 55 285, 55 270
           C55 260, 65 255, 70 262
           M50 260
           C35 270, 35 290, 55 295
           C70 300, 80 285, 70 270
           C65 260, 55 262, 52 268
           C50 272, 53 278, 58 278
           C62 278, 64 273, 61 269
           M75 275
           C85 285, 95 275, 85 260
           C78 250, 65 250, 60 260
           C55 268, 60 278, 68 278
           C72 278, 74 274, 71 270"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1"
        opacity="0.6"
        filter="url(#glow)"
      />

      {/* Right side elaborate scroll */}
      <path
        d="M440 300
           C460 300, 470 280, 450 260
           C435 245, 415 255, 425 275
           C430 285, 445 285, 445 270
           C445 260, 435 255, 430 262
           M450 260
           C465 270, 465 290, 445 295
           C430 300, 420 285, 430 270
           C435 260, 445 262, 448 268
           C450 272, 447 278, 442 278
           C438 278, 436 273, 439 269
           M425 275
           C415 285, 405 275, 415 260
           C422 250, 435 250, 440 260
           C445 268, 440 278, 432 278
           C428 278, 426 274, 429 270"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1"
        opacity="0.6"
        filter="url(#glow)"
      />

      {/* ── VICTORIAN FILIGREE CENTER ── */}
      <g transform="translate(250, 340)">
        {/* Outer ring of curls */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <path
            key={angle}
            d="M0 -55 C15 -55, 20 -40, 10 -30 C5 -25, -5 -30, -5 -40 C-5 -48, 2 -52, 8 -48"
            fill="none"
            stroke="#5a8a6e"
            strokeWidth="0.7"
            opacity="0.65"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Inner ring */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
          <path
            key={angle}
            d="M0 -35 C10 -35, 14 -25, 7 -18 C3 -14, -4 -18, -4 -26 C-4 -32, 1 -34, 6 -30"
            fill="none"
            stroke="#5a8a6e"
            strokeWidth="0.6"
            opacity="0.5"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Center knot */}
        <circle r="12" fill="#0a0a0a" stroke="#5a8a6e" strokeWidth="1.5" />
        <path
          d="M-8 -8 Q0 -15, 8 -8 Q15 0, 8 8 Q0 15, -8 8 Q-15 0, -8 -8"
          fill="none"
          stroke="#5a8a6e"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </g>

      {/* ── THORN VINES ── */}
      {/* Left thorn vine */}
      <path
        d="M80 500
           C90 450, 70 400, 100 350
           C120 320, 100 280, 120 240
           C135 210, 115 180, 130 150"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M80 500
           C90 450, 70 400, 100 350
           C120 320, 100 280, 120 240
           C135 210, 115 180, 130 150"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Thorns left */}
      <path d="M92 445 L108 440 L95 435 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M88 390 L102 385 L90 378 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M112 340 L125 335 L115 328 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M108 280 L122 275 L112 268 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M128 225 L140 220 L130 213 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M122 170 L135 165 L125 158 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />

      {/* Right thorn vine */}
      <path
        d="M420 500
           C410 450, 430 400, 400 350
           C380 320, 400 280, 380 240
           C365 210, 385 180, 370 150"
        fill="none"
        stroke="#2a2a2a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M420 500
           C410 450, 430 400, 400 350
           C380 320, 400 280, 380 240
           C365 210, 385 180, 370 150"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Thorns right */}
      <path d="M408 445 L392 440 L405 435 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M412 390 L398 385 L410 378 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M388 340 L375 335 L385 328 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M392 280 L378 275 L388 268 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M372 225 L360 220 L370 213 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />
      <path d="M378 170 L365 165 L375 158 Z" fill="#1a1a1a" stroke="#5a8a6e" strokeWidth="0.5" />

      {/* ── UPPER ORNAMENT ── */}
      {/* Crescent moon with filigree */}
      <path
        d="M360 100
           A 55 55 0 1 1 360 220
           A 42 42 0 1 0 360 100 Z"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1.2"
        opacity="0.5"
        filter="url(#glow)"
      />
      <path
        d="M360 105
           A 48 48 0 1 1 360 215
           A 35 35 0 1 0 360 105 Z"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* ── LOWER ORNAMENT ── */}
      {/* Inverted gothic arch at bottom */}
      <path
        d="M180 520
           Q180 560, 250 570
           Q320 560, 320 520"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M200 525
           Q200 550, 250 558
           Q300 550, 300 525"
        fill="none"
        stroke="#5a8a6e"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* ── DECORATIVE DOTS ── */}
      <circle cx="100" cy="100" r="3" fill="none" stroke="#5a8a6e" strokeWidth="1" opacity="0.5" />
      <circle cx="400" cy="100" r="3" fill="none" stroke="#5a8a6e" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="500" r="3" fill="none" stroke="#5a8a6e" strokeWidth="1" opacity="0.5" />
      <circle cx="400" cy="500" r="3" fill="none" stroke="#5a8a6e" strokeWidth="1" opacity="0.5" />
      <circle cx="250" cy="60" r="2" fill="#5a8a6e" opacity="0.4" />
      <circle cx="250" cy="540" r="2" fill="#5a8a6e" opacity="0.4" />

      {/* ── VERTICAL ACCENT LINES ── */}
      <line x1="250" y1="80" x2="250" y2="120" stroke="#5a8a6e" strokeWidth="0.5" opacity="0.3" />
      <line x1="250" y1="480" x2="250" y2="520" stroke="#5a8a6e" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
