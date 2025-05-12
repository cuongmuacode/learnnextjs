import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title({ color: "violet" })}>Components</h1>
      <p className="text-lg text-default-600 mt-4 max-w-lg">
        Beautiful and accessible components built with HeroUI and Tailwind CSS.
        Free and open source.
      </p>
    </div>
  );
}


