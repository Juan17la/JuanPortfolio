import { SocialButton } from "./SocialButton";
import { Send, MessageSquare } from "lucide-react";
import BlurText from "./animated/BlurText";
import FadeContent from "./animated/FadeContent";

export function Contact() {
  return (
    <section className="relative w-full px-6 py-24" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#5a8a6e]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#5a8a6e] font-semibold">
            Get In Touch
          </span>
        </div>
        <BlurText
          text="Contact Me"
          delay={150}
          animateBy="letters"
          direction="top"
          threshold={0.1}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl text-[#f0f0f0] mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Email CTA */}
          <FadeContent blur duration={800} delay={200} threshold={0.1}>
            <div className="flex flex-col gap-8">
              <div className="glass rounded-2xl p-8">
                <MessageSquare className="w-8 h-8 text-[#5a8a6e] mb-4" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#f0f0f0] mb-3">
                  Let's Talk
                </h3>
                <p className="text-sm text-[#c8c8c8] leading-relaxed mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hello —
                  I'm always open to interesting conversations.
                </p>
                <SocialButton type="gmail" username="juandiegolopezarias07" />
              </div>

              <div className="hidden lg:flex items-center justify-center h-32">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#5a8a6e]/20 to-transparent" />
              </div>
            </div>
          </FadeContent>

          {/* Right - Form */}
          <FadeContent blur duration={800} delay={400} threshold={0.1}>
            <div className="glass rounded-2xl p-8">
              <h3 className="font-[family-name:var(--font-display)] text-xl text-[#f0f0f0] mb-6">
                Leave a Comment
              </h3>

              <form className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#888888] mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a]/60 border border-[#2a2a2a]/50
                               text-[#f0f0f0] text-sm placeholder:text-[#888888]/50
                               focus:outline-none focus:border-[#5a8a6e]/50 focus:ring-1 focus:ring-[#5a8a6e]/30
                               transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#888888] mb-2 font-medium">
                    You are a...
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value="professional"
                        defaultChecked
                        className="w-4 h-4 accent-[#5a8a6e]"
                      />
                      <span className="text-sm text-[#c8c8c8] group-hover:text-[#f0f0f0] transition-colors duration-200">
                        Professional
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="role"
                        value="client"
                        className="w-4 h-4 accent-[#5a8a6e]"
                      />
                      <span className="text-sm text-[#c8c8c8] group-hover:text-[#f0f0f0] transition-colors duration-200">
                        Client
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="opinion" className="block text-xs uppercase tracking-wider text-[#888888] mb-2 font-medium">
                    Your Opinion
                  </label>
                  <textarea
                    id="opinion"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a]/60 border border-[#2a2a2a]/50
                               text-[#f0f0f0] text-sm placeholder:text-[#888888]/50 resize-none
                               focus:outline-none focus:border-[#5a8a6e]/50 focus:ring-1 focus:ring-[#5a8a6e]/30
                               transition-all duration-300"
                    placeholder="Share your thoughts about working with me..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5
                             bg-[#5a8a6e]/15 border border-[#5a8a6e]/40 rounded-lg
                             text-[#5a8a6e] font-semibold text-sm uppercase tracking-wider
                             hover:bg-[#5a8a6e]/25 hover:shadow-[0_0_20px_rgba(90,138,110,0.2)]
                             focus:outline-none focus:ring-2 focus:ring-[#5a8a6e]/50
                             transition-all duration-300"
                >
                  <span>Send Comment</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}
