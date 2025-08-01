import { useDark } from "~/hooks/useDark"

export function Menu() {
  const { isDark, toggleDark } = useDark()
  return (
    <button
      type="button"
      onClick={toggleDark}
      className="btn"
      title={isDark ? "切换到浅色模式" : "切换到深色模式"}
    >
      <span
        className={$(
          "inline-block",
          isDark ? "i-ph-moon-stars-duotone" : "i-ph-sun-dim-duotone",
        )}
      />
    </button>
  )
}
