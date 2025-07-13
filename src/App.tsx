import WearableList from "./components/WearableList";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Wearables Collection
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and manage the latest AI-powered wearable devices
          </p>
        </div>
      </section>

      <main className="w-full px-4 py-8">
        <WearableList />
      </main>
    </div>
  );
}

export default App;
