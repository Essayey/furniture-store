export function ShoppingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path fill="url(#pattern0_2_22)" d="M0 0H72V72H0z"></path>
      <defs>
        <pattern id="pattern0_2_22" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use transform="scale(.01)" xlinkHref="#image0_2_22"></use>
        </pattern>
        <image
          id="image0_2_22"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}
