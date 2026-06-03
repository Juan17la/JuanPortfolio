import { SocialButton } from "./SocialButton";
import { Send, MessageSquare } from "lucide-react";
import { motion } from 'motion/react';
import AnimatedSection from "./animated/AnimatedSection";

export function Contact() {
  return (
    <section className="relative w-full px-6 py-24" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Centered Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-xs uppercase tracking-[0.25em] text-text-muted font-semibold">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-white/20" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-text-primary">
            Contact Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.1 }}
          >
            <div className="flex flex-col gap-8">
              <div className="glass-container p-8">
                <MessageSquare className="w-8 h-8 text-text-secondary mb-4" />
                <h3 className="font-display text-2xl text-text-primary mb-3">
                  Let's Talk
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hello —
                  I'm always open to interesting conversations.
                </p>
                <SocialButton type="gmail" username="juandiegolopezarias07" />
              </div>

              <div className="hidden lg:flex items-center justify-center h-32">
                <div className="w-px h-full bg-linear-to-b from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.2 }}
          >
            <div className="glass-container p-8">
              <h3 className="font-display text-xl text-text-primary mb-6">
                Leave a Comment
              </h3>

              <form className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-surface/60 border border-border/50
                               text-text-primary text-sm placeholder:text-text-muted/50
                               focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10
                               transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">
                    You are a...
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value="professional"
                        defaultChecked
                        className="w-4 h-4 accent-white"
                      />
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        Professional
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value="client"
                        className="w-4 h-4 accent-white"
                      />
                      <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        Client
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="opinion" className="block text-xs uppercase tracking-wider text-text-muted mb-2 font-medium">
                    Your Opinion
                  </label>
                  <textarea
                    id="opinion"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-surface/60 border border-border/50
                               text-text-primary text-sm placeholder:text-text-muted/50 resize-none
                               focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10
                               transition-all duration-300"
                    placeholder="Share your thoughts about working with me..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5
                             bg-white/5 border border-white/20 rounded-lg
                             text-text-primary font-semibold text-sm uppercase tracking-wider
                             hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                             transition-all duration-300"
                >
                  <span>Send Comment</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
