
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Amber Oud",
    description: "Warm, holzig, orientalisch – ein Hauch von Luxus.",
    price: 59.9,
    size: "100ml",
    image: "https://via.placeholder.com/300x400?text=Amber+Oud",
  },
  {
    id: 2,
    name: "White Musk",
    description: "Frisch, pudrig, elegant – ein zeitloser Duft.",
    price: 39.9,
    size: "50ml",
    image: "https://via.placeholder.com/300x400?text=White+Musk",
  },
  {
    id: 3,
    name: "Rose Elixir",
    description: "Blumig, süß, sinnlich – pure Verführung.",
    price: 29.9,
    size: "30ml",
    image: "https://via.placeholder.com/300x400?text=Rose+Elixir",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Paris Gold Parfum</h1>
      <p className="text-center text-muted-foreground">
        Handgemachte Düfte – individuell gemischt mit edlem Parfumöl & Ethanol
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-xl">
            <img src={product.image} alt={product.name} className="rounded-t-2xl" />
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-muted-foreground">{product.size}</p>
              <p className="text-sm">{product.description}</p>
              <p className="font-bold">{product.price.toFixed(2)} €</p>
              <Button onClick={() => addToCart(product)} className="w-full">
                In den Warenkorb
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold">🛒 Warenkorb</h2>
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Dein Warenkorb ist leer.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  {item.name} ({item.size})
                </span>
                <span>{item.price.toFixed(2)} €</span>
              </li>
            ))}
            <li className="font-bold flex justify-between border-t pt-2">
              <span>Gesamt</span>
              <span>
                {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)} €
              </span>
            </li>
          </ul>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Bezahlung aktuell per PayPal oder Überweisung nach Kontaktaufnahme.
        </p>
      </div>
    </div>
  );
}
