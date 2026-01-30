// CheckoutResult.tsx
type Props = {
  total: number;
  discountPct: number;
};

export default function CheckoutResult({ total, discountPct }: Props) {
  return (
    <section style={{ marginTop: 14 }}>
      <h3>2) Resultado</h3>
      <p>Descuento: {(discountPct * 100).toFixed(0)}%</p>
      <p><b>Total: ${total.toFixed(2)}</b></p>
    </section>
  );
}
