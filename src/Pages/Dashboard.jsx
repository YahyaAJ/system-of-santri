import React from "react";
import logo from "../assets/logo.svg";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* <div className="h-screen w-[0%]" /> */}
      <div className="flex w-full items-center justify-center ">
        <svg
          className="opacity-10 w-[30%] mt-[10vh]"
          width="440"
          height="469"
          viewBox="0 0 440 469"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_553_183)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M260.04 0V6.08275C259.373 8.96476 259.71 13.4471 259.864 20.8116V33.941L308.309 34.4203C316.133 34.1032 323.791 41.9445 323.291 52.3506C323.291 52.3506 322.46 69.8005 322.295 82.6082C322.119 94.4553 322.119 95.4172 329.952 102.461C354.092 123.754 374.733 142.325 398.706 164.258L409.528 174.665C409.704 174.827 409.858 175.144 410.026 175.306L418.684 183.632C420.349 185.393 421.847 188.115 424.844 188.115C430.504 188.115 439.992 170.022 439.992 163.138H440C440 153.852 434.842 148.73 428.016 142.326L426.851 141.365C414.033 130.158 400.714 116.392 387.562 103.584C380.903 97.0197 374.576 90.9347 367.917 84.8514L364.42 81.4905C360.925 77.6483 359.428 77.1678 359.428 69.9633V39.0651C359.428 33.7822 359.757 29.4576 359.428 25.6153C358.595 14.8888 348.44 0.800893 336.454 0.64084L260.04 0ZM179.454 0.00260503L103.042 0.643441C91.0558 0.80526 80.9006 14.8914 80.0686 25.6179C79.7386 29.4601 80.0686 33.7819 80.0686 39.0651C80.0686 48.8309 79.893 60.1975 80.0686 69.9633C80.0686 77.1678 78.5686 77.6483 75.0732 81.4905L69.7448 86.615C66.9152 89.3361 54.4298 102.143 51.7664 103.584H51.7744L79.9088 128.717L109.376 102.461C117.2 95.4172 117.368 94.4579 117.201 82.6108C117.026 69.8031 116.202 52.3506 116.202 52.3506C115.703 40.6637 124.359 34.4203 131.185 34.4203L179.63 33.941L179.454 0.00260503ZM15.1588 78.6097C9.49832 78.6097 0.00812658 96.8587 0.00812658 103.743H0C0 113.029 5.16102 118.152 11.9867 124.396L13.1515 125.516C25.9703 136.723 39.2875 150.491 52.2729 163.299C58.9318 169.863 65.4262 175.947 72.0856 181.871L75.5797 185.393C79.0755 189.235 80.575 189.715 80.575 196.92C80.3994 206.686 80.575 218.052 80.575 227.818C80.575 233.101 80.2454 237.424 80.575 241.106C81.4079 251.833 91.5622 266.081 103.549 266.081L179.963 266.883V260.639C180.462 257.918 180.29 253.433 180.136 246.069V232.942L131.691 232.301C123.867 232.781 116.209 224.936 116.709 214.53C116.709 214.53 117.542 196.92 117.708 184.272C117.883 172.425 117.707 171.464 109.882 164.419C85.9091 143.126 65.2665 124.554 41.2939 102.461L30.4719 92.0541C30.2966 91.8921 30.1419 91.7373 29.9735 91.5749L21.3187 83.2515C19.6536 81.3308 17.9894 78.6097 15.1588 78.6097ZM360.091 138.163L330.624 164.419C322.634 171.464 322.634 172.425 322.801 184.272C322.977 196.92 323.798 214.53 323.798 214.53C324.297 226.217 315.641 232.301 308.815 232.301L260.37 232.942L260.546 266.883L336.96 266.084C348.947 266.084 359.102 251.833 359.934 241.106C360.264 237.424 359.934 233.101 359.934 227.818C359.934 218.052 360.11 206.686 359.934 196.92C359.934 189.715 361.434 189.235 364.929 185.393L370.255 180.271C373.086 177.55 385.573 164.74 388.236 163.299H388.226L360.091 138.163ZM95.1051 329.448C84.0092 329.448 73.8373 334.007 66.7867 341.343C59.6209 348.679 55.3445 358.46 55.3445 369.464C55.3445 380.468 59.6209 390.361 66.7867 397.585C73.8373 404.811 84.0092 409.48 95.1051 409.48C105.739 409.48 115.911 404.811 122.73 397.585C129.896 390.361 134.403 380.468 134.403 369.464C134.403 358.46 129.896 348.679 122.73 341.343C115.911 334.007 105.739 329.448 95.1051 329.448ZM328.937 329.448C317.841 329.448 307.669 334.007 300.618 341.343C293.452 348.679 289.176 358.46 289.176 369.464C289.176 380.468 293.452 390.361 300.618 397.585C307.669 404.811 317.841 409.48 328.937 409.48C339.57 409.48 349.74 404.811 356.559 397.585C363.725 390.361 368.234 380.468 368.234 369.464C368.234 358.46 363.725 348.679 356.559 341.343C349.74 334.007 339.57 329.448 328.937 329.448ZM6.4552 331.673C2.98771 331.673 0.097519 334.339 0.097519 337.784V403.366C0.097519 406.701 2.98771 409.48 6.4552 409.48C10.0383 409.48 12.9267 406.701 12.9267 403.366V379.246H27.1455C40.8999 379.246 51.9939 368.574 51.9939 355.569C51.9939 342.342 40.8999 331.673 27.1455 331.673H6.57171H6.4552ZM226.515 331.673C222.932 331.673 220.157 334.339 220.157 337.784V403.366C220.157 406.701 222.932 409.48 226.515 409.48H240.154C262.461 409.48 280.492 392.028 280.492 370.464C280.492 349.123 262.461 331.673 240.154 331.673H226.515ZM385.262 332.228C381.679 332.228 378.904 335.119 378.904 338.342V403.366C378.904 406.701 381.679 409.48 385.262 409.48C388.845 409.48 391.617 406.701 391.617 403.366V387.582L403.639 375.8L428.604 407.255C429.875 408.7 431.611 409.48 433.344 409.48C434.847 409.48 436.233 409.035 437.389 408.034C440.163 405.923 440.625 402.033 438.312 399.477L412.654 367.13L438.082 342.789C440.51 340.343 440.51 336.451 438.082 334.116C435.539 331.671 431.61 331.671 429.067 334.116L391.617 370.243V338.342C391.617 335.119 388.845 332.228 385.262 332.228ZM151.715 332.449C150.498 332.488 149.266 332.853 148.183 333.562C146.449 334.785 145.526 336.786 145.642 338.675V338.787V403.366C145.642 406.701 148.414 409.48 151.997 409.48C155.349 409.48 158.238 406.701 158.238 403.366V357.236L195.225 406.588C195.34 406.811 195.573 407.033 195.804 407.255C196.96 408.589 198.693 409.48 200.542 409.48C204.01 409.48 206.9 406.701 206.9 403.366V338.785C206.9 335.561 204.01 332.783 200.542 332.783C197.075 332.783 194.301 335.561 194.301 338.785V384.581L156.967 334.896C155.739 333.228 153.744 332.385 151.715 332.449ZM95.1051 342.122C102.04 342.122 108.514 345.011 113.369 350.012C118.107 354.903 121.227 361.906 121.227 369.464C121.227 377.022 118.107 384.024 113.369 388.804C108.514 393.806 102.04 396.807 95.1051 396.807C87.7078 396.807 81.2363 393.806 76.3818 388.804C71.5273 384.024 68.5208 377.022 68.5208 369.464C68.5208 361.906 71.5273 354.903 76.3818 350.012C81.2363 345.011 87.7078 342.122 95.1051 342.122ZM328.937 342.122C335.872 342.122 342.343 345.011 347.197 350.012C351.936 354.903 355.058 361.906 355.058 369.464C355.058 377.022 351.936 384.024 347.197 388.804C342.343 393.806 335.872 396.807 328.937 396.807C321.539 396.807 315.065 393.806 310.211 388.804C305.356 384.024 302.352 377.022 302.352 369.464C302.352 361.906 305.356 354.903 310.211 350.012C315.065 345.011 321.539 342.122 328.937 342.122ZM12.9267 344.011H27.1455C33.8493 344.011 39.0491 349.122 39.1647 355.569C39.0491 361.794 33.8493 366.909 27.1455 366.909H12.9267V344.011ZM232.986 344.011H240.154C255.411 344.011 267.663 355.903 267.663 370.464C267.663 385.248 255.411 397.029 240.154 397.14H232.986V344.011ZM98.421 430.232C92.9557 430.232 88.5839 431.991 85.3046 435.512C82.0428 439.016 80.4126 443.723 80.4126 449.629C80.4126 455.536 82.0428 460.244 85.3046 463.744C88.5839 467.248 92.9557 469 98.421 469C103.869 469 108.224 467.248 111.486 463.744C114.748 460.226 116.378 455.518 116.378 449.629C116.378 443.723 114.748 439.016 111.486 435.512C108.224 431.991 103.869 430.232 98.421 430.232ZM148.416 430.232C142.343 430.232 137.589 431.943 134.153 435.364C130.735 438.768 129.028 443.524 129.028 449.629C129.028 455.718 130.735 460.478 134.153 463.899C137.589 467.301 142.343 469 148.416 469C151.192 469 153.803 468.65 156.25 467.951C158.696 467.235 160.935 466.182 162.965 464.797V448.753H149.171V452.908H157.761V462.943C156.599 463.593 155.288 464.08 153.831 464.398C152.373 464.699 150.716 464.85 148.86 464.85C144.106 464.85 140.53 463.571 138.135 461.018C135.758 458.465 134.571 454.669 134.571 449.629C134.571 444.572 135.758 440.769 138.135 438.216C140.53 435.663 144.106 434.387 148.86 434.387C151.272 434.387 153.571 434.787 155.756 435.588C157.943 436.389 160.006 437.582 161.949 439.167V433.788C160.023 432.62 157.917 431.734 155.627 431.133C153.354 430.533 150.949 430.232 148.416 430.232ZM0.0948099 430.909V468.274H5.35269V453.258H11.9651C16.32 453.258 19.6071 452.315 21.828 450.43C24.0662 448.545 25.1843 445.758 25.1843 442.072C25.1843 438.418 24.0662 435.647 21.828 433.762C19.6071 431.86 16.32 430.909 11.9651 430.909H0.0948099ZM38.9263 430.909V468.274H44.1844V452.483H49.9079C51.99 452.483 53.6303 452.89 54.8275 453.709C56.0419 454.527 57.2924 456.187 58.5763 458.691L63.547 468.274H69.1953L63.8585 458.063C62.7827 455.961 61.7082 454.311 60.6324 453.107C59.5738 451.908 58.48 451.125 57.3518 450.758C59.5206 450.156 61.1706 449.076 62.2983 447.528C63.4436 445.975 64.0156 444.024 64.0156 441.671C64.0156 438.066 62.9213 435.373 60.7354 433.587C58.549 431.802 55.2354 430.909 50.7936 430.909H38.9263ZM179.256 430.909V468.274H184.514V452.483H190.241C192.323 452.483 193.963 452.89 195.16 453.709C196.374 454.527 197.622 456.187 198.906 458.691L203.877 468.274H209.525L204.191 458.063C203.115 455.961 202.038 454.311 200.962 453.107C199.904 451.908 198.812 451.125 197.685 450.758C199.853 450.156 201.5 449.076 202.628 447.528C203.773 445.975 204.346 444.024 204.346 441.671C204.346 438.066 203.254 435.373 201.068 433.587C198.882 431.802 195.568 430.909 191.126 430.909H179.256ZM230.814 430.909L215.98 468.274H221.522L225.063 458.691H242.578L246.119 468.274H251.583L236.773 430.909H230.814ZM263.894 430.909V468.274H268.995V435.463L279.015 461.089H284.298L294.318 435.463V468.274H299.446V430.909H291.611L281.643 456.337L271.726 430.909H263.894ZM316.568 430.909V468.274H321.672V435.463L331.689 461.089H336.974L346.994 435.463V468.274H352.122V430.909H344.288L334.319 456.337L324.402 430.909H316.568ZM369.244 430.909V468.274H394.283V464.022H374.502V450.479H393.007V446.227H374.502V435.163H393.814V430.909H369.244ZM409.636 430.909V468.274H414.894V452.483H420.621C422.703 452.483 424.343 452.89 425.54 453.709C426.755 454.527 428.003 456.187 429.286 458.691L434.257 468.274H439.905L434.571 458.063C433.496 455.961 432.418 454.311 431.343 453.107C430.284 451.908 429.193 451.125 428.065 450.758C430.234 450.156 431.881 449.076 433.008 447.528C434.154 445.975 434.726 444.024 434.726 441.671C434.726 438.066 433.634 435.373 431.448 433.587C429.262 431.802 425.946 430.909 421.504 430.909H409.636ZM98.421 434.337C102.238 434.337 105.259 435.707 107.479 438.443C109.718 441.179 110.836 444.908 110.836 449.629C110.836 454.333 109.718 458.054 107.479 460.792C105.259 463.527 102.238 464.898 98.421 464.898C94.604 464.898 91.5666 463.527 89.3112 460.792C87.0729 458.054 85.9549 454.333 85.9549 449.629C85.9549 444.908 87.0729 441.179 89.3112 438.443C91.5666 435.707 94.604 434.337 98.421 434.337ZM5.35269 435.064H11.9651C14.4115 435.064 16.3014 435.672 17.6374 436.89C18.9734 438.108 19.642 439.836 19.642 442.072C19.642 444.324 18.9734 446.059 17.6374 447.276C16.3014 448.497 14.4115 449.103 11.9651 449.103H5.35269V435.064ZM44.1844 435.064H50.7936C53.3271 435.064 55.2363 435.621 56.5202 436.739C57.8217 437.841 58.4707 439.485 58.4707 441.671C58.4707 443.855 57.8217 445.515 56.5202 446.652C55.2363 447.771 53.3271 448.329 50.7936 448.329H44.1844V435.064ZM184.514 435.064H191.126C193.659 435.064 195.566 435.621 196.85 436.739C198.151 437.841 198.803 439.485 198.803 441.671C198.803 443.855 198.151 445.515 196.85 446.652C195.566 447.771 193.659 448.329 191.126 448.329H184.514V435.064ZM414.894 435.064H421.504C424.037 435.064 425.946 435.621 427.23 436.739C428.532 437.841 429.183 439.485 429.183 441.671C429.183 443.855 428.532 445.515 427.23 446.652C425.946 447.771 424.037 448.329 421.504 448.329H414.894V435.064ZM233.783 435.89L240.94 454.483H226.65L233.783 435.89Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_553_183">
              <rect width="440" height="469" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
