export function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="72"
      height="72"
      fill="none"
      viewBox="0 0 72 72"
      {...props}
    >
      <path fill="url(#pattern0_2_23)" d="M0 0H72V72H0z"></path>
      <defs>
        <pattern id="pattern0_2_23" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use transform="scale(.01)" xlinkHref="#image0_2_23"></use>
        </pattern>
        <image
          id="image0_2_23"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}
