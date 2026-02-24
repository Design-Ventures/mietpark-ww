"use client";

import { useActionState } from "react";
import { Input, Textarea } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { CheckCircle2 } from "lucide-react";

const initialState: ContactFormState = { success: false };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-brand-600" />
        </div>
        <h3 className="text-lg font-semibold text-neutral-900">
          Nachricht gesendet
        </h3>
        <p className="mt-2 text-sm text-neutral-500 max-w-sm">
          Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei
          Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {state.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Name"
          name="name"
          required
          placeholder="Ihr Name"
        />
        <Input
          label="E-Mail"
          name="email"
          type="email"
          required
          placeholder="ihre@email.de"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="Optional"
        />
        <Input
          label="Betreff"
          name="subject"
          placeholder="Optional"
        />
      </div>

      <Textarea
        label="Nachricht"
        name="message"
        required
        rows={5}
        placeholder="Wie können wir Ihnen helfen?"
      />

      <div>
        <Button type="submit" loading={isPending} size="lg">
          Nachricht senden
        </Button>
      </div>
    </form>
  );
}
