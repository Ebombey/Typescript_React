function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="w-full text-center absolute bottom-3">
      <span className="text-white">Copyright &copy;{year}</span>
    </div>
  );
}

export default Footer;
