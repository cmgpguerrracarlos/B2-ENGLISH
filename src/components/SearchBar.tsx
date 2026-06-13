type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-bar">
      <span>Search topics</span>
      <input
        type="search"
        placeholder="Try: conditionals, articles, phrasal verbs..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
