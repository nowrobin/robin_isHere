'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '전화번호를 입력해주세요';
    } else if (!/^[0-9-+\s()]+$/.test(formData.phone)) {
      newErrors.phone = '올바른 전화번호 형식을 입력해주세요';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setIsSubmitting(false);
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // 실시간 에러 제거
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contactInfo.email'),
      value: 'nowrobin3@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Discord',
      value: 'robinhan',
      href: 'https://discord.com/users/300860236871237645',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contactInfo.location'),
      value: t('contactInfo.locationDetail'),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-10 bg-primary text-quaternary h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">{t('commons.contact')}</h2>
          <p className="text-xl text-quaternary/80">
            {t('contactInfo.contactIntro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                {t('contactInfo.contactDetail')}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-tertiary">{info.icon}</div>
                    <div>
                      <p className="font-medium text-quaternary">
                        {info.label}
                      </p>
                      {info.href ? (
                        <div className="text-tertiary hover:text-quaternary transition-colors">
                          {info.value}
                        </div>
                      ) : (
                        <p className="text-quaternary/80">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-3">
                {t('contactInfo.responseGuarantee')}
              </h4>
              <p className="text-quaternary/80 leading-relaxed">
                {t('contactInfo.responseMessage')}
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('contactInfo.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-200 text-quaternary placeholder-quaternary/50 ${
                      errors.name
                        ? 'border-red-400'
                        : 'border-white/20 focus:border-tertiary'
                    }`}
                    placeholder={t('contactInfo.namePlaceHolder')}
                  />
                  {errors.name && (
                    <motion.p
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('contactInfo.mobile')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-200 text-quaternary placeholder-quaternary/50 ${
                      errors.phone
                        ? 'border-red-400'
                        : 'border-white/20 focus:border-tertiary'
                    }`}
                    placeholder="010-1234-5678"
                  />
                  {errors.phone && (
                    <motion.p
                      className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contactInfo.email')}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-200 text-quaternary placeholder-quaternary/50 ${
                    errors.email
                      ? 'border-red-400'
                      : 'border-white/20 focus:border-tertiary'
                  }`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <motion.p
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contactInfo.message')}*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary transition-all duration-200 text-quaternary placeholder-quaternary/50 resize-none ${
                    errors.message
                      ? 'border-red-400'
                      : 'border-white/20 focus:border-tertiary'
                  }`}
                  placeholder={t('contactInfo.messagePlaceHolder')}
                />
                {errors.message && (
                  <motion.p
                    className="text-red-400 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tertiary hover:bg-secondary text-primary font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'linear',
                        }}
                      />
                      {t('contactInfo.emailSending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t('contactInfo.emailSend')}
                    </>
                  )}
                </button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="w-5 h-5" />
                  {t('contactInfo.emailSuccess')}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AlertCircle className="w-5 h-5" />
                  {t('contactInfo.emailFail')}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
