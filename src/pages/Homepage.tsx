import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Leaf, Sprout, FlaskConical, Target, Users, TrendingUp } from 'lucide-react';
import { ProductShowcase } from '../components/ProductShowcase';
import { useTheme } from '../contexts/ThemeContext';
import { TestimonialsColumn } from '../components/ui/testimonials-columns-1';
import '../assets/background.css';

export function Homepage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const offerings = [
    {
      icon: FlaskConical,
      title: 'INNOVATION AT THE CORE',
      description: 'Innovation is the heartbeat of SAKASH AGRO TECH PVT. LTD. Our team of agronomists, chemists, and experts collaborate tirelessly to craft state-of-the-art crop nutrition solutions. Through cutting-edge research and technology, we formulate products that amplify plant health, elevate yields, and promote sustainable farming practices.'
    },
    {
      icon: Target,
      title: 'PRECISION AND PERFORMANCE',
      description: 'Our commitment to precision extends to every aspect of our offerings. We understand that each plant\'s needs are unique, and that\'s why our solutions are meticulously tailored to optimize growth at every stage. Whether it\'s enhancing nutrient uptake or unlocking the potential of plant through unique foliar solutions, our products deliver remarkable results.'
    },
    {
      icon: Leaf,
      title: 'CULTIVATING SUSTAINABILITY',
      description: 'SAKASH AGRO TECH PVT. LTD. is more than a manufacturer; we are stewards of the environment. Our focus on sustainability guides our every decision. By developing biostimulants, organic fertilizers, and micronutrients that nourish plants while minimizing ecological impact, we contribute to a healthier planet and a more resilient ecosystem.'
    },
    {
      icon: Users,
      title: 'EMPOWERING GROWERS',
      description: 'We believe that knowledge is the key to progress. Our team is dedicated to empowering farmers with the information they need to make informed choices. Through personalized guidance and expert support, we ensure that every grower reaps the maximum benefits from our solutions.'
    },
    {
      icon: TrendingUp,
      title: 'CULTIVATING EXCELLENCE, GROWING FUTURE',
      description: 'SAKASH AGRO TECH PVT. LTD. is a symbol of dedication, innovation, and progress. As we continue to push the boundaries of agricultural science, we envision a future where sustainable farming practices yield bountiful harvests, thriving ecosystems, and prosperous communities.'
    }
  ];

  // Split offerings into columns for the testimonials layout
  const firstColumn = offerings.slice(0, 2).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));
  
  const secondColumn = offerings.slice(2, 4).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));
  
  const thirdColumn = offerings.slice(4, 5).map(o => ({
    text: o.description,
    name: o.title,
    icon: o.icon
  }));

  // Duplicate the last item to balance the third column if needed, or just leave it
  if (thirdColumn.length > 0) {
     thirdColumn.push(firstColumn[0]); // Add one more to make it scroll nicely
  }



  return (
    <div className="min-h-screen dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-end pb-24 px-6 md:px-12">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/uploads/background.png')`
          }}
        >
            {/* Black Shade Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          
          {/* Left Side: Headline */}
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight"
            >
              Smart Solutions<br />
              for a Stronger<br />
              Agriculture
            </motion.h1>
          </div>

          {/* Right Side: Description & Button */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:max-w-xl lg:ml-auto"
          >
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Discover how advanced plant nutrition, precision formulations, and innovative technologies are transforming traditional farming into a more productive, sustainable, and resilient industry—explore our range of fertilizer solutions designed to deliver superior crop performance. 
            </p>
            
            <Link
              to="/products"
              className="flex items-center space-x-2 bg-orange-300 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 transition-colors"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* What Do We Offer? Section */}
      <section className="bg-background my-20 relative">
        <div className="w-full z-10 mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} 
            viewport={{ once: true }} 
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10" 
          > 
            <div className="flex justify-center"> 
              <div className="border border-green-200 dark:border-green-800 py-1 px-4 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium">Our Values</div> 
            </div> 
  
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-5 text-center text-gray-900 dark:text-white"> 
              What Do We Offer?
            </h2> 
            <p className="text-center mt-5 opacity-75 text-lg text-gray-600 dark:text-gray-300"> 
              Discover how our innovative solutions are transforming agriculture through precision, sustainability, and empowerment.
            </p> 
          </motion.div> 

          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"> 
            <TestimonialsColumn testimonials={firstColumn} className="flex-1" duration={15} /> 
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block flex-1" duration={19} /> 
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block flex-1" duration={17} /> 
          </div>
        </div>
      </section>

      {/* Happy Farmers Section */}
      <section className="relative py-24 bg-white dark:bg-black overflow-hidden min-h-[600px] flex items-center">
        {/* Desktop Background Video */}
        <div className="hidden lg:block absolute inset-0 z-0">
          {!videoError && (
            <>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              >
                <source src="/uploads/mid.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/60" />
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white lg:text-white mb-6 tracking-tight">
                Happy <span className="text-green-600 dark:text-green-400">Farmers</span>, <br />
                Growing Success
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 lg:text-white/90 mb-8 leading-relaxed">
                At SAKASH AGRO TECH PVT. LTD., we measure our success by the prosperity of the farmers we serve. Through innovative solutions and dedicated support, we empower agricultural communities to grow, succeed, and thrive nationwide.  
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 lg:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 lg:text-green-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white lg:text-white">Empowered Communities</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-white/60">Supporting local growth and sustainability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 lg:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 lg:text-orange-300">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white lg:text-white">Increased Yields</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 lg:text-white/60">Measurable improvements in crop performance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile/Tablet Video Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:hidden relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-green-900 to-green-700"
            >
              {!videoError ? (
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => setVideoLoaded(true)}
                    onCanPlay={() => setVideoLoaded(true)}
                    onError={() => setVideoError(true)}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <source src="/uploads/mid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </>
              ) : null}

              <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-700 ${videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Farmers' Success Stories</h3>
                <p className="text-white/80 text-sm md:text-base max-w-md">
                  Witness the transformation of farms across the nation through our innovative agricultural solutions
                </p>
                <div className="flex items-center justify-center space-x-8 mt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-300">500+</p>
                    <p className="text-white/60 text-xs">Happy Farmers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-300">50+</p>
                    <p className="text-white/60 text-xs">Products</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-orange-300">20+</p>
                    <p className="text-white/60 text-xs">States</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />




    </div>
  );
}