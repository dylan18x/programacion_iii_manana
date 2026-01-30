// CheckoutForm.tsx
import type { RefObject } from "react";

type Props = {
  amountRef: RefObject<HTMLInputElement | null>;
  taxRef: RefObject<HTMLSelectElement | null>;
  couponRef: RefObject<HTMLSelectElement | null>;
  onCalculate: () => void;
};

export default function CheckoutForm({ amountRef, taxRef, couponRef, onCalculate }: Props) {
  return (
    <section>
      <h3>1) Datos</h3>

      <div style={{ marginBottom: 10 }}>
        <label>Monto:</label><br />
        <input ref={amountRef} type="number" min={0} placeholder="0" style={{ width: 200 }} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>IVA:</label><br />
        <select ref={taxRef} style={{ width: 210 }}>
          <option value="0">Sin IVA</option>
          <option value="0.12">IVA 12%</option>
        </select>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Cupón:</label><br />
        <select ref={couponRef} style={{ width: 210 }}>
          <option value="0">Sin cupón</option>
          <option value="10">Cupón 10%</option>
          <option value="20">Cupón 20%</option>
        </select>
      </div>

      <button onClick={onCalculate}>Calcular</button>
    </section>
  );
}
