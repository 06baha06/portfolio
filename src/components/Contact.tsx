'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_10kl0hq',      // ← Senin Service ID'n
        'template_i1ng6fl',     // ← Senin Template ID'n
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'lnp8UNTrJJEgUC0z1'            // ← Senin Public Key'in
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-16">
      {/* Arka planda bulanık alanlar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-purple-500/15 rounded-full blur-3xl bottom-20 right-20"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold mb-4 text-center">İletişim</h2>
        <p className="text-gray-400 text-center mb-8">
          Benimle iletişime geçin!
        </p>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all">
          {/* İsim */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500 disabled:opacity-50"
              placeholder="Adınız Soyadınız"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500 disabled:opacity-50"
              placeholder="ornek@email.com"
            />
          </div>

          {/* Mesaj */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-500 resize-none disabled:opacity-50"
              placeholder="Mesajınızı buraya yazın..."
            />
          </div>

          {/* Durum Mesajları */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
              ✓ Mesajınız başarıyla gönderildi!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
              ✗ Bir hata oluştu. Lütfen tekrar deneyin.
            </div>
          )}

          {/* Gönder Butonu */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
          </button>
        </form>
      </div>
    </section>
  );
}