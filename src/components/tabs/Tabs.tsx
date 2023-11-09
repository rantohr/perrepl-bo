type PropsItemsTabs = {
  active: boolean;
  label: string;
  callback?: () => void;
};
const ItemsTabs = ({ active, label, callback }: PropsItemsTabs) => {
  return (
    <li className="mr-2">
      <a
        href="#"
        className={`
        inline-block p-4
        uppercase
        text-xs
        ${active ? "text-violet-1 border-violet-light" : "text-grey"}
        border-b-2
        font-bold
        hover:text-violet-1 
        hover:border-violet-light
        border-transparent rounded-t-lg active dark:text-blue-500 dark:border-blue-500
        `}
        aria-current="page"
        onClick={() => {
          if (callback) callback();
        }}
      >
        {label}
      </a>
    </li>
  );
};

type PropsTabs = {
  items: PropsItemsTabs[];
};

export default function Tabs({ items }: PropsTabs) {
  return (
    <div>
      <ul className="flex flex-wrap -mb-px justify-center">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {items.map((item, indexItem) => (
              <ItemsTabs
                active={item.active}
                label={item.label}
                callback={item.callback}
                key={indexItem}
              />
            ))}
            {/* <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Profile
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Settings
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Contacts
              </a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </ul>
    </div>
  );
}
