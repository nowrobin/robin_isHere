export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">연락처</h3>
          <p className="mb-2">
            <a
              href="mailto:nowrobin3@gmail.com"
              className="hover:text-tertiary transition-colors"
            >
              nowrobin3@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <a
              href="tel:01034666927"
              className="hover:text-tertiary transition-colors"
            >
              010-3466-6927
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/nowrobin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://velog.io/@nowrobin/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary transition-colors"
          >
            Velog
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} 한정욱. All rights reserved.</p>
      </div>
    </footer>
  );
}
