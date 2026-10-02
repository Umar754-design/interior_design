import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'view', 'drag'
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if touch device or small screen
    const checkMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Determine what element is under the cursor
      const target = e.target;
      if (!target) return;

      if (target.closest('[data-cursor="view"]')) {
        setCursorType('view');
      } else if (target.closest('[data-cursor="drag"]')) {
        setCursorType('drag');
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center"
        animate={{
          x: mousePos.x - (cursorType === 'view' ? 40 : cursorType === 'hover' ? 24 : 16),
          y: mousePos.y - (cursorType === 'view' ? 40 : cursorType === 'hover' ? 24 : 16),
          width: cursorType === 'view' ? 80 : cursorType === 'hover' ? 48 : 32,
          height: cursorType === 'view' ? 80 : cursorType === 'hover' ? 48 : 32,
          backgroundColor: cursorType === 'view' ? 'rgba(212, 175, 55, 0.9)' : 'rgba(212, 175, 55, 0.05)',
          borderColor: cursorType === 'view' ? 'transparent' : 'rgba(212, 175, 55, 0.6)',
          borderWidth: cursorType === 'view' ? '0px' : '1px'
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
        style={{
          borderStyle: 'solid',
          backdropFilter: cursorType === 'view' ? 'blur(4px)' : 'none'
        }}
      >
        {cursorType === 'view' && (
          <span
            style={{
              color: '#08090b',
              fontSize: '0.65rem',
              fontWeight: '700',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              userSelect: 'none'
            }}
          >
            VIEW
          </span>
        )}
      </motion.div>

      {/* Center Dot (hidden when in view mode) */}
      {cursorType !== 'view' && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
          animate={{
            x: mousePos.x - 3,
            y: mousePos.y - 3,
            scale: cursorType === 'hover' ? 1.5 : 1,
            backgroundColor: cursorType === 'hover' ? '#f5ecc8' : '#d4af37'
          }}
          transition={{ duration: 0.1 }}
          style={{
            width: 6,
            height: 6,
            boxShadow: '0 0 8px rgba(212, 175, 55, 0.8)'
          }}
        />
      )}
    </>
  );
}
