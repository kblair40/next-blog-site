import React from "react";

import { getSizeClasses } from "utils/classes";
import SolidButton from "./SolidButton";
import GhostButton from "./GhostButton";

const Button = ({
  onClick,
  isDisabled,
  loading,
  children,
  iconLeft,
  iconRight,
  size = "md",
  colorScheme = "primary",
  variant = "solid",
  classes = [],
}) => {
  const sizeClasses = getSizeClasses("button", size);
  // console.log("\n\nsizeClasses:", sizeClasses, "\n\n");

  if (variant === "solid") {
    return (
      <SolidButton
        onClick={onClick}
        loading={loading}
        iconLeft={iconLeft}
        iconRight={iconRight}
        isDisabled={isDisabled}
        colorScheme={colorScheme}
        classes={[...classes, ...sizeClasses]}
        size={size}
      >
        {children}
      </SolidButton>
    );
  } else if (variant === "ghost") {
    return (
      <GhostButton
        onClick={onClick}
        loading={loading}
        iconLeft={iconLeft}
        iconRight={iconRight}
        isDisabled={isDisabled}
        colorScheme={colorScheme}
        classes={[...classes, ...sizeClasses]}
        size={size}
      >
        {children}
      </GhostButton>
    );
  }
};

export default Button;

// const SolidButton = () => {
//   const colorClasses = {
//     slate: ["bg-slate-600", "hover:bg-slate-700", "active:bg-slate-800"],
//     emerald: [
//       "bg-emerald-600",
//       "hover:bg-emerald-700",
//       "active:bg-emerald-800",
//     ],
//     primary: [
//       "bg-primary-600",
//       "hover:bg-primary-700",
//       "active:bg-primary-800",
//     ],
//   };

//   const baseClasses = [
//     "duration-200",
//     "rounded-lg",
//     "px-3",
//     "h-10",
//     "text-white",
//     "font-medium",
//     "flex",
//     "items-center",
//     "justify-center",
//     ...colorClasses[colorScheme].map((color) => {
//       return isDisabled ? `${color}/50` : color;
//     }),
//     ...classes,
//   ];

//   return (
//     <button
//       onClick={onClick}
//       className={classNames(baseClasses)}
//       disabled={isDisabled}
//     >
//       {loading ? (
//         <div className="scale-50">
//           <Loading />
//         </div>
//       ) : (
//         children
//       )}
//     </button>
//   );
// }

//
// const colorClasses = {
//   slate: ["bg-slate-600", "hover:bg-slate-700", "active:bg-slate-800"],
//   emerald: [
//     "bg-emerald-600",
//     "hover:bg-emerald-700",
//     "active:bg-emerald-800",
//   ],
//   primary: [
//     "bg-primary-600",
//     "hover:bg-primary-700",
//     "active:bg-primary-800",
//   ],
// };

// const baseClasses = [
//   "duration-200",
//   "rounded-lg",
//   "px-3",
//   "h-10",
//   "text-white",
//   "font-medium",
//   "flex",
//   "items-center",
//   "justify-center",
//   ...colorClasses[colorScheme].map((color) => {
//     return isDisabled ? `${color}/50` : color;
//   }),
//   ...classes,
// ];

// return (
//   <button
//     onClick={onClick}
//     className={classNames(baseClasses)}
//     disabled={isDisabled}
//   >
//     {loading ? (
//       <div className="scale-50">
//         <Loading />
//       </div>
//     ) : (
//       children
//     )}
//   </button>
// );
