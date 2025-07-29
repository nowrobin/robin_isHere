'use client';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-start">
        <div className="mb-4">
          <a
            href="/contact"
            className="text-xl font-semibold mb-2 hover:underline underline-offset-3"
          >
            {t('commons.contact')}
          </a>
          <p className="mb-2">
            <a
              href="mailto:nowrobin3@gmail.com"
              className="hover:text-tertiary transition-colors"
            >
              nowrobin3@gmail.com
            </a>
          </p>
        </div>
        <div className="flex justify-start space-x-6 mb-4">
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
