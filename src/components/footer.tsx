export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <span>
        感谢 NewsNow 的开源代码，本站基于 v0.0.31 版本进行了修改和优化。
      </span>
      <span>
        <span>
          XiaoqiangNews ©
          {currentYear}
          {" "}
          By
          {" "}
        </span>
        <a
          href="https://github.com/xiaoqiangclub"
          target="_blank"
          rel="noopener noreferrer"
        >
          XiaoqiangClub
        </a>
      </span>
    </>
  )
}
