
import  WearableList  from "./components/WearableList";

function App() {

  return (
   <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Ai Wearables Collection</h1>
          <p className="text-muted-foreground mt-2">Discover and manage the latest AI-powered wearable devices</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <WearableList />
      </main>
   </div>
  );
}

export default App;
