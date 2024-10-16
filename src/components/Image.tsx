import { ComponentProps } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FullPageLoadingIndicator from "./full-page-loading-indicator";

export type ActionButtonProps = ComponentProps<"button"> & {
  onClick?: () => void | Promise<void>;
};

export default function Image({ ...props }: ComponentProps<"img">) {
  return <LazyLoadImage {...props} placeholder={<FullPageLoadingIndicator/>}/>;
}
