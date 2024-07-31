import About from "@/components/About";
import Introduction from "@/components/Introduction";

export default function MainPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div>
        <Introduction />
        <About />
      </div>
    </div>
  );
}
