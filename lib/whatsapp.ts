import { brand } from "@/lib/data";

/**
 * Builds a safe, encoded WhatsApp deep-link using the existing brand number.
 * Works for both WhatsApp mobile app and WhatsApp Web (wa.me links support both).
 */
export function getWhatsAppUrl(message: string): string {
  const base = brand.social.whatsapp; // e.g. "https://wa.me/918796519171"
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}text=${encodeURIComponent(message)}`;
}

/** Centralized message templates so copy stays consistent across the site. */
export const whatsappMessages = {
  general: "Hi, I want to check availability at Neha Luxury Body Spa.",
  service: (serviceName: string) =>
    `Hi, I'm interested in ${serviceName}. Please share availability and pricing.`,
  package: (packageName: string) =>
    `Hi, I'm interested in the ${packageName} package. Please share availability and pricing.`,
  location: (location: string) =>
    `Hi, I'm interested in a spa in ${location}. Please share availability and booking details.`,
};