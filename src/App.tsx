import Footer from "./components/Footer";
import Header from "./components/Header";
import WearableList from "./components/WearableList";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WearableList />
      </main>

      <Footer />
    </div>
  );
}
