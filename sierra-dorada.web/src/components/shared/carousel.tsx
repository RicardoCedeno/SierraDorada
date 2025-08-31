import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { imageCarousel } from "../classes/image-carousel";
import './carousel.scss'

type CarouselProps = {
  imagesList: imageCarousel[];
};

export default function Carousel({ imagesList }: CarouselProps) {
  const navigate = useNavigate();
  const [scrollSpeed, setScrollSpeed] = useState(0.5);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [customPack, setCustomPack] = useState<typeof imagesList[0][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // El clon inicial solo duplica la lista para efecto de loop
  const clonedProducts = [...imagesList, ...imagesList];

  // Scroll automático
  useEffect(() => {
    if (!containerRef.current || !autoScroll) return;

    const container = containerRef.current;
    let lastTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isDragging) {
        const baseSpeed = 0.5;
        const speedMultiplier =
          scrollSpeed === 0.25 ? 0.5 : scrollSpeed === 1 ? 1.25 : 1;

        container.scrollLeft += baseSpeed * speedMultiplier * deltaTime * 0.1;

        // Loop infinito
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed, autoScroll, isDragging, imagesList]);

  // Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoScroll(false);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoScroll(true);
  };

  // Touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setAutoScroll(false);
    const touch = e.touches[0];
    setStartX(touch!.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  // Touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const x = touch!.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch end
  const handleTouchEnd = () => {
    setIsDragging(false);
    setAutoScroll(true);
  };

  const handleSpeedChange = (speed: number) => setScrollSpeed(speed);

  const handleAddToPack = (product: typeof imagesList[0]) => {
    if (customPack.length < 4) setCustomPack([...customPack, product]);
  };

  // const handleRemoveFromPack = (index: number) => {
  //   setCustomPack(customPack.filter((_, i) => i !== index));
  // };

  // const calculatePackPrice = () => {
  //   const subtotal = customPack.reduce((sum, p) => sum + p.price, 0);
  //   return subtotal * 0.75; // 25% descuento
  // };

  return (
    <div className="p-6 surface-900 w-full">
      <div className="grid justify-content-center">
        {/* Título */}


        {/* Botones de velocidad y scroll manual */}
        <div className="col-12 flex flex-column sm:flex-row justify-content-between align-items-center mb-4">
          <div className="flex gap-2">
            {[0.10, 0.5, 1].map((speed) => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`p-2 border-round font-bold ${scrollSpeed === speed
                  ? "bg-yellow-600 text-black shadow-2"
                  : "p-button-outlined text-yellow-600 border-yellow-600"
                  }`}
              >
                {speed === 0.25 ? "Lento" : speed === 0.5 ? "Normal" : "Rápido"}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => (containerRef.current!.scrollLeft -= 300)}
              className="p-2 bg-yellow-600 text-black border-round hover:bg-yellow-500"
            >
              {/* ChevronLeft */}
            </button>
            <button
              onClick={() => (containerRef.current!.scrollLeft += 300)}
              className="p-2 bg-yellow-600 text-black border-round hover:bg-yellow-500"
            >
              {/* ChevronRight */}
            </button>
          </div>
        </div>

        {/* Carrusel */}
        <div
          ref={containerRef}
          className="flex overflow-x-hidden cursor-grab gap-3 carousel"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}


        >
          {clonedProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`surface-800 border-round shadow-3 flex flex-column flex-none w-full sm:w-6 md:w-4 ${product.id === "807400c9-d68c-4721-8cc6-8635802fa258" ? "border-2 border-yellow-600" : ""
                }`}
            >
              <div className="relative w-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full object-cover border-round max-h-10rem sm:max-h-11rem md:max-h-10rem"
                  draggable={false}

                />
              </div>

              <div className="p-4 flex flex-column">
                <div className="flex flex-row align-items-center mb-2">
                  <div className="col-10 sm:col-11 flex flex-column justify-content-between sm:justify-content-around">
                    <div className="carousel-title font-dorsa image-title">{product.name}</div>
                    <span className="image-price">${product.price.toLocaleString()}</span>
                  </div>
                  <div
                    className="col-2 sm:col-1 w-2rem h-2rem border-circle border-4 border-yellow-600"
                    style={{ backgroundColor: product.colorHex }}
                    title={product.colorName}
                  />
                </div>

                <p className="text-sm mb-2 image-inspiration font-barlow">{product.inspiration}</p>
                <p className="text-sm mb-4 image-description font-barlow">{product.description}</p>

                <div className="flex flex-row gap-8">
                  <div className="flex flex-column gap-3">
                    <div className="font-dorsa-condensed image-details">Detalles</div>
                    <div className="font-barlow image-details-text">ABV: {product.details.abv}%</div>
                    <div className="font-barlow image-details-text">IBU: {product.details.ibu}</div>
                    <div className="font-barlow image-details-text">🌡️: {product.details.temperatureRange}</div>
                  </div>
                  <div>
                    <div className="flex flex-column gap-3">
                      <div className="font-dorsa-condensed image-details">Maridaje</div>
                      {product.pairing.map((item, index) => (
                        <div key={index}>
                          <div className="font-barlow image-details-text">{item.image}</div>
                          <div className="font-barlow image-details-text">{item.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => navigate(`/producto/${product.id}`)}
                    className="p-2 border-2 border-yellow-600 text-yellow-600 border-round flex-1"
                  >
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => handleAddToPack(product)}
                    className="p-2 bg-yellow-600 text-black border-round flex-1"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
