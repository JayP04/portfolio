'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', reason: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-coffee-900 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-cream-100 border-2 border-coffee-900/10 rounded-xl focus:border-terracotta-500 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-coffee-900 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-cream-100 border-2 border-coffee-900/10 rounded-xl focus:border-terracotta-500 focus:outline-none transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-coffee-900 mb-2">
            What would you like to discuss?
          </label>
          <textarea
            id="reason"
            required
            rows={5}
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full px-4 py-3 bg-cream-100 border-2 border-coffee-900/10 rounded-xl focus:border-terracotta-500 focus:outline-none transition-colors resize-none"
            placeholder="Tell me a bit about what you'd like to chat about..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="interactive w-full md:w-auto px-8 py-3 bg-coffee-900 text-cream-50 rounded-xl font-medium hover:bg-terracotta-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-terracotta-500 text-sm"
          >
            ✓ Message sent! I'll get back to you soon.
          </motion.p>
        )}

        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm"
          >
            ✗ Something went wrong. Please try again or email me directly.
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}
