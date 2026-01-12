import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// Duck Icon - cute rubber duck
export const DuckIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <ellipse cx="32" cy="45" rx="22" ry="14" fill="currentColor" />
    <ellipse cx="32" cy="30" rx="16" ry="14" fill="currentColor" />
    <ellipse cx="42" cy="26" rx="4" ry="5" fill="currentColor" />
    <circle cx="26" cy="26" r="3" fill="#1a1a1a" />
    <circle cx="27" cy="25" r="1" fill="white" />
    <ellipse cx="38" cy="30" rx="6" ry="3" fill="#ff9500" />
  </svg>
);

// Police Badge Icon
export const PoliceBadgeIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <path d="M32 4L38 16L52 16L42 26L46 40L32 32L18 40L22 26L12 16L26 16Z" />
    <circle cx="32" cy="24" r="6" fill="white" opacity="0.3" />
    <path d="M32 20L33.5 23L37 23.5L34.5 26L35 29.5L32 28L29 29.5L29.5 26L27 23.5L30.5 23Z" fill="white" opacity="0.5" />
  </svg>
);

// Criminal/Robber Mask Icon
export const CriminalIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <circle cx="32" cy="32" r="20" />
    <rect x="12" y="24" width="40" height="12" rx="4" fill="#1a1a1a" />
    <circle cx="22" cy="30" r="5" fill="white" />
    <circle cx="42" cy="30" r="5" fill="white" />
    <circle cx="22" cy="30" r="2" fill="#1a1a1a" />
    <circle cx="42" cy="30" r="2" fill="#1a1a1a" />
    <ellipse cx="32" cy="42" rx="4" ry="2" fill="#1a1a1a" opacity="0.5" />
  </svg>
);

// Toy Gun/Blaster Icon
export const ToyGunIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <rect x="8" y="24" width="36" height="12" rx="3" />
    <rect x="36" y="20" width="20" height="8" rx="2" />
    <rect x="20" y="32" width="10" height="16" rx="2" />
    <circle cx="50" cy="24" r="4" fill="white" opacity="0.3" />
    <rect x="8" y="28" width="6" height="4" rx="1" fill="white" opacity="0.2" />
  </svg>
);

// Star Icon
export const StarIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <path d="M32 8L38.5 25L56 25L42 36L47 54L32 44L17 54L22 36L8 25L25.5 25Z" />
  </svg>
);

// Handcuffs Icon
export const HandcuffsIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <circle cx="18" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="6" />
    <circle cx="46" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="6" />
    <rect x="26" y="29" width="12" height="6" rx="2" />
    <rect x="8" y="38" width="6" height="12" rx="2" />
    <rect x="50" y="38" width="6" height="12" rx="2" />
  </svg>
);

// Target/Crosshair Icon
export const TargetIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="32" cy="32" r="4" />
    <rect x="30" y="4" width="4" height="12" />
    <rect x="30" y="48" width="4" height="12" />
    <rect x="4" y="30" width="12" height="4" />
    <rect x="48" y="30" width="12" height="4" />
  </svg>
);

// Shield/Protection Icon
export const ShieldIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <path d="M32 4C32 4 12 12 12 12V32C12 48 32 60 32 60C32 60 52 48 52 32V12C52 12 32 4 32 4Z" />
    <path d="M32 16L35 26L46 26L37 33L40 44L32 37L24 44L27 33L18 26L29 26Z" fill="white" opacity="0.3" />
  </svg>
);

// Whistle Icon
export const WhistleIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <ellipse cx="24" cy="36" rx="16" ry="12" />
    <rect x="32" y="30" width="24" height="12" rx="4" />
    <circle cx="18" cy="36" r="4" fill="white" opacity="0.3" />
    <path d="M8 20L16 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M12 16L18 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Alarm/Siren Icon
export const SirenIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <rect x="16" y="32" width="32" height="20" rx="4" />
    <ellipse cx="32" cy="32" rx="12" ry="10" />
    <path d="M20 20C20 20 26 12 32 12C38 12 44 20 44 20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="28" r="4" fill="white" opacity="0.5" />
    <rect x="28" y="8" width="8" height="8" rx="2" />
  </svg>
);

// Water Splash Icon
export const SplashIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <ellipse cx="32" cy="48" rx="20" ry="8" opacity="0.5" />
    <path d="M32 8C32 8 16 28 16 40C16 48 23 54 32 54C41 54 48 48 48 40C48 28 32 8 32 8Z" />
    <ellipse cx="26" cy="36" rx="4" ry="6" fill="white" opacity="0.3" />
  </svg>
);

// Trophy Icon
export const TrophyIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <path d="M18 8H46V24C46 34 40 42 32 42C24 42 18 34 18 24V8Z" />
    <path d="M18 12H8C8 12 6 24 14 28C16 28 18 26 18 24" fill="currentColor" opacity="0.7" />
    <path d="M46 12H56C56 12 58 24 50 28C48 28 46 26 46 24" fill="currentColor" opacity="0.7" />
    <rect x="26" y="42" width="12" height="8" />
    <rect x="20" y="50" width="24" height="6" rx="2" />
    <path d="M28 16L30 22L36 22L31 26L33 32L28 28L23 32L25 26L20 22L26 22Z" fill="white" opacity="0.3" />
  </svg>
);

// Heart Icon
export const HeartIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <path d="M32 56L28 52C14 40 6 32 6 22C6 14 12 8 20 8C25 8 29 10 32 14C35 10 39 8 44 8C52 8 58 14 58 22C58 32 50 40 36 52L32 56Z" />
  </svg>
);

// Bullet/Projectile Icon
export const BulletIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <ellipse cx="32" cy="20" rx="10" ry="14" />
    <rect x="22" y="20" width="20" height="32" rx="2" />
    <ellipse cx="32" cy="16" rx="6" ry="4" fill="white" opacity="0.3" />
  </svg>
);

// Magnifying Glass Icon
export const MagnifyIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className} style={style}>
    <circle cx="26" cy="26" r="18" fill="none" stroke="currentColor" strokeWidth="6" />
    <rect x="38" y="38" width="8" height="24" rx="3" transform="rotate(-45 38 38)" />
    <circle cx="20" cy="20" r="4" fill="white" opacity="0.3" />
  </svg>
);
