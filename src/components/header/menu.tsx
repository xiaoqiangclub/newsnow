import { fixedColumnIds, metadata } from "@shared/metadata"
import { Link } from "@tanstack/react-router"
import { useState } from "react"
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

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { toggle } = useSearchBar()

  return (
    <div className="md:hidden flex items-center">
      <button
        type="button"
        className="i-ph-list-duotone btn"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && (
        <div className="absolute top-16 right-4 z-50 w-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md p-2 rounded-xl shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            {fixedColumnIds.map(columnId => (
              <Link
                key={columnId}
                to="/c/$column"
                params={{ column: columnId }}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {metadata[columnId].name}
              </Link>
            ))}
            <hr className="border-gray-200 dark:border-gray-700 my-1" />
            <button
              type="button"
              onClick={() => {
                toggle(true)
                setIsOpen(false)
              }}
              className="w-full text-left block px-4 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              更多
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
