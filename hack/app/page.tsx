import Timer from "./components/Timer";
import PasswordGen from "./components/PasswordGen";
import ProgressBar from "./components/ProgressBar";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center gap-6 px-4 py-10">
        <Timer />
        <PasswordGen />
        <ProgressBar />
      </main>
    </div>
  );
}