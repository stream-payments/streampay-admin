import clsx from "clsx"
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import EyeIcon from "../../fundamentals/icons/eye-icon"
import EyeOffIcon from "../../fundamentals/icons/eye-off-icon"
import LockIcon from "../../fundamentals/icons/lock-icon"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  key?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  props?: React.HTMLAttributes<HTMLDivElement>
}

const SigninInput = React.forwardRef(
  (
    {
      placeholder,
      name,
      key,
      required,
      onChange,
      onFocus,
      className,
      type,
      ...props
    }: InputProps,
    ref
  ) => {
    const inputRef = useRef(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current)

    return (
      <div
        className={clsx(
          "mb-xsmall h-[48px] w-[320px] overflow-hidden rounded-rounded border last:mb-0",
          "inter-base-regular bg-grey-5 placeholder:text-grey-40",
          "focus-within:border-violet-60 focus-within:shadow-input",
          "flex items-center",
          {
            "pointer-events-none text-grey-40 focus-within:border-none focus-within:shadow-none":
              props.readOnly,
          },
          className
        )}
      >
        {props.readOnly && (
          <LockIcon size={16} className="ml-base text-grey-40" />
        )}
        <input
          className={clsx(
            "remove-number-spinner w-full bg-transparent py-3 px-4 leading-base outline-none outline-0",
            {
              "pl-xsmall": props.readOnly,
            }
          )}
          ref={inputRef}
          name={name}
          key={key || name}
          placeholder={placeholder || "Placeholder"}
          onChange={onChange}
          onFocus={onFocus}
          type={inputType}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="px-4 text-grey-40 focus:text-violet-60 focus:outline-none"
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
    )
  }
)

export default SigninInput
