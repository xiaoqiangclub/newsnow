import { useDark } from "~/hooks/useDark"

export function Menu() {
  const { isDark, toggleDark } = useDark()
  return (
    <button
      type="button"
      onClick={toggleDark}
      className={$(
        "btn",
        isDark ? "i-ph-moon-stars-duotone" : "i-ph-sun-dim-duotone",
      )}
      title={isDark ? "切换到浅色模式" : "切换到深色模式"}
    />
  )
}
