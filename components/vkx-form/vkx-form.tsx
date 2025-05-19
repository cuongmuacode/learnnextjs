import { FormProps, Form as HeroUIForm } from "@heroui/react";
import React, { ReactNode, CSSProperties, FormHTMLAttributes } from "react";

export interface VkxFormProps extends FormProps {
  children: ReactNode;
  validationBehavior?: "native" | "aria";
  validationErrors?: Record<string, string | string[]>;
  action?: string | FormHTMLAttributes<HTMLFormElement>["action"];
  encType?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  method?: "get" | "post" | "dialog";
  target?: "_blank" | "_self" | "_parent" | "_top";
  autoComplete?: "off" | "on";
  role?: "presentation" | "search" | undefined;
  autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  className?: string;
  style?: CSSProperties;
}

export const VkxForm: React.FC<VkxFormProps> = ({
  children,
  className = "",
  validationBehavior = "native",
  validationErrors,
  action,
  encType,
  role,
  method,
  target,
  autoComplete,
  autoCapitalize,
  style,
  ...props
}) => {
  return (
    <HeroUIForm
      action={action}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      className={className}
      encType={encType}
      method={method}
      role={role}
      style={style}
      target={target}
      validationBehavior={validationBehavior}
      validationErrors={validationErrors}
      {...props}
    >
      {children}
    </HeroUIForm>
  );
};

export default VkxForm;
