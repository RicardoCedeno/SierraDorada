import { useRef, useState, useEffect } from "react";
import "./carousel.scss";
import { imageCarousel } from "../classes/image-carousel";


type carouselProps = {
  imagesList: imageCarousel[];
}
export default function Carousel({ imagesList }: carouselProps) {
  const items = imagesList;
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const offsetRef = useRef(0); // posición actual
  const lastXRef = useRef(0);  // última posición del mouse
  const velocityRef = useRef(0); // velocidad de arrastre
  const speed = 0.5; // velocidad de auto-scroll
  const inertiaRef = useRef<number | null>(null);

  // animación automática
  useEffect(() => {
    let rafId: any;

    const animate = () => {
      if (!isDragging && velocityRef.current === 0) {
        let next = offsetRef.current - speed;
        const trackWidth = trackRef.current!.scrollWidth / 2;

        if (Math.abs(next) >= trackWidth) {
          next = 0;
        }

        offsetRef.current = next;
        trackRef.current!.style.transform = `translateX(${next}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isDragging]);

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
    cancelAnimationFrame(inertiaRef.current!); // cortar inercia previa
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();

    const delta = e.clientX - lastXRef.current;
    offsetRef.current += delta;
    trackRef.current!.style.transform = `translateX(${offsetRef.current}px)`;

    velocityRef.current = delta; // guardar velocidad del último frame
    lastXRef.current = e.clientX;
  };

  const startInertia = () => {
    const friction = 0.95; // qué tan rápido se frena (0.9 = más largo, 0.98 = muy largo)
    const minVelocity = 0.1; // umbral para detenerse

    const step = () => {
      if (Math.abs(velocityRef.current) > minVelocity) {
        offsetRef.current += velocityRef.current;
        trackRef.current!.style.transform = `translateX(${offsetRef.current}px)`;
        velocityRef.current *= friction; // aplicar freno
        inertiaRef.current = requestAnimationFrame(step);
      } else {
        velocityRef.current = 0;
      }
    };

    inertiaRef.current = requestAnimationFrame(step);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startInertia(); // lanzar inercia al soltar
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      startInertia();
    }
  };

  return (
    <div
      className="carousel-container overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-track flex" ref={trackRef}>
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="carousel-item border-round shadow-2">
            <img
              src={item.imageUrl}
              alt={`slide-${idx}`}
              className="object-cover pointer-events-none"
            />
            <div>{item.title}</div>
            <div>${item.price}</div>
            <div>{item.inspiration}</div>
            <div>{item.description}</div>
            <div className="flex flex-row">
              <div>
                <div>DETALLES: {item.details.abv}%</div>
                <div>IBU: {item.details.ibu}</div>
                <div>TEMP: {item.details.temperatureRange}</div>
              </div>
              <div className="flex flex-column">
                {item.pairing.map((pair, idx) => (
                  <div key={idx}>{pair.name}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
