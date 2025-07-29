'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const aboutText = t('about', { returnObjects: true }) as string[];
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-start pl-10">
          {t('commons.intro')}
        </h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/me.jpeg"
              alt="한정욱"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12 text-xl">
            {aboutText.map((text, index) => (
              <p key={index} className="mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
