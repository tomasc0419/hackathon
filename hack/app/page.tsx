import Timer from "./components/Timer";
import PasswordGen from "./components/PasswordGen";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <Timer />
      <PasswordGen/>
    </div>
  );
}
