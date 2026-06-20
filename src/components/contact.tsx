"use client"
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LocationIcon, MailIcon, PhoneIcon } from "./svgs";
import { contactInfo } from "../data/data";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formsubmit.co/ajax/georgeabiamakadaniel@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send. Please email me directly.');
      }
    } catch {
      toast.error('Something went wrong. Try emailing me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mx-[30px] lg:mx-[76px] lg:mt-[150px]">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: '#130b1c', color: '#fff', border: '1px solid #6f1cd7' },
        }}
      />

      <div className="flex flex-col items-center gap-[35px] md:gap-[25px]">
        <h1 className="font-clashbold font-semibold text-xl text-white md:text-[60px] md:leading-[73.8px]">
          Let&#39;s Work Together
        </h1>

        <p className="text-[#FFFFFF99] text-base text-center max-w-xl font-medium">
          Have a project in mind or just want to say hi? Drop me a message and I&#39;ll respond within 24 hours.
        </p>
      </div>

      <div className="mt-[51px] max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#130b1c] border border-[#ffffff15] px-5 py-4 text-white text-sm rounded focus:outline-none focus:border-[#6f1cd7] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#130b1c] border border-[#ffffff15] px-5 py-4 text-white text-sm rounded focus:outline-none focus:border-[#6f1cd7] transition-colors"
            />
          </div>
          <textarea
            placeholder="Tell me about your project or idea..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#130b1c] border border-[#ffffff15] px-5 py-4 text-white text-sm rounded focus:outline-none focus:border-[#6f1cd7] transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="self-start px-8 py-4 bg-[#6f1cd7] text-white font-medium text-sm rounded hover:bg-[#5a16b0] transition-colors disabled:opacity-50"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="mt-[60px] flex flex-col gap-[60px] lg:flex lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center gap-[10px]">
          <MailIcon className="w-[30px] h-[30px] p-2 bg-[#130b1c] rounded-full border border-[#6f1cd7]" />
          <a className="text-[#FFFFFF99] font-medium text-sm md:text-base" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <PhoneIcon className="w-[30px] h-[30px] p-2 bg-[#130b1c] rounded-full border border-[#6f1cd7]" />
          <a href={`tel:${contactInfo.phone}`} className="text-[#FFFFFF99] font-medium text-sm md:text-base">
            {contactInfo.phone}
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <LocationIcon className="w-[30px] h-[30px] p-2 bg-[#130b1c] rounded-full border border-[#6f1cd7]" />
          <p className="text-[#FFFFFF99] font-medium text-sm md:text-base">{contactInfo.location}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
