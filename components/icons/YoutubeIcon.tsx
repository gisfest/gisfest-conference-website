import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
    
}

const YoutubeIcon = (props: Props) => (
  <svg
    width={72}
    height={24}
    viewBox="0 0 72 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.2929 5.75975C18.1938 5.39155 17.9997 5.05585 17.7301 4.78623C17.4605 4.5166 17.1248 4.32253 16.7566 4.22342C15.4006 3.85645 9.95193 3.85645 9.95193 3.85645C9.95193 3.85645 4.50325 3.85645 3.1473 4.22342C2.77911 4.32253 2.4434 4.5166 2.17378 4.78623C1.90416 5.05585 1.71008 5.39155 1.61098 5.75975C1.35779 7.14261 1.23493 8.54618 1.244 9.952C1.23493 11.3578 1.35779 12.7614 1.61098 14.1442C1.71008 14.5124 1.90416 14.8481 2.17378 15.1178C2.4434 15.3874 2.77911 15.5815 3.1473 15.6806C4.50325 16.0475 9.95193 16.0475 9.95193 16.0475C9.95193 16.0475 15.4006 16.0475 16.7566 15.6806C17.1248 15.5815 17.4605 15.3874 17.7301 15.1178C17.9997 14.8481 18.1938 14.5124 18.2929 14.1442C18.5461 12.7614 18.6689 11.3578 18.6599 9.952C18.6689 8.54618 18.5461 7.14261 18.2929 5.75975ZM8.21034 12.5644V7.33962L12.7322 9.952L8.21034 12.5644Z"
      fill="#E4E4E5"
    />
    <g>
      <g>
        <path
          d="M63.014 9.74934C63.139 9.61206 63.2912 9.50239 63.461 9.42735C63.6308 9.35231 63.8144 9.31355 64 9.31355C64.1856 9.31355 64.3692 9.35231 64.539 9.42735C64.7088 9.50239 64.861 9.61206 64.986 9.74934L65.666 10.496C65.798 10.6409 65.9604 10.755 66.1415 10.83C66.3227 10.905 66.5181 10.9392 66.714 10.93L67.7227 10.8833C67.908 10.8746 68.0932 10.9047 68.2662 10.9716C68.4393 11.0385 68.5965 11.1408 68.7278 11.2719C68.859 11.4031 68.9615 11.5602 69.0286 11.7332C69.0957 11.9062 69.1259 12.0913 69.1173 12.2767L69.07 13.286C69.0608 13.4819 69.095 13.6773 69.17 13.8585C69.245 14.0396 69.3591 14.202 69.504 14.334L70.2507 15.014C70.3879 15.139 70.4976 15.2912 70.5727 15.461C70.6477 15.6308 70.6865 15.8144 70.6865 16C70.6865 16.1856 70.6477 16.3692 70.5727 16.539C70.4976 16.7088 70.3879 16.861 70.2507 16.986L69.504 17.666C69.3591 17.798 69.245 17.9604 69.17 18.1415C69.095 18.3227 69.0608 18.5182 69.07 18.714L69.1167 19.7227C69.1254 19.908 69.0953 20.0932 69.0284 20.2662C68.9615 20.4393 68.8592 20.5965 68.7281 20.7278C68.5969 20.859 68.4398 20.9615 68.2668 21.0286C68.0938 21.0957 67.9087 21.1259 67.7233 21.1173L66.714 21.07C66.5181 21.0608 66.3227 21.095 66.1415 21.17C65.9604 21.245 65.798 21.3591 65.666 21.504L64.986 22.2507C64.861 22.3879 64.7088 22.4976 64.539 22.5727C64.3692 22.6477 64.1856 22.6865 64 22.6865C63.8144 22.6865 63.6308 22.6477 63.461 22.5727C63.2912 22.4976 63.139 22.3879 63.014 22.2507L62.334 21.504C62.202 21.3591 62.0396 21.245 61.8585 21.17C61.6773 21.095 61.4818 21.0608 61.286 21.07L60.2773 21.1167C60.092 21.1254 59.9068 21.0954 59.7338 21.0284C59.5607 20.9615 59.4035 20.8592 59.2722 20.7281C59.141 20.5969 59.0385 20.4398 58.9714 20.2668C58.9043 20.0938 58.8741 19.9087 58.8827 19.7233L58.93 18.714C58.9392 18.5182 58.905 18.3227 58.83 18.1415C58.755 17.9604 58.6409 17.798 58.496 17.666L57.7493 16.986C57.6121 16.861 57.5024 16.7088 57.4273 16.539C57.3523 16.3692 57.3135 16.1856 57.3135 16C57.3135 15.8144 57.3523 15.6308 57.4273 15.461C57.5024 15.2912 57.6121 15.139 57.7493 15.014L58.496 14.334C58.6409 14.202 58.755 14.0396 58.83 13.8585C58.905 13.6773 58.9392 13.4819 58.93 13.286L58.8833 12.2773C58.8746 12.092 58.9047 11.9068 58.9716 11.7338C59.0385 11.5607 59.1408 11.4035 59.2719 11.2722C59.4031 11.141 59.5602 11.0385 59.7332 10.9714C59.9062 10.9043 60.0913 10.8741 60.2767 10.8827L61.286 10.93C61.4818 10.9392 61.6773 10.905 61.8585 10.83C62.0396 10.755 62.202 10.6409 62.334 10.496L63.014 9.74934Z"
          stroke="#79717A"
          strokeWidth={1.5}
        />
        <path
          d="M62 16L63.3333 17.3333L66 14.6667"
          stroke="#79717A"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default YoutubeIcon ;