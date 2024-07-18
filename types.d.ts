// In a types.d.ts or similar file in your project

declare module '@headlessui/react' {
  import { ComponentType, ReactNode } from 'react';

  // types.d.ts or similar file in your project

declare module '@headlessui/react' {
  import { ComponentType, ReactNode } from 'react';

  export interface TransitionProps {
    show: boolean;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    children?: ReactNode;
  }

  export const Transition: ComponentType<TransitionProps>;
}


  export const Transition: ComponentType<TransitionProps>;
  // Declare other components here if needed
}
