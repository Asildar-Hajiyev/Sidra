"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Star, ArrowRight, Check } from "lucide-react";

export const FeedbackSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const handleRating = (value: number) => {
    setRating(value);
    setFeedbackSent(true);
  };

  return (
    <section className="mb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Newsletter Subscription Box */}
        <div className="bg-white border border-[#EBE6DE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 text-[#1A1A1A]">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EAE4DA] flex items-center justify-center text-[#736B5E]">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold tracking-tight text-[#1A1A1A]">
                Get the latest from Sidra
              </h4>
            </div>
            <p className="mt-2 text-xs text-[#78716C] leading-relaxed">
              Be the first to know about new arrivals, exclusive offers and fine
              jewellery tips further.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="mt-5">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#4F6851] bg-[#F1F6F2] border border-[#D5E3D7] rounded-full py-2.5 px-4 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you for subscribing to our newsletter!</span>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-[#FAF8F5] text-xs text-[#2A2621] placeholder-[#9E978D] rounded-full pl-4 pr-12 py-2.5 border border-[#DFD8CC] focus:border-black focus:bg-white focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#333] transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Shopping Experience Rating Box */}
        <div className="bg-white border border-[#EBE6DE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2.5 text-[#1A1A1A]">
              <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EAE4DA] flex items-center justify-center text-[#736B5E]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold tracking-tight text-[#1A1A1A]">
                How was your shopping experience?
              </h4>
            </div>
            <p className="mt-2 text-xs text-[#78716C] leading-relaxed">
              Help us improve with one quick question.
            </p>
          </div>

          <div className="mt-5">
            {feedbackSent ? (
              <div className="flex items-center gap-2 text-xs text-[#4F6851] bg-[#F1F6F2] border border-[#D5E3D7] rounded-full py-2.5 px-4 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Thank you for rating your experience! ({rating}/5)</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                    aria-label={`Rate ${star} star`}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        (hoverRating || rating) >= star
                          ? "fill-[#E5A93C] text-[#E5A93C]"
                          : "text-[#D1C9BE]"
                      }`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
