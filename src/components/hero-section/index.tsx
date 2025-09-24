const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-primary" style={{ backgroundImage: 'url("/images/hero-section-dashboard-bg.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="relative z-10 px-2 py-6 md:py-8 md:px-12">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold font-neue-regrade text-primary-foreground">
            Hi There! Welcome to <span className="text-secondary">Ajanah Event</span>
          </h1>
          <p className="max-w-lg text-base leading-relaxed font-neue-regrade text-primary-foreground/90">
            Our event management web app makes registration seamless, 
            ticketing effortless, and engagement unforgettable — all in one 
            platform.
          </p>
        </div>
      </div>
      
     
    </div>
  );
};

export default HeroSection;