
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-primary mb-6">About VStore</h1>
          <p className="text-center text-lg text-secondary mb-12">
            Style isn't just about what you wear. It's about how you live.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://picsum.photos/id/1074/800/600" alt="VStore Team" className="w-full h-full object-cover"/>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-secondary leading-relaxed mb-4">
                At VStore, our mission is to provide high-quality, sustainably-sourced fashion that empowers individuals to express their unique style. We believe in creating pieces that are not only beautiful but also timeless, durable, and kind to the planet.
              </p>
              <p className="text-secondary leading-relaxed">
                We work closely with our manufacturers to ensure ethical practices and premium materials. Every stitch, every fabric, and every design is chosen with intention and care, so you can feel as good as you look.
              </p>
            </div>
          </div>
          
           <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                    <div className="p-6 bg-light-gray rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">Quality</h3>
                        <p className="text-secondary text-sm">We are committed to creating garments that last, using only the finest materials and craftsmanship.</p>
                    </div>
                    <div className="p-6 bg-light-gray rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">Sustainability</h3>
                        <p className="text-secondary text-sm">We prioritize eco-friendly materials and ethical production processes to minimize our environmental footprint.</p>
                    </div>
                     <div className="p-6 bg-light-gray rounded-lg">
                        <h3 className="text-xl font-semibold text-primary mb-2">Individuality</h3>
                        <p className="text-secondary text-sm">We celebrate diversity and self-expression, offering styles that help you tell your own story.</p>
                    </div>
                </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
