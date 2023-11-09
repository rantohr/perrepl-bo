export default function NotesClient() {
  return (
    <div className="mt-20 ">
      <p className="font-normal text-xs text-black-1 text-center">
        Ce service vous offre un suivi détaillé de toutes vos activités, avec
        des notes complètes sur votre historique client.
      </p>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="w-max px-4 py-4 text-xs font-bold text-center justify-center gap-2 flex items-center text-white bg-violet-1 rounded-lg hover:bg-violet-1 focus:ring-0 focus:outline-none focus:ring-blue-300 "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3969 1.8359C16.1781 2.61684 16.1781 3.88434 15.3969 4.66559L13.7688 6.29371L9.70625 2.23215L11.3344 0.603713C12.1156 -0.177475 13.3844 -0.177475 14.1656 0.603713L15.3969 1.8359ZM7.50313 3.59059C7.2375 3.29684 6.7625 3.29684 6.46875 3.59059L3.25313 6.75309C2.9875 7.07184 2.5125 7.07184 2.21969 6.75309C1.92688 6.48746 1.92688 6.01246 2.21969 5.71871L5.40938 2.53028C6.2875 1.65153 7.7125 1.65153 8.59063 2.53028L13.0594 6.99996L7.17188 12.8906C5.67188 14.3906 3.75938 15.4125 1.67813 15.8281L0.897187 15.9843C0.65125 16.0343 0.396875 15.9562 0.219687 15.7531C0.0423747 15.6031 -0.034594 15.35 0.0145685 15.1031L0.170781 14.3218C0.586875 12.2406 1.61 10.3281 3.11063 8.82809L7.94063 3.99996L7.50313 3.59059Z"
              fill="white"
            />
          </svg>
          Nouvelle Note
        </button>
      </div>
    </div>
  );
}
