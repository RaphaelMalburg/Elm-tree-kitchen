"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { prepListType } from "@/types/global";
import { useCurrentList } from "@/store/currentList";

export function Checkboxlist({ list }: { list: prepListType[] }) {
  const [store, addToCart, removeFromList] = useCurrentList((state) => [state.currentList, state.addToList, state.removeFromList]);

  function handleClick(nameTask: string) {
    let isOnCart = store.includes(nameTask);
    if (isOnCart) {
      removeFromList(nameTask);

      return;
    }
    addToCart(nameTask);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 placeholder:items-center gap-4">
      {list.map((item: prepListType) => (
        <div key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox onClick={() => handleClick(item.nameTask)} id={item.id.toString()} className="peer h-5 w-5 text-blue-500" />
          <label
            onClick={() => handleClick(item.nameTask)} // Pass a function reference
            htmlFor={item.id.toString()}
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {item.nameTask}
          </label>
        </div>
      ))}
    </div>
  );
}
