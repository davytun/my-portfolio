const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-dark-bg/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Portfolio. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
