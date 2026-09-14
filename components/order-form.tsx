"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Check } from "@phosphor-icons/react";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

type Status = "idle" | "copied" | "error";

export function OrderForm() {
  const searchParams = useSearchParams();
  const requested = products.find((item) => item.slug === searchParams.get("pouch"));
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [product, setProduct] = useState(requested?.name ?? products[0].name);
  const [quantity, setQuantity] = useState("1");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function buildMessage() {
    return [
      `Hi Sweet Kandy, I would like to order:`,
      `${product} x${quantity}`,
      `Name: ${name.trim()}`,
      `Area: ${area.trim()}`,
      notes.trim() ? `Notes: ${notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !area.trim()) {
      setStatus("error");
      return;
    }

    const nextMessage = buildMessage();
    setMessage(nextMessage);

    try {
      await navigator.clipboard.writeText(nextMessage);
      setStatus("copied");
    } catch {
      setStatus("copied");
    }
  }

  if (status === "copied") {
    return (
      <div className="rounded-[2rem] bg-ink/[0.04] p-2 ring-1 ring-ink/8">
        <div className="rounded-[calc(2rem-0.5rem)] bg-sugar px-6 py-10 md:px-10">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-mint">
            <Check size={22} weight="light" />
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-[-0.04em]">
            Message ready.
          </h2>
          <p className="mt-3 max-w-[min(42ch,100%)] text-ink/70">
            We copied your order to the clipboard. Paste it in Instagram DMs and we will confirm stock, extras, and delivery.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-2xl bg-pouch px-5 py-4 font-body text-sm leading-relaxed text-sugar/90">
            {message}
          </pre>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-cherry py-2.5 pl-6 pr-2 text-sugar transition-all duration-700 ease-spring hover:bg-cherry-hot active:scale-[0.98]"
          >
            Open Instagram
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
              <ArrowUpRight size={16} weight="light" />
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] bg-ink/[0.04] p-2 ring-1 ring-ink/8">
      <div className="grid gap-6 rounded-[calc(2rem-0.5rem)] bg-sugar px-5 py-8 md:px-8 md:py-10">
        <Field label="Your name" htmlFor="name">
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field"
            placeholder="Amina"
          />
        </Field>
        <Field
          label="Area or postcode"
          htmlFor="area"
          hint="Local drops are free. Nationwide goes in the post."
        >
          <input
            id="area"
            name="area"
            autoComplete="postal-code"
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="field"
            placeholder="B12 or Small Heath"
          />
        </Field>
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Pouch" htmlFor="product">
            <select
              id="product"
              name="product"
              value={product}
              onChange={(event) => setProduct(event.target.value)}
              className="field"
            >
              {products.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name} · {item.price}
                </option>
              ))}
            </select>
          </Field>
          <Field label="How many" htmlFor="quantity">
            <input
              id="quantity"
              name="quantity"
              type="number"
              min={1}
              max={20}
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              className="field"
            />
          </Field>
        </div>
        <Field
          label="Notes"
          htmlFor="notes"
          hint="Allergies, extras, no banana foams, a gift message."
        >
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            className="field min-h-28 resize-y"
            placeholder="Extra sour, skip the milk bottles"
          />
        </Field>
        {status === "error" ? (
          <p className="text-sm text-cherry">Add your name and area so we know where the pouch is going.</p>
        ) : null}
        <button
          type="submit"
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-cherry py-2.5 pl-6 pr-2 text-sugar transition-all duration-700 ease-spring hover:bg-cherry-hot active:scale-[0.98]"
        >
          Copy order for Instagram
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-px">
            <ArrowUpRight size={16} weight="light" />
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
      {hint ? <span className="text-sm text-ink/50">{hint}</span> : null}
    </label>
  );
}
