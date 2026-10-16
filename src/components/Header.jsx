export default function Header() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <h1 className="text-4xl font-bold tracking-[12px] text-white">
        TODO
      </h1>
      <span
        className="cursor-default text-4xl text-white"
        aria-label="Moon icon"
      >
        ☾
      </span>
    </header>
  );
}
