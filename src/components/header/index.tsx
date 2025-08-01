import { useIsFetching } from "@tanstack/react-query"
import type { SourceID } from "@shared/types"
import { NavBar } from "../navbar"
import { Menu, MobileMenu } from "./menu"
import { currentSourcesAtom, goToTopAtom } from "~/atoms"

function GoTop() {
  const { ok, fn: goToTop } = useAtomValue(goToTopAtom)
  if (!ok) {
    return null
  }
  return (
    <button
      type="button"
      title="Go To Top"
      className="i-ph:arrow-fat-up-duotone op-50 btn"
      onClick={goToTop}
    />
  )
}

function Refresh() {
  const currentSources = useAtomValue(currentSourcesAtom)
  const { refresh } = useRefetch()
  const refreshAll = useCallback(
    () => refresh(...currentSources),
    [refresh, currentSources],
  )

  const isFetching = useIsFetching({
    predicate: (query) => {
      const [type, id] = query.queryKey as ["source" | "entire", SourceID]
      return (
        (type === "source" && currentSources.includes(id)) || type === "entire"
      )
    },
  })

  return (
    <button
      type="button"
      title="Refresh"
      className={$(
        "i-ph:arrow-counter-clockwise-duotone btn",
        isFetching && "animate-spin i-ph:circle-dashed-duotone",
      )}
      onClick={refreshAll}
    />
  )
}

export function Header() {
  return (
    <>
      <span className="flex justify-self-start">
        <a
          href="https://xiaoqiangclub.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center"
        >
          <div
            className="h-12 w-12 bg-cover"
            title="logo"
            style={{ backgroundImage: "url(/logo.png)" }}
          />
          <span className="text-2xl font-brand line-height-none!">
            <p>Xiaoqiang</p>
            <p className="mt--1">
              <span className="color-primary-6">N</span>
              <span>ews</span>
            </p>
          </span>
        </a>
      </span>
      <span className="justify-self-center">
        <span className="hidden md:(inline-block)">
          <NavBar />
        </span>
      </span>
      <span className="justify-self-end flex gap-2 items-center text-xl text-primary-600 dark:text-primary">
        <GoTop />
        <Refresh />
        <Menu />
        <MobileMenu />
      </span>
    </>
  )
}
