import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: import.meta.env.VITE_CONTACT_EMAIL || "dammy0075@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_USER_ID || "",
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setError("Failed to send. Please email me at dammy0075@gmail.com");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-raised)",
    border: "1px solid var(--border-default)",
    color: "var(--text-primary)",
    fontSize: "0.875rem",
    padding: "0.75rem 1rem",
    outline: "none",
    marginTop: "0.5rem",
    transition: "border-color 0.2s",
  };

  const focusInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => (e.target.style.borderColor = "#f59e0b");
  const blurInput = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => (e.target.style.borderColor = "rgba(255,255,255,0.12)");

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="max-w-6xl mx-auto pl-10 sm:pl-16 pr-6 py-24">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <span
          className="font-mono text-xs uppercase tracking-[0.25em]"
          style={{ color: "var(--accent)" }}
        >
          04 / Contact
        </span>
        <span
          className="flex-1 h-px max-w-xs"
          style={{ background: "var(--border-subtle)" }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-16 max-w-5xl">
        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col justify-between"
        >
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Let's work
              <br />
              <span style={{ color: "var(--accent)" }}>together</span>
            </h2>
            <p className="leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Open to full-time roles, contract work, and consulting
              engagements. I respond within 24 hours.
            </p>

            <ul className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "dammy0075@gmail.com",
                  href: "mailto:dammy0075@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Lagos, Nigeria",
                  href: null,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/adedamolacoal",
                  href: "https://github.com/adedamolacoal",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/adedamola-akinyomi",
                  href: "https://www.linkedin.com/in/adedamola-akinyomi",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    size={16}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <div>
                    <p
                      className="font-mono text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={
                          href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text-secondary)")
                        }
                      >
                        {value} <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability badge */}
          <div
            className="mt-10 p-4"
            style={{
              border: "1px solid rgba(5,150,105,0.25)",
              background: "rgba(5,150,105,0.04)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--green)" }}
              />
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--green)" }}
              >
                Currently available
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Open to remote full-time roles, contract engagements, and
              collaborative freelance projects.
            </p>
          </div>
        </motion.div>

        {/* ── Right: form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-3"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center min-h-[320px] p-12 text-center"
              style={{
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-raised)",
              }}
            >
              <CheckCircle
                size={40}
                style={{ color: "#34d399" }}
                className="mb-4"
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#e8eaf0" }}
              >
                Message sent
              </h3>
              <p className="text-sm" style={{ color: "#9499a8" }}>
                I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div
                  className="flex items-start gap-2 text-sm p-4"
                  style={{
                    color: "#f87171",
                    border: "1px solid rgba(248,113,113,0.2)",
                  }}
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    name: "name",
                    type: "text",
                    label: "Name",
                    placeholder: "Your name",
                  },
                  {
                    name: "email",
                    type: "email",
                    label: "Email",
                    placeholder: "your@email.com",
                  },
                ].map(({ name, type, label, placeholder }) => (
                  <label key={name} className="block">
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </span>
                    <input
                      type={type}
                      name={name}
                      required
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      style={{ ...inputStyle, display: "block" }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </label>
                ))}
              </div>

              <label className="block">
                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "#52566a" }}
                >
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, role, or idea…"
                  style={{ ...inputStyle, display: "block", resize: "none" }}
                  onFocus={focusInput}
                  onBlur={blurInput}
                />
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 transition-colors duration-200"
                style={{
                  background: "var(--accent)",
                  color: "var(--text-inverse)",
                  opacity: isLoading ? 0.6 : 1,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.currentTarget.style.background = "var(--accent-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                }}
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
