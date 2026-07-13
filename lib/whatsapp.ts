// WhatsApp deep-link helper for the booking flow.
// The practice books entirely over WhatsApp: patients fill in a few details,
// then get handed off to a pre-filled chat with the clinic.

// Placeholder clinic number from the design bundle (+91 98765 43210).
// Replace with the real clinic WhatsApp number (digits only, incl. country code).
export const CLINIC_WHATSAPP = '919876543210';
export const CLINIC_PHONE_DISPLAY = '+91 98765 43210';

export interface BookingDetails {
  name: string;
  service: string;
  location: string;
  preferredDay: string;
  preferredTime: string;
  phone?: string;
  notes?: string;
}

/** Build the pre-filled message a patient sends to the clinic on WhatsApp. */
export function buildBookingMessage(d: BookingDetails): string {
  const lines = [
    `Hi Dr. Roma Dubey’s clinic, I’d like to book an appointment.`,
    ``,
    `• Name: ${d.name}`,
    `• Service: ${d.service}`,
    `• Preferred clinic: ${d.location}`,
    `• Preferred day: ${d.preferredDay}`,
    `• Preferred time: ${d.preferredTime}`,
  ];
  if (d.phone) lines.push(`• Contact number: ${d.phone}`);
  if (d.notes) lines.push(``, `Notes: ${d.notes}`);
  lines.push(``, `Thank you!`);
  return lines.join('\n');
}

/** Full wa.me deep link with the pre-filled booking message. */
export function buildWhatsAppLink(d: BookingDetails, number: string = CLINIC_WHATSAPP): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(buildBookingMessage(d))}`;
}

/** A plain "start a chat" link with an optional short message. */
export function whatsAppChatLink(message?: string, number: string = CLINIC_WHATSAPP): string {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
