import { HTMLProps, KeyboardEvent } from "react";

export default function Input(
  props: {
    error?: string;
    showErrorMessage?: boolean;
  } & HTMLProps<HTMLInputElement>
) {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`${
        props.error ? "border-c-light-red" : "border-c-light-grey"
      } border-[1px]  p-2 px-3 w-full rounded-md font-poppins relative`}
    >
      <input
        onKeyDown={onKeyDown}
        {...props}
        className="w-full font-bold outline-none placeholder:text-c-light-grey"
      />
      {props.showErrorMessage && (
        <span className="text-[10px] font-normal left-0 top-12 text-c-light-red absolute">
          {props.error}
        </span>
      )}
    </div>
  );
}
