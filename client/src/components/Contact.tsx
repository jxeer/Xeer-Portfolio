import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Note: Replace these with your actual EmailJS credentials
      // Get them from https://www.emailjs.com/
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_demo";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_demo";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "demo_key";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://linkedin.com/in/julianxeer",
      label: "LinkedIn",
      ariaLabel: "Connect on LinkedIn",
    },
    {
      id: "github",
      icon: Github,
      href: "https://github.com/julianxeer",
      label: "GitHub",
      ariaLabel: "View GitHub profile",
    },
    {
      id: "email",
      icon: Mail,
      href: "mailto:julian@example.com",
      label: "Email",
      ariaLabel: "Send an email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-br from-purple-950 via-fuchsia-950 to-pink-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 80 }}
          animate={
            prefersReducedMotion
              ? {}
              : isInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
            data-testid="text-contact-heading"
          >
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -80 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Send a Message
              </h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  data-testid="form-contact"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            data-testid="input-name"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            data-testid="input-email"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or just say hi..."
                            {...field}
                            data-testid="textarea-message"
                            rows={5}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 80 }}
            animate={
              prefersReducedMotion
                ? {}
                : isInView
                ? { opacity: 1, x: 0 }
                : {}
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center lg:text-left">
              Connect With Me
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                    animate={
                      prefersReducedMotion
                        ? {}
                        : isInView
                        ? { opacity: 1, y: 0 }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.1,
                    }}
                    data-testid={`link-contact-${link.id}`}
                    aria-label={link.ariaLabel}
                    className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover-elevate active-elevate-2 transition-all"
                  >
                    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-purple-900" />
                    </div>
                    <div className="text-left">
                      <span className="text-white font-semibold text-lg block">
                        {link.label}
                      </span>
                      <span className="text-white/70 text-sm">
                        {link.id === "linkedin" && "Let's connect"}
                        {link.id === "github" && "View my code"}
                        {link.id === "email" && "julian@example.com"}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
