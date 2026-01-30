// App.tsx
import { useRef, useState } from "react";
import CheckoutForm from "./Ejercicios/CheckoutForm";
import CheckoutResult from "./Ejercicios/CheckoutResult";

export default function App() {
  const amountRef = useRef<HTMLInputElement | null>(null);
  const taxRef = useRef<HTMLSelectElement | null>(null);
  const couponRef = useRef<HTMLSelectElement | null>(null);

  const [total, setTotal] = useState(0);
  const [discountPct, setDiscountPct] = useState(0);

  const calculate = () => {
    const amount = Number(amountRef.current?.value || 0);
    const tax = Number(taxRef.current?.value || 0);
    const coupon = couponRef.current?.value || "0";

    const subtotal = amount + amount * tax;

    const rules = [
      { code: "10", pct: 0.10 },
      { code: "20", pct: 0.20 },
    ];

    let pct = 0;
    for (const r of rules) {
      if (r.code === coupon) pct = r.pct;
    }

    setDiscountPct(pct);
    setTotal(subtotal - subtotal * pct);
  };

  return (
    <>
      <CheckoutForm
        amountRef={amountRef}
        taxRef={taxRef}
        couponRef={couponRef}
        onCalculate={calculate}
      />

      <CheckoutResult total={total} discountPct={discountPct} />
    </>
  );
}
