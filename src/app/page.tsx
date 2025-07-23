//client component
import { Header } from "@/components/Header";

export default function HomePage() {
  console.log("Server -> HomePage rendered");
  return (
    <div>
      <Header />
    </div>
  );
}

// Rota -> app/page.tsx -> /
// Rota -> app/about/page.tsx -> /about
