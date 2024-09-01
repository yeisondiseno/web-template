import React from 'react';
import { randomUUID } from 'crypto';

const ash = randomUUID?.();

const Phone = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 -5 85 95'
  >
    <mask
      id={ash}
      width='6em'
      height='6em'
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M87.214.316H.978v86.336h86.236V.316Z' />
    </mask>
    <g mask={`url(#${ash})`}>
      <path
        fill='currentColor'
        d='M17.79 43.488V10.252c.009-4.889 2.85-8.618 7.376-9.66.835-.18 1.687-.268 2.54-.26C38.623.315 49.537.312 60.452.325c5.029.005 8.843 3.041 9.76 7.76.124.746.177 1.5.159 2.256.007 22.094.008 44.186.004 66.277 0 4.977-2.807 8.7-7.374 9.756-.835.183-1.687.27-2.54.264-10.915.016-21.83.019-32.744.007-5.016-.007-8.855-3.06-9.761-7.763a13.11 13.11 0 0 1-.159-2.453c-.01-10.98-.011-21.96-.006-32.942m50.514-.012v-33.14c0-4.805-3.105-7.893-7.904-7.894-10.882-.004-21.763-.004-32.645 0-4.787 0-7.886 3.104-7.886 7.91-.005 22.093-.005 44.185 0 66.276 0 4.796 3.115 7.896 7.904 7.897 10.881.004 21.763.004 32.644 0a9.567 9.567 0 0 0 1.572-.084c3.86-.642 6.312-3.63 6.316-7.725.011-11.08.013-22.16.004-33.238'
      />
      <path
        stroke='currentColor'
        d='M17.79 43.488V10.252c.009-4.889 2.85-8.618 7.376-9.66.835-.18 1.687-.268 2.54-.26C38.623.315 49.537.312 60.452.325c5.029.005 8.843 3.041 9.76 7.76.124.746.177 1.5.159 2.256.007 22.094.008 44.186.004 66.277 0 4.977-2.807 8.7-7.374 9.756-.835.183-1.687.27-2.54.264-10.915.016-21.83.019-32.744.007-5.016-.007-8.855-3.06-9.761-7.763a13.11 13.11 0 0 1-.159-2.453c-.01-10.98-.011-21.96-.006-32.942m50.514-.012v-33.14c0-4.805-3.105-7.893-7.904-7.894-10.882-.004-21.763-.004-32.645 0-4.787 0-7.886 3.104-7.886 7.91-.005 22.093-.005 44.185 0 66.276 0 4.796 3.115 7.896 7.904 7.897 10.881.004 21.763.004 32.644 0a9.567 9.567 0 0 0 1.572-.084c3.86-.642 6.312-3.63 6.316-7.725.011-11.08.013-22.16.004-33.238'
      />
      <path
        fill='currentColor'
        stroke='currentColor'
        d='M87.218 43.474a24.117 24.117 0 0 1-6.606 16.63c-.18.192-.357.504-.562.529a2.11 2.11 0 0 1-1.386-.129c-.226-.183-.21-.923-.032-1.284.33-.49.716-.938 1.15-1.338a22.1 22.1 0 0 0-.713-29.58c-.136-.145-.282-.28-.405-.432a1.007 1.007 0 0 1 .025-1.497.957.957 0 0 1 1.488.06 41.966 41.966 0 0 1 3.092 3.825 23.79 23.79 0 0 1 3.949 13.216ZM9.78 27.367c-.21.311-.438.61-.682.894A21.684 21.684 0 0 0 3.06 43.644a21.657 21.657 0 0 0 5.869 14.86c.089.1.174.2.27.289.556.525.923 1.142.276 1.78-.71.697-1.296.199-1.831-.37a23.353 23.353 0 0 1-6.261-12.286 23.85 23.85 0 0 1 6.365-21.25c.146-.179.318-.333.51-.46.713-.402 1.537.1 1.52 1.16Z'
      />
      <path
        fill='currentColor'
        stroke='currentColor'
        d='M80.867 42.912a17.402 17.402 0 0 0-4.662-11.49c-.199-.22-.53-.42-.57-.661-.076-.46-.162-1.134.088-1.372a1.405 1.405 0 0 1 1.356-.031 8.124 8.124 0 0 1 1.545 1.64 20.034 20.034 0 0 1-1.144 26.248 1.73 1.73 0 0 1-.855.599 1.292 1.292 0 0 1-1.02-.369 1.353 1.353 0 0 1-.094-1.078c.098-.315.435-.561.677-.827a18.14 18.14 0 0 0 4.679-12.66Z'
      />
      <path
        fill='currentColor'
        d='M5.168 43.493a19.765 19.765 0 0 1 5.312-13.61c.111-.12.223-.24.335-.358.496-.51 1.07-.737 1.631-.177.562.56.351 1.128-.145 1.643a17.14 17.14 0 0 0-4.541 8.263 17.663 17.663 0 0 0 4.38 16.515c.57.552.982 1.194.263 1.852-.74.677-1.31.108-1.828-.448a19.876 19.876 0 0 1-3.767-5.73 19.544 19.544 0 0 1-1.638-7.95'
      />
      <path
        stroke='currentColor'
        d='M5.168 43.493a19.765 19.765 0 0 1 5.312-13.61c.111-.12.223-.24.335-.358.496-.51 1.07-.737 1.631-.177.562.56.351 1.128-.145 1.643a17.14 17.14 0 0 0-4.541 8.263 17.663 17.663 0 0 0 4.38 16.515c.57.552.982 1.194.263 1.852-.74.677-1.31.108-1.828-.448a19.876 19.876 0 0 1-3.767-5.73 19.544 19.544 0 0 1-1.638-7.95'
      />
      <path
        fill='currentColor'
        d='M78.81 43.342a15.916 15.916 0 0 1-4.292 10.846c-.514.555-1.082.985-1.762.346-.665-.625-.31-1.216.205-1.788a13.64 13.64 0 0 0-.017-18.766c-.522-.57-.874-1.156-.204-1.783.685-.642 1.25-.202 1.762.348a15.902 15.902 0 0 1 4.306 10.8'
      />
      <path
        stroke='currentColor'
        d='M78.81 43.342a15.916 15.916 0 0 1-4.292 10.846c-.514.555-1.082.985-1.762.346-.665-.625-.31-1.216.205-1.788a13.64 13.64 0 0 0-.017-18.766c-.522-.57-.874-1.156-.204-1.783.685-.642 1.25-.202 1.762.348a15.902 15.902 0 0 1 4.306 10.8'
      />
      <path
        fill='currentColor'
        d='M9.343 43.486a15.72 15.72 0 0 1 4.212-10.624c.516-.564 1.091-1.114 1.83-.443.74.672.272 1.27-.263 1.846a13.665 13.665 0 0 0-.04 18.626c.156.168.43.343.432.516.004.474.043 1.082-.223 1.378a1.296 1.296 0 0 1-1.264-.046 11.145 11.145 0 0 1-1.745-1.993 15.82 15.82 0 0 1-2.937-9.262'
      />
      <path
        stroke='currentColor'
        d='M9.343 43.486a15.72 15.72 0 0 1 4.212-10.624c.516-.564 1.091-1.114 1.83-.443.74.672.272 1.27-.263 1.846a13.665 13.665 0 0 0-.04 18.626c.156.168.43.343.432.516.004.474.043 1.082-.223 1.378a1.296 1.296 0 0 1-1.264-.046 11.145 11.145 0 0 1-1.745-1.993 15.82 15.82 0 0 1-2.937-9.262'
      />
      <path
        fill='currentColor'
        d='M66.185 43.46v32.952c0 1.599-.205 1.8-1.827 1.8h-40.55c-1.62 0-1.823-.2-1.823-1.803V10.506c0-1.535.218-1.75 1.776-1.75h40.647c1.553 0 1.775.219 1.775 1.752V43.46M24.149 76.027h39.827V10.943H24.152l-.003 65.084Z'
      />
      <path
        stroke='currentColor'
        d='M66.185 43.46v32.952c0 1.599-.205 1.8-1.827 1.8h-40.55c-1.62 0-1.823-.2-1.823-1.803V10.506c0-1.535.218-1.75 1.776-1.75h40.647c1.553 0 1.775.219 1.775 1.752V43.46M24.149 76.027h39.827V10.943H24.152l-.003 65.084Z'
      />
      <path
        fill='currentColor'
        d='M44.059 82.403c-1.314 0-2.627-.008-3.944.004-.727.008-1.27-.264-1.27-1.037 0-.774.54-1.042 1.27-1.04 2.66.011 5.32.011 7.98 0 .742 0 1.246.316 1.22 1.083-.023.713-.527.994-1.22.99-1.342-.01-2.692 0-4.038 0'
      />
      <path
        stroke='currentColor'
        d='M44.059 82.403c-1.314 0-2.627-.008-3.944.004-.727.008-1.27-.264-1.27-1.037 0-.774.54-1.042 1.27-1.04 2.66.011 5.32.011 7.98 0 .742 0 1.246.316 1.22 1.083-.023.713-.527.994-1.22.99-1.342-.01-2.692 0-4.038 0'
      />
      <path
        fill='currentColor'
        stroke='currentColor'
        d='M45.28 5.856c-.408.251-.794.663-1.227.723a.812.812 0 0 1-.944-1.035 1.42 1.42 0 0 1 .974-.902c.389-.019.8.462 1.201.724 0 .168 0 .326-.005.49Z'
      />
      <path
        fill='currentColor'
        d='M35.412 53.431c-1.019.029-1.56-.8-1.184-1.501a3.1 3.1 0 0 1 .573-.672c5.687-5.696 11.376-11.392 17.068-17.087.184-.186.367-.466.587-.503.382-.067.936-.129 1.15.084.246.35.356.78.308 1.205-.007.234-.32.474-.526.682-5.712 5.719-11.427 11.436-17.145 17.15-.26.236-.538.451-.831.644'
      />
      <path
        stroke='currentColor'
        d='M35.412 53.431c-1.019.029-1.56-.8-1.184-1.501a3.1 3.1 0 0 1 .573-.672c5.687-5.696 11.376-11.392 17.068-17.087.184-.186.367-.466.587-.503.382-.067.936-.129 1.15.084.246.35.356.78.308 1.205-.007.234-.32.474-.526.682-5.712 5.719-11.427 11.436-17.145 17.15-.26.236-.538.451-.831.644'
      />
      <path
        fill='currentColor'
        d='M35.379 47.47c-1.026 0-1.532-.819-1.143-1.523.143-.22.314-.42.51-.594 3.734-3.736 7.468-7.472 11.204-11.205.161-.161.32-.424.504-.448.414-.055 1.017-.15 1.222.07.221.396.31.852.252 1.301 0 .172-.266.356-.427.518-3.78 3.783-7.563 7.564-11.35 11.34a4.52 4.52 0 0 1-.77.542'
      />
      <path
        stroke='currentColor'
        d='M35.379 47.47c-1.026 0-1.532-.819-1.143-1.523.143-.22.314-.42.51-.594 3.734-3.736 7.468-7.472 11.204-11.205.161-.161.32-.424.504-.448.414-.055 1.017-.15 1.222.07.221.396.31.852.252 1.301 0 .172-.266.356-.427.518-3.78 3.783-7.563 7.564-11.35 11.34a4.52 4.52 0 0 1-.77.542'
      />
      <path
        fill='currentColor'
        d='M54.189 40.463a6.684 6.684 0 0 1-.68 1.007 4546.7 4546.7 0 0 1-11.487 11.502c-.503.504-1.06.748-1.623.183-.592-.594-.355-1.174.18-1.709A9516.66 9516.66 0 0 0 51.446 40.58a4.32 4.32 0 0 1 .932-.865c.34-.167.731-.202 1.096-.097.276.1.442.503.715.846'
      />
      <path
        stroke='currentColor'
        d='M54.189 40.463a6.676 6.676 0 0 1-.68 1.007 4546.7 4546.7 0 0 1-11.487 11.502c-.503.504-1.06.748-1.623.183-.592-.594-.355-1.174.18-1.709A9516.66 9516.66 0 0 0 51.446 40.58a4.32 4.32 0 0 1 .932-.865c.34-.167.731-.202 1.096-.097.276.1.442.503.715.846'
      />
    </g>
  </svg>
);

export default Phone;
