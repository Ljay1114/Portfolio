import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = (e) => e.preventDefault();

  return (
    <section aria-label="Contact information" className="py-section-gap bg-surface" id="contact">
      <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="glass-card grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
          <div className="p-12 lg:p-20 bg-surface-container-high relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <h2 className="font-section-title text-section-title mb-8">INITIATE CONNECTION</h2>
            <p className="text-on-surface-variant font-body-lg mb-12">Interested in discussing a complex technical challenge or an architectural design inquiry? My communication channels are open for collaborative ventures.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group"><div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-all"><span className="material-symbols-outlined">mail</span></div><span className="font-code">alejolexeljay@gmail.com</span></div>
              <div className="flex items-center gap-4 group"><div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-all"><span className="material-symbols-outlined">location_on</span></div><span className="font-code">Davao City, Philippines</span></div>
            </div>
          </div>
          <div className="p-12 lg:p-20 bg-surface-panel">
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="relative">
                <input className="w-full bg-transparent border-b border-border-steel py-4 outline-none focus:border-primary transition-colors peer placeholder-transparent" id="name" name="name" placeholder="Name" type="text" value={formData.name} onChange={onChange} />
                <label className="absolute left-0 top-0 text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label-caps uppercase tracking-widest" htmlFor="name">Your Name</label>
              </div>
              <div className="relative">
                <input className="w-full bg-transparent border-b border-border-steel py-4 outline-none focus:border-primary transition-colors peer placeholder-transparent" id="email" name="email" placeholder="Email" type="email" value={formData.email} onChange={onChange} />
                <label className="absolute left-0 top-0 text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label-caps uppercase tracking-widest" htmlFor="email">Email Address</label>
              </div>
              <div className="relative">
                <textarea className="w-full bg-transparent border-b border-border-steel py-4 outline-none focus:border-primary transition-colors peer placeholder-transparent resize-none" id="message" name="message" placeholder="Message" rows="4" value={formData.message} onChange={onChange} />
                <label className="absolute left-0 top-0 text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-primary peer-focus:text-xs font-label-caps uppercase tracking-widest" htmlFor="message">Message Brief</label>
              </div>
              <button className="w-full py-5 font-label-caps tracking-widest uppercase border border-primary text-primary hover:bg-primary hover:text-surface transition-all duration-300 cyan-glow">Transmitting Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
