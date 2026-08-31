const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.75-.24.75-.53v-2.02c-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.7.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.4.11-2.9 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.12 3.02-1.12.6 1.5.22 2.62.11 2.9.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"/></svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.6H3.4V9Zm5.8 0h3.45v1.58h.05c.48-.9 1.65-1.84 3.4-1.84 3.64 0 4.31 2.4 4.31 5.52v6.34h-3.6v-5.62c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.97v5.71H9.2V9Z"/></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" d="M12 3.4a8.2 8.2 0 0 0-7.1 12.3L3.5 20.5l4.95-1.3A8.2 8.2 0 1 0 12 3.4Z"/><path fill="currentColor" d="M16.7 13.9c-.2-.1-1.15-.57-1.33-.64-.18-.07-.31-.1-.45.1-.13.2-.51.64-.63.77-.12.14-.24.15-.44.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.1-1.38-.11-.2-.01-.3.08-.4.09-.09.2-.24.3-.36.1-.12.13-.2.2-.33.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.17-.4-.34-.35-.45-.36h-.38c-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.63s.7 1.9.8 2.03c.1.13 1.38 2.1 3.34 2.94.47.2.84.32 1.13.41.47.15.9.13 1.24.08.38-.06 1.15-.47 1.31-.93.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23Z"/></svg>
);

function ContactDock({ inMenu = false, home = false }) {
  return (
    <div className={`contact-dock ${inMenu ? "contact-dock-menu" : ""} ${home ? "contact-dock-home" : ""}`} aria-label="Contact links">
      <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
      <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email"><EmailIcon /></a>
      <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappIcon /></a>
    </div>
  );
}

export default ContactDock;
