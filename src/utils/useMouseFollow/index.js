export function useMouseFollow(ref, options = {}) {
  const {
    speed = 0.1,
    distance = 150,
    rotate = 0,
    direction = 1
  } = options;

  if (!ref.current) return;

  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };

  const lerp = (start, end, t) => start + (end - start) * t;

  const handleMouseMove = (e) => {
    target.x = e.pageX;
    target.y = e.pageY;
  };

  const animate = () => {
    current.x = lerp(current.x, target.x, speed);
    current.y = lerp(current.y, target.y, speed);

    const x = (window.innerWidth / 2 - current.x * direction) / distance;
    const y = (window.innerHeight / 2 - current.y * direction) / distance;

    ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${typeof rotate === 'function' ? rotate(x, y) : rotate}deg)`;

    requestAnimationFrame(animate);
  };

  document.addEventListener("mousemove", handleMouseMove);
  requestAnimationFrame(animate);

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}
