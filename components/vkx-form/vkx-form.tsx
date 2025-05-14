import { Form as HeroUIForm } from "@heroui/react";
import React, { ReactNode, CSSProperties, FormHTMLAttributes } from "react";

export interface VkxFormProps
  extends Omit<
    FormHTMLAttributes<HTMLFormElement>,
    | "action"
    | "encType"
    | "method"
    | "target"
    | "autoComplete"
    | "autoCapitalize"
    | "style"
  > {
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

/**
 * VkxForm là một wrapper cho HeroUI Form component.
 * Hỗ trợ validation, accessibility và các props chuẩn của HeroUI Form.
 */
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
      className={className}
      validationBehavior={validationBehavior}
      validationErrors={validationErrors}
      action={action}
      encType={encType}
      method={method}
      role={role}
      target={target}
      autoComplete={autoComplete}
      autoCapitalize={autoCapitalize}
      style={style}
      {...props}
    >
      {children}
    </HeroUIForm>
  );
};

export default VkxForm;
