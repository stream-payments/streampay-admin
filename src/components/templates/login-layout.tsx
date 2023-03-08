import React from "react"

const LoginLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="grid min-h-screen grid-cols-1 grid-rows-1">
        <div
          className="flex flex-col items-center"
          style={{
            background: "linear-gradient(90deg, #091970 0%, #0968E5 100%)",
          }}
        >
          {children}
          <div className="inter-base-regular pb-12 text-grey-0">
            © 2023 Stream Protocol / StreamPay™ <span>&#183;</span>{" "}
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="mailto:contact@streamprotocol.org"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout
