import { HTMLProps, KeyboardEvent } from "react";

export default function Input(props: HTMLProps<HTMLInputElement>) {
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };
  return (
    <div className="border-[1px] border-c-light-grey p-2 px-3 w-full rounded-md">
      <input onKeyDown={onKeyDown} {...props} className="w-full outline-none" />
    </div>
  );
}
