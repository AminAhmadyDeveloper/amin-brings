import type {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SVGProps,
  SetStateAction,
} from 'react';

import type { IconProps } from '@/components/ui/icon';

declare global {
  export type ReactDiv = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;

  export type ReactTable = DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >;

  export type ReactHeader = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >;

  export type ReactHtmlElement = DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >;

  export type ReactInput = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    JSX.IntrinsicAttributes & { icon?: IconProps['icon'] };

  export type DispatchState<GType> = Dispatch<SetStateAction<GType>>;

  export type ReactSVGProps = SVGProps<SVGSVGElement>;
}
