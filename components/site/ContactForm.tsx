'use client';

import { useState } from 'react';
import { Button, Input, Textarea, Icon } from '@/components/ds';
import { whatsAppChatLink } from '@/lib/whatsapp';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | undefined>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please add a short message');
      return;
    }
    const lines = [
      name ? `Hi, I’m ${name}.` : 'Hi Dr. Roma’s clinic,',
      message.trim(),
      phone ? `You can reach me at ${phone}.` : '',
    ].filter(Boolean);
    window.open(whatsAppChatLink(lines.join('\n\n')), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }} noValidate>
      <Input label="Your name (optional)" placeholder="e.g. Priya Sharma" leftIcon="user" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Phone (optional)" placeholder="+91 …" leftIcon="phone" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <Textarea
        label="How can we help?"
        required
        rows={4}
        placeholder="Ask a question or tell us what you need…"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setError(undefined);
        }}
        error={error}
      />
      <Button type="submit" variant="whatsapp" size="lg" leftIcon="message" fullWidth>
        Send on WhatsApp
      </Button>
      <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--text-subtle)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Icon name="shield" size={14} /> Your message opens a private WhatsApp chat with the clinic.
      </p>
    </form>
  );
}
