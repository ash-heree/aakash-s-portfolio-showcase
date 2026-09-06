import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: "aakashsrinivasan092@gmail.com", href: "mailto:aakashsrinivasan092@gmail.com" },
    { icon: <Phone className="h-4 w-4" />, label: "Phone", value: "8838008020", href: "tel:8838008020" },
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Thirumullaivoyal, Chennai", href: null as string | null },
    { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", value: "aakash-s-3710572b0", href: "https://www.linkedin.com/in/aakash-s-3710572b0" },
    { icon: <Github className="h-4 w-4" />, label: "GitHub", value: "Aakassh03", href: "https://github.com/Aakassh03" },
  ];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length > 100) e.name = "Please enter your name (max 100 characters)";
    if (!form.email.trim() || !EMAIL_RE.test(form.email.trim())) e.email = "Please enter a valid email address";
    if (!form.message.trim() || form.message.trim().length > 2000) e.message = "Please enter a message (max 2000 characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });
      if (error || !data?.success) throw new Error("send failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom, rgba(56,189,248,0.10) 0%, transparent 60%), linear-gradient(180deg, #0A0616 0%, #05010F 50%, #000000 100%)" }}
    >
      {/* cosmic stars */}
      {[...Array(60)].map((_, i) => {
        const size = (i % 5 === 0) ? 2 : 1;
        return (
          <span
            key={`s${i}`}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              width: size, height: size,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: 0.15 + ((i % 7) / 10),
              animation: `starTwinkle ${3 + (i % 5)}s ease-in-out ${i * 0.1}s infinite`,
            }}
          />
        );
      })}
      {/* nebula */}
      <motion.div
        className="absolute -top-20 left-1/4 w-[700px] h-[400px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(ellipse, #7C3AED, transparent 70%)" }}
        animate={{ x: [0, 60, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-[700px] h-[400px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(ellipse, #38BDF8, transparent 70%)" }}
        animate={{ x: [0, -60, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* small particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00F5D4]/70"
          style={{ left: `${(i * 53) % 100}%`, top: `${(i * 31) % 100}%` }}
          animate={{ y: [0, -25, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-mono text-xs text-[#00F5D4] mb-3 tracking-widest">// CONTACT.INIT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent mx-auto mb-6" />
            <p className="text-white/70 max-w-2xl mx-auto">
              Open to opportunities, collaborations, and conversations with fellow builders.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Contact form - terminal style */}
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-2xl overflow-hidden backdrop-blur-xl"
              style={{
                background: "rgba(11,17,32,0.85)",
                border: "1px solid rgba(0,245,212,0.25)",
                boxShadow: "0 0 40px rgba(0,245,212,0.12)",
              }}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-[#050816]/80 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-mono text-white/40">~/contact — bash</span>
              </div>
              <div className="p-6 sm:p-8 space-y-4 font-mono text-sm">
                <div>
                  <label className="text-[#00FF88] block mb-1.5">$ name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#050816]/60 border border-white/10 focus:border-[#00F5D4] outline-none rounded-md px-3 py-2.5 text-white transition-all focus:shadow-[0_0_15px_rgba(0,245,212,0.25)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[#00FF88] block mb-1.5">$ email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#050816]/60 border border-white/10 focus:border-[#00F5D4] outline-none rounded-md px-3 py-2.5 text-white transition-all focus:shadow-[0_0_15px_rgba(0,245,212,0.25)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-[#00FF88] block mb-1.5">$ message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#050816]/60 border border-white/10 focus:border-[#00F5D4] outline-none rounded-md px-3 py-2.5 text-white transition-all focus:shadow-[0_0_15px_rgba(0,245,212,0.25)] resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-[#050816] bg-gradient-to-r from-[#00F5D4] to-[#38BDF8] hover:shadow-[0_0_30px_rgba(0,245,212,0.55)] transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  {sent ? "Opening mail client..." : "Send Message"}
                </motion.button>
              </div>
            </motion.form>

            {/* Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 space-y-3"
            >
              {contactInfo.map((info, i) => {
                const inner = (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[#00F5D4] flex-shrink-0"
                         style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.3)" }}>
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-white/50">{info.label}</p>
                      <p className="text-sm text-white font-medium truncate">{info.value}</p>
                    </div>
                  </div>
                );
                return (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl p-4 backdrop-blur-xl transition-all duration-300 hover:border-[#00F5D4]/50 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]"
                    style={{
                      background: "rgba(11,17,32,0.7)",
                      border: "1px solid rgba(56,189,248,0.15)",
                    }}
                  >
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                        {inner}
                      </a>
                    ) : inner}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-center text-xs font-mono text-white/40">
              <span className="text-[#00F5D4]">$</span> © 2025 Aakash S. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
