import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "İçli Köfte",
    image: "/foods/food6.png",
    size: "large",
  },
  {
    id: 2,
    name: "Yaprak Sarması",
    image: "/foods/food2.png",
    size: "small",
  },
  {
    id: 3,
    name: "Gözleme",
    image: "/foods/food3.png",
    size: "medium",
  },
  {
    id: 4,
    name: "Ispanaklı Börek",
    image: "/foods/food4.png",
    size: "small",
  },
  {
    id: 5,
    name: "Amerikan Salatası",
    image: "/foods/food5.png",
    size: "large",
  },
  {
    id: 6,
    name: "Börek Çeşitleri",
    image: "/foods/food1.png",
    size: "medium",
  },
];

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 relative inline-block">
          <span className="relative z-10 font-medium">Menümüzden Seçmeler</span>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 -rotate-2" />
        </h2>
        <p className="text-gray-600 text-lg font-medium mt-4">
          Özenle hazırladığımız lezzetler
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative h-[400px] overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 transform -skew-x-12">
                <div className="h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent absolute animate-shine" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-white text-xl font-serif font-medium">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedImage(product)}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24 mb-12">
        <div className="max-w-2xl mx-auto text-center bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-secondary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <h3 className="text-2xl font-medium md:text-3xl font-serif mb-4 text-primary">
              Sipariş ve İletişim
            </h3>
            <p className="text-gray-600 mb-8 font-medium">
              Özel gününüz için hemen iletişime geçin
            </p>

            <a
              href="https://wa.me/905393239896"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-xl group whitespace-nowrap text-sm sm:text-base"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-medium">WhatsApp'tan Yazın</span>
            </a>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-video">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-white text-2xl font-serif text-center mt-4">
              {selectedImage.name}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
