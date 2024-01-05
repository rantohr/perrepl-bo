import { FC, useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { IOrder } from "../../interfaces/iorder.interface";
import { getOrder } from "../../services/client.service";
import { groupBy } from "lodash";

const ChartOrder = ({ clientList }: { clientList: IOrder[] }) => {
  // const data = [
  //   ["Task", "Hours per Day"],
  //   ["Work", 11],
  //   ["Eat", 2],
  //   ["Commute", 2],
  //   ["Watch TV", 2],
  //   ["Sleep", 7],
  // ];

  type DataItem = [string, number | string];
  const data: DataItem[] = [["Task", "Hours per Day"]];

  const groupByStatus = groupBy(clientList, "order_statuses.order_status");

  for (const key in groupByStatus) {
    if (Object.prototype.hasOwnProperty.call(groupByStatus, key)) {
      const element = groupByStatus[key];
      data.push([key, element.length]);
    }
  }

  console.log("data", data);
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        // title: "My Daily Activities",
        pieHole: 0.4,
        legend: "left",
        colors: [
          "#392467",
          "#5D3587",
          "#A367B1",
          "#FFD1E3",
          "#E7BCDE",
          "#67729D",
        ],
      }}
      width={"100%"}
      height={"172px"}
    />
  );
};

const StyleDash = () => {
  return (
    <svg
      width="301"
      height="186"
      viewBox="0 0 301 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_150_1087)">
        <g filter="url(#filter0_f_150_1087)">
          <ellipse
            cx="94.9259"
            cy="97.6217"
            rx="94.9259"
            ry="97.6217"
            transform="matrix(0.992849 0.11938 -0.11279 0.993619 90.5427 -3.04414)"
            fill="#B384FF"
            fill-opacity="0.4"
          />
        </g>
        <path
          d="M125.393 26.3572C102.124 23.5593 80.7124 40.3962 78.0229 64.0892C76.6677 76.0283 79.6233 87.6191 85.5059 97.8495C91.9245 109.126 100.342 119.29 110.226 127.663C112.695 129.745 114.905 129.885 117.523 128.54C128.955 122.731 139.422 114.837 148.259 105.395C156.27 96.8351 161.747 86.2582 163.102 74.3191C165.792 50.6262 148.728 29.163 125.393 26.3572Z"
          fill="#381A44"
        />
        <path
          d="M157.399 63.692C158.34 66.5943 158.883 69.6388 158.975 72.7611L157.724 72.7898C157.767 74.25 157.707 75.7285 157.538 77.2181C157.363 78.7534 157.024 80.3218 156.535 81.9073L157.731 82.2836C156.791 85.3346 155.336 88.4061 153.509 91.3893L152.441 90.729C150.772 93.4534 148.779 96.1107 146.575 98.6107L147.515 99.4435C145.285 101.972 142.849 104.337 140.321 106.449L139.516 105.485C136.885 107.684 134.161 109.597 131.481 111.127L132.106 112.217C128.893 114.051 125.725 115.356 122.819 115.968L122.554 114.742C120.874 115.096 119.332 115.193 117.964 115.029C116.517 114.855 115.01 114.419 113.467 113.741L112.97 114.888C110.156 113.651 107.316 111.692 104.595 109.215L105.433 108.291C103.119 106.184 100.881 103.682 98.8203 100.915L97.8193 101.66C95.8275 98.9861 94.0034 96.0793 92.4286 93.0554L93.5371 92.4816C91.9843 89.4999 90.682 86.4083 89.7096 83.3244L88.5168 83.6948C87.4574 80.335 86.7769 76.9747 86.5754 73.7559L87.824 73.6855C87.7195 72.0162 87.7494 70.3971 87.9253 68.8479C88.0944 67.3583 88.367 65.9054 88.7357 64.4946L87.5252 64.17C88.3135 61.1535 89.524 58.3198 91.0895 55.7189L92.162 56.3708C93.6842 53.8418 95.5568 51.5389 97.7146 49.5125L96.8557 48.5959C99.0725 46.514 101.577 44.7159 104.301 43.2516L104.898 44.3565C107.471 42.9739 110.248 41.8987 113.168 41.1768L112.861 39.9602C115.782 39.2384 118.84 38.8584 121.979 38.8625L121.985 40.1155C123.453 40.1174 124.939 40.2061 126.437 40.3863C127.936 40.5665 129.402 40.8328 130.83 41.179L131.117 39.9613C134.172 40.7019 137.063 41.7972 139.743 43.1926L139.172 44.3035C141.852 45.6988 144.314 47.4039 146.507 49.3595L147.335 48.426C149.659 50.4973 151.693 52.8411 153.384 55.3928L152.343 56.081C153.988 58.5647 155.295 61.2499 156.21 64.0719L157.399 63.692Z"
          stroke="#A9CFFF"
          stroke-width="2.50406"
          stroke-dasharray="9.03 9.03"
        />
        <path
          d="M126.26 131.881L113.51 129.347C113.793 126.86 115.233 124.719 115.374 123.475L126.913 126.123C134.425 128.287 140.13 135.57 139.222 143.57C138.314 151.57 131.251 157.318 123.478 156.384L89.6459 152.316C84.9821 151.755 80.7445 155.204 80.1997 160.004C79.6548 164.804 83.0058 169.165 87.6696 169.726L115.863 173.116C117.42 173.303 118.535 174.754 118.353 176.356C118.171 177.959 116.762 179.106 115.204 178.919L87.0108 175.529C79.2378 174.594 73.6528 167.326 74.5609 159.326C75.469 151.326 82.5317 145.578 90.3046 146.512L124.137 150.58C128.801 151.141 133.038 147.692 133.583 142.892C134.128 138.092 131.302 134.214 126.26 131.881Z"
          fill="#381A44"
        />
        <path
          d="M141.237 176.167L165.969 179.14C166.214 180.286 166.426 183.049 165.31 184.944L140.578 181.97C139.021 181.783 137.906 180.332 138.088 178.729C138.27 177.127 139.68 175.98 141.237 176.167Z"
          fill="#381A44"
        />
        <path
          d="M127.892 180.445C129.449 180.632 130.859 179.484 131.041 177.882C131.222 176.279 130.108 174.828 128.551 174.641C126.993 174.454 125.584 175.601 125.402 177.204C125.22 178.806 126.335 180.257 127.892 180.445Z"
          fill="#381A44"
        />
        <circle
          cx="11.2683"
          cy="11.2683"
          r="11.2683"
          transform="matrix(0.992849 0.11938 -0.11279 0.993619 212.351 49.4555)"
          fill="#F84031"
        />
        <circle
          cx="14.5805"
          cy="14.5805"
          r="14.5805"
          transform="matrix(0.992849 0.11938 -0.11279 0.993619 229.944 35.5443)"
          fill="#E9E74C"
        />
        <g filter="url(#filter1_biiii_150_1087)">
          <path
            d="M117.17 85.8748C111.858 85.2361 108.019 80.3724 108.646 74.8508C109.268 69.3722 114.117 65.3389 119.429 65.9776C124.744 66.6167 128.601 71.6968 127.979 77.1754C127.352 82.697 122.485 86.5139 117.17 85.8748"
            fill="white"
          />
        </g>
        <g filter="url(#filter2_f_150_1087)">
          <path
            d="M170.34 139.425C172.072 135.481 184.343 116.367 193.809 101.817C199.796 92.6144 212.459 90.7647 220.973 97.7946V97.7946C229.526 104.856 230.104 117.748 222.129 125.355C210.35 136.593 195.2 150.768 190.987 153.442C183.817 157.992 175.294 160.102 171.377 157.633C167.46 155.164 167.467 145.965 170.34 139.425Z"
            fill="#FFE4DB"
          />
        </g>
        <g filter="url(#filter3_f_150_1087)">
          <path
            d="M185.791 109.942C185.1 103.013 190.146 96.8716 197.06 96.2248V96.2248C203.974 95.578 210.139 100.671 210.829 107.6L213.647 135.879C214.337 142.808 209.292 148.949 202.378 149.596V149.596C195.464 150.243 189.299 145.15 188.609 138.221L185.791 109.942Z"
            fill="#C5EDFE"
          />
        </g>
        <g filter="url(#filter4_f_150_1087)">
          <path
            d="M197.474 109.828C197.606 106.677 200.265 104.246 203.413 104.399V104.399C206.56 104.552 209.005 107.23 208.872 110.382L208.046 130.066C207.913 133.218 205.254 135.649 202.107 135.496V135.496C198.959 135.343 196.515 132.664 196.647 129.513L197.474 109.828Z"
            fill="#D4FFFF"
          />
        </g>
        <g filter="url(#filter5_biiii_150_1087)">
          <path
            d="M182.201 30.6666C147.831 26.5341 116.164 51.7832 112.138 87.2489C110.109 105.121 114.45 122.461 123.117 137.758C132.574 154.619 144.986 169.811 159.569 182.318C163.212 185.429 166.476 185.634 170.347 183.614C187.249 174.893 202.729 163.054 215.804 148.902C227.657 136.073 235.772 120.23 237.801 102.359C241.827 66.8929 216.667 34.8108 182.201 30.6666Z"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter6_f_150_1087)">
          <path
            d="M184.955 103.572C186.046 93.9535 194.723 87.0926 204.335 88.2483V88.2483C213.946 89.404 220.853 98.1386 219.761 107.757L218.631 117.71C217.539 127.329 208.862 134.19 199.251 133.034V133.034C189.639 131.878 182.733 123.144 183.825 113.525L184.955 103.572Z"
            fill="#FFFFE7"
          />
        </g>
        <path
          d="M192.102 99.1986C196.397 90.3984 207.058 86.7286 215.913 91.0019V91.0019C224.769 95.2752 228.466 105.873 224.171 114.674L218.12 127.072C216.909 129.553 213.905 130.587 211.408 129.383L188.379 118.27C185.882 117.065 184.84 114.078 186.051 111.597L192.102 99.1986Z"
          fill="url(#paint0_linear_150_1087)"
        />
        <g filter="url(#filter7_f_150_1087)">
          <path
            d="M170.274 105.101C174.207 94.6059 185.937 89.2741 196.475 93.1916V93.1916C207.012 97.1091 212.366 108.793 208.433 119.287L201.656 137.37C197.723 147.865 185.993 153.197 175.455 149.279V149.279C164.918 145.361 159.564 133.678 163.497 123.183L170.274 105.101Z"
            fill="url(#paint1_linear_150_1087)"
          />
        </g>
        <g>
          <path
            d="M174.43 101.965C180.658 92.6987 193.314 90.1801 202.698 96.3395V96.3395C212.081 102.499 214.64 115.004 208.412 124.27L197.5 140.506C191.272 149.772 178.616 152.291 169.232 146.131V146.131C159.848 139.972 157.29 127.467 163.518 118.201L174.43 101.965Z"
            fill="url(#paint2_linear_150_1087)"
          />
        </g>
        <g filter="url(#filter8_f_150_1087)">
          <path
            d="M195.682 97.3854C198.881 95.2642 203.209 96.1536 205.348 99.372L211.639 108.84C213.776 112.055 212.917 116.38 209.72 118.499V118.499C207.208 120.164 203.901 120.01 201.532 118.117L195.063 112.95L192.847 105.063C192.028 102.149 193.172 99.0491 195.682 97.3854V97.3854Z"
            fill="white"
          />
        </g>
        <g filter="url(#filter9_f_150_1087)">
          <path
            d="M171.16 127.13C163.249 126.179 157.525 119.004 158.448 110.867C159.365 102.793 166.578 96.8578 174.488 97.8089C182.404 98.7607 188.155 106.255 187.239 114.329C186.315 122.466 179.075 128.082 171.16 127.13"
            fill="#A9CFFF"
          />
        </g>
        <g filter="url(#filter10_biiii_150_1087)">
          <path
            d="M171.725 122.156C163.814 121.205 158.089 114.029 159.013 105.893C159.93 97.819 167.143 91.8835 175.053 92.8346C182.969 93.7864 188.72 101.281 187.804 109.354C186.88 117.491 179.64 123.108 171.725 122.156"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter11_f_150_1087)">
          <path
            d="M231.335 153.259L216.397 168.937C215.766 169.621 214.892 170.011 213.975 170.019C213.057 170.026 212.177 169.65 211.535 168.977L200.215 157.422L187.295 171.013C186.332 172.244 184.681 172.651 183.279 172.003C181.877 171.355 181.077 169.815 181.333 168.258V168.258C181.414 167.482 181.754 166.758 182.294 166.21L197.736 150.009C198.36 149.331 199.224 148.939 200.132 148.923C201.041 148.907 201.917 149.268 202.564 149.924L213.879 161.52L226.468 148.346C227.079 147.662 227.933 147.262 228.836 147.238C229.74 147.213 230.614 147.566 231.26 148.215C232.593 149.572 232.63 151.773 231.344 153.176L231.335 153.259Z"
            fill="#A9CFFF"
          />
        </g>
        <g filter="url(#filter12_biiii_150_1087)">
          <path
            d="M234.882 143.601L219.944 159.279C219.313 159.963 218.438 160.353 217.521 160.361C216.604 160.368 215.723 159.992 215.081 159.319L203.761 147.764L190.842 161.355C189.878 162.586 188.227 162.992 186.825 162.344C185.423 161.696 184.623 160.157 184.879 158.6V158.6C184.96 157.824 185.3 157.1 185.84 156.552L201.283 140.351C201.907 139.673 202.77 139.281 203.679 139.265C204.587 139.249 205.463 139.61 206.11 140.266L217.426 151.862L230.014 138.688C230.625 138.004 231.48 137.604 232.383 137.58C233.286 137.555 234.16 137.908 234.806 138.557C236.139 139.914 236.177 142.115 234.891 143.518L234.882 143.601Z"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter13_biii_150_1087)">
          <path
            d="M261.6 47.8317C261.373 42.1838 257.104 37.3565 251.385 36.6688C249.234 36.4102 247.098 36.7637 245.178 37.671C242.976 32.7058 238.393 29.2296 232.937 28.5736C224.509 27.5602 216.865 33.6717 215.897 42.1967C215.891 42.2496 215.885 42.3043 215.881 42.3574C210.359 42.629 205.551 46.8928 204.9 52.6285C204.174 59.0228 208.853 64.8578 215.175 65.6179L257.209 70.6721C263.53 71.4322 269.39 66.8643 270.116 60.4701C270.773 54.6855 266.984 49.3572 261.6 47.8317V47.8317Z"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
        <g filter="url(#filter14_bd_150_1087)">
          <mask id="path-24-inside-1_150_1087" fill="white">
            <path d="M245.972 63.3588C245.647 63.3198 245.33 63.1956 245.05 62.9822L235.989 55.9637C235.467 55.5567 235.192 54.9034 235.267 54.2441L236.698 41.6392C236.815 40.6053 237.743 39.8662 238.769 39.9895C239.794 40.1128 240.531 41.0521 240.414 42.086L239.104 53.6269L247.321 59.9895C248.14 60.6272 248.299 61.8109 247.673 62.6369C247.257 63.1818 246.603 63.4348 245.972 63.3588" />
          </mask>
          <path
            d="M245.972 63.3588C245.647 63.3198 245.33 63.1956 245.05 62.9822L235.989 55.9637C235.467 55.5567 235.192 54.9034 235.267 54.2441L236.698 41.6392C236.815 40.6053 237.743 39.8662 238.769 39.9895C239.794 40.1128 240.531 41.0521 240.414 42.086L239.104 53.6269L247.321 59.9895C248.14 60.6272 248.299 61.8109 247.673 62.6369C247.257 63.1818 246.603 63.4348 245.972 63.3588"
            fill="white"
          />
          <path
            d="M245.05 62.9822L244.575 63.5988L244.58 63.6023L245.05 62.9822ZM235.989 55.9637L235.512 56.5784L235.514 56.5803L235.989 55.9637ZM239.104 53.6269L238.329 53.5338L238.279 53.9725L238.629 54.2436L239.104 53.6269ZM247.321 59.9895L247.797 59.3741L247.795 59.3728L247.321 59.9895ZM247.673 62.6369L248.294 63.1136L248.295 63.1116L247.673 62.6369ZM246.06 62.5835C245.872 62.5609 245.687 62.4892 245.52 62.3621L244.58 63.6023C244.973 63.9019 245.422 64.0787 245.883 64.1342L246.06 62.5835ZM245.525 62.3656L236.463 55.3471L235.514 56.5803L244.576 63.5988L245.525 62.3656ZM236.465 55.3489C236.161 55.1109 235.998 54.7264 236.042 54.3372L234.492 54.1509C234.387 55.0804 234.774 56.0025 235.512 56.5784L236.465 55.3489ZM236.042 54.3372L237.473 41.7324L235.923 41.5461L234.492 54.1509L236.042 54.3372ZM237.473 41.7324C237.542 41.1212 238.088 40.6936 238.681 40.7649L238.857 39.2141C237.398 39.0387 236.089 40.0893 235.923 41.5461L237.473 41.7324ZM238.681 40.7649C239.273 40.8361 239.708 41.3817 239.639 41.9929L241.189 42.1792C241.354 40.7224 240.315 39.3896 238.857 39.2141L238.681 40.7649ZM239.639 41.9929L238.329 53.5338L239.879 53.7201L241.189 42.1792L239.639 41.9929ZM238.629 54.2436L246.846 60.6062L247.795 59.3728L239.578 53.0103L238.629 54.2436ZM246.845 60.6049C247.324 60.9785 247.42 61.6758 247.051 62.1621L248.295 63.1116C249.179 61.946 248.955 60.2759 247.797 59.3741L246.845 60.6049ZM247.052 62.1601C246.807 62.4811 246.426 62.6275 246.06 62.5835L245.883 64.1342C246.781 64.2421 247.707 63.8825 248.294 63.1136L247.052 62.1601Z"
            fill="url(#paint3_linear_150_1087)"
            mask="url(#path-24-inside-1_150_1087)"
          />
        </g>
        <mask
          id="mask0_150_1087"
          maskUnits="userSpaceOnUse"
          x="175"
          y="31"
          width="70"
          height="83"
        >
          <path
            d="M231.675 56.8233C217.029 34.8858 189.325 30.2935 175.369 31.1376L175.739 105.582L242.865 113.654C245.238 103.851 246.322 78.7607 231.675 56.8233Z"
            fill="#2329D6"
          />
        </mask>
        <g mask="url(#mask0_150_1087)">
          <circle
            cx="50.0813"
            cy="50.0813"
            r="50.0813"
            transform="matrix(0.992849 0.11938 -0.11279 0.993619 193.421 -5.78363)"
            stroke="white"
            stroke-width="4.38211"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="8.76 8.76"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_150_1087"
          x="11.2721"
          y="-59.9906"
          width="325.014"
          height="330.555"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="33.8049"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter1_biiii_150_1087"
          x="98.5628"
          y="55.8948"
          width="39.4981"
          height="40.0661"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.00813" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_150_1087"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_150_1087"
            result="effect3_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="55.0894" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_150_1087"
            result="effect4_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.50406" dy="2.50406" />
          <feGaussianBlur stdDeviation="2.50406" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_innerShadow_150_1087"
            result="effect5_innerShadow_150_1087"
          />
        </filter>
        <filter
          id="filter2_f_150_1087"
          x="162.344"
          y="87.5664"
          width="71.3767"
          height="77.0658"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2.97711"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter3_f_150_1087"
          x="175.804"
          y="86.2457"
          width="47.8301"
          height="73.3293"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4.96185"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter4_f_150_1087"
          x="192.672"
          y="100.422"
          width="20.1746"
          height="39.05"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.98474"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter5_biiii_150_1087"
          x="101.629"
          y="20.2075"
          width="146.612"
          height="174.741"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.00813" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_150_1087"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_150_1087"
            result="effect3_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="55.0894" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_150_1087"
            result="effect4_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.50406" dy="2.50406" />
          <feGaussianBlur stdDeviation="2.50406" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_innerShadow_150_1087"
            result="effect5_innerShadow_150_1087"
          />
        </filter>
        <filter
          id="filter6_f_150_1087"
          x="163.679"
          y="68.0888"
          width="76.2279"
          height="85.1046"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10.0163"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter7_f_150_1087"
          x="147.181"
          y="76.8809"
          width="77.5673"
          height="88.7087"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.51219"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter8_f_150_1087"
          x="190.081"
          y="93.7287"
          width="25.2369"
          height="28.4251"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.25203"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter9_f_150_1087"
          x="148.334"
          y="87.6925"
          width="49.0171"
          height="49.5591"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.00813"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter10_biiii_150_1087"
          x="148.899"
          y="82.7182"
          width="49.0171"
          height="49.5591"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.00813" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_150_1087"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_150_1087"
            result="effect3_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="55.0894" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_150_1087"
            result="effect4_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.50406" dy="2.50406" />
          <feGaussianBlur stdDeviation="2.50406" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_innerShadow_150_1087"
            result="effect5_innerShadow_150_1087"
          />
        </filter>
        <filter
          id="filter11_f_150_1087"
          x="171.269"
          y="137.22"
          width="71.0318"
          height="45.1043"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.00813"
            result="effect1_foregroundBlur_150_1087"
          />
        </filter>
        <filter
          id="filter12_biiii_150_1087"
          x="174.816"
          y="127.562"
          width="71.0318"
          height="45.1043"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.00813" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_150_1087"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2.50406" />
          <feGaussianBlur stdDeviation="5.00813" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_150_1087"
            result="effect3_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.50406" />
          <feGaussianBlur stdDeviation="55.0894" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.45 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_150_1087"
            result="effect4_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2.50406" dy="2.50406" />
          <feGaussianBlur stdDeviation="2.50406" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_innerShadow_150_1087"
            result="effect5_innerShadow_150_1087"
          />
        </filter>
        <filter
          id="filter13_biii_150_1087"
          x="201.726"
          y="25.3635"
          width="71.5649"
          height="48.4916"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.55015" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_150_1087"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.775075" />
          <feGaussianBlur stdDeviation="1.55015" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.775075" />
          <feGaussianBlur stdDeviation="1.55015" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_150_1087"
            result="effect3_innerShadow_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.775075" />
          <feGaussianBlur stdDeviation="0.387537" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_innerShadow_150_1087"
            result="effect4_innerShadow_150_1087"
          />
        </filter>
        <filter
          id="filter14_bd_150_1087"
          x="205.992"
          y="10.7134"
          width="71.3259"
          height="81.9213"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="14.6313" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_150_1087"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="9.75423" dy="9.75423" />
          <feGaussianBlur stdDeviation="9.75423" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.577356 0 0 0 0 0.359375 0 0 0 0 0.9375 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_150_1087"
            result="effect2_dropShadow_150_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_150_1087"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_150_1087"
          x1="227.728"
          y1="96.7032"
          x2="162.484"
          y2="126.043"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0941878" stop-color="#FFE5DC" />
          <stop offset="0.230705" stop-color="#FFFFE7" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_150_1087"
          x1="210.737"
          y1="113.138"
          x2="162.912"
          y2="99.3712"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFFFE6" />
          <stop offset="0.360807" stop-color="#D5FFFF" />
          <stop offset="0.977083" stop-color="#D5FFFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_150_1087"
          x1="211.685"
          y1="121.18"
          x2="160.869"
          y2="144.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0153056" stop-color="#D4FFE7" />
          <stop offset="0.312156" stop-color="#D5FFFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_150_1087"
          x1="238.757"
          y1="42.6097"
          x2="251.493"
          y2="54.6951"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.25" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_150_1087">
          <rect
            width="311.552"
            height="320.4"
            fill="white"
            transform="matrix(0.992849 0.11938 -0.11279 0.993619 36.9041 -70)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Dashboard: FC = () => {
  const [clientList, setClientList] = useState<IOrder[]>([]);

  useEffect(() => {
    getOrder()
      .then((orders) => {
        setClientList(orders);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* <img src="photos/dash.png" />       */}
      <h3 className="text-violet-1 font-bold text-[32px]">Dashboard</h3>

      <div className="mt-4">
        <div className=" w-[548px] h-[186px] bgDashWelcom pl-4 flex">
          <div className="flex flex-col justify-center">
            <h4 className="font-bold text-white text-2xl">Hey Kristin!</h4>
            <p className="text-[#F2D2FF] text-xs font-normal">
              Bienvenue sur notre plateforme
            </p>

            <button className="btn btn-sm text-[#FFF] font-bold bg-violet-1 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm-.5 7.5c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.486 5.486 0 0 0 14.5 11m-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4"
                />
              </svg>
              Nouvelle demande
            </button>
          </div>
          <div className="flex grow justify-end">
            <StyleDash />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-2xl text-violet-1">
          Progressions des demandes
        </h4>

        <div className="mt-4 flex gap-5">
          <div className="w-[300px] h-[188px] bg-[#FFF] rounded-[12px] flex items-center ">
            <div className="flex flex-col gap-[22px]  text-center w-1/2">
              <p className="font-bold text-[48px] text-violet-1">
                {
                  clientList.filter(
                    (item) =>
                      item.order_statuses.order_status.toLowerCase() ===
                      "New".toLowerCase()
                  ).length
                }
              </p>
              <p className="text-10 font-bold text-blue-3">
                Nouvelles demandes
              </p>
            </div>

            <div className="bg-[#381A441A] w-[1px] h-[118px]"></div>
            <div className="flex flex-col gap-[22px] text-center w-1/2">
              <p className="font-bold text-[48px] text-violet-1">
                {" "}
                {
                  clientList.filter(
                    (item) =>
                      item.order_statuses.order_status.toLowerCase() ===
                      "In Progress".toLowerCase()
                  ).length
                }
              </p>
              <p className="text-10 font-bold text-blue-3">
                Demandes en cours de traitement
              </p>
            </div>
          </div>
          <div className=" h-[188px] bg-[#FFF] rounded-[12px] p-4 flex">
            <div>
              <h4 className="font-bold text-xs text-blue-3">Demandes</h4>
              <p className="font-bold text-2xl text-violet-1">
                {clientList.length}
              </p>
            </div>

            <ChartOrder clientList={clientList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
