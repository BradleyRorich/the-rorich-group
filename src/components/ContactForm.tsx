"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: ContactFormData) {
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
      form.reset();
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border/60 bg-card p-10 text-center">
        <CheckCircle className="size-12 text-primary" />
        <div>
          <p className="text-lg font-semibold">Thanks! We&apos;ll be in touch shortly.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We typically respond within one business day.
          </p>
        </div>
        <button
          onClick={() => setFormState("idle")}
          className="text-sm text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 rounded-xl border border-border/60 bg-card p-6 sm:p-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input placeholder="Your full name" {...field} />
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
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@company.co.za"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone <span className="text-muted-foreground">(optional)</span></FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+27 xx xxx xxxx"
                  {...field}
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
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you're looking for..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {formState === "error" && (
          <p className="text-sm text-destructive">
            Something went wrong. Please try again or email us directly at{" "}
            <a
              href="mailto:info@rorichgroup.co.za"
              className="underline"
            >
              info@rorichgroup.co.za
            </a>
            .
          </p>
        )}

        <Button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full"
        >
          {formState === "submitting" && (
            <Loader2 className="mr-2 size-4 animate-spin" />
          )}
          {formState === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
