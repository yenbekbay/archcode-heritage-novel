import NextImage, {
  type ImageProps as NextImageProps,
  type StaticImageData,
} from "next/image";

type ImageProps = Omit<
  NextImageProps,
  "src" | "priority" | "preload" | "placeholder" | "sizes"
> & {
  src: StaticImageData;
  sizes: string;
  eager?: boolean;
};

export function Image(props: ImageProps) {
  const { eager, ...restProps } = props;

  return (
    <NextImage
      {...restProps}
      preload={eager}
      placeholder={props.src.blurDataURL === undefined ? "empty" : "blur"}
    />
  );
}
