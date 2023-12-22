import { FC, useState, useEffect, useRef } from 'react';
import { IListAction } from '../../interfaces/genricModule/icolumn.interface';

const GenericBtnDropdown: FC<{
  action: IListAction;
}> = ({ action }) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpenDropDown(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpenDropDown]);

    function toggleDropdown() {
        setIsOpenDropDown(!isOpenDropDown);
    }

    let btnColor =
        action.className === 'contained-button'
        ? 'bg-violet-1 shadow-violet-200 text-white'
        : 'bg-white shadow-violet-200 text-violet-1';

    return (
        <>
            <div className='relative flex w-full'>
                <button
                    onClick={action.actions ? toggleDropdown : action.callback}
                    className={`${btnColor} font-bold text-sm  shadow-lg w-full flex justify-center items-center px-5 py-4 rounded-lg my-2`}
                    style={{ whiteSpace: 'nowrap' }}
                >
                    {action.icon && <span className='mr-2'>{action.icon}</span>}
                    {action.label && action.label}
                </button>
                {isOpenDropDown && (
                    <div
                        ref={dropdownRef}
                        className='z-10 top-14 w-full absolute right-0 mt-2 rounded-lg shadow-lg bg-white divide-y divide-gray-100 transition duration-900 ease-in-out transform opacity-100 scale-y-100 hover:opacity-100 hover:scale-y-100'
                    >
                        <ul className='text-sm text-gray-700 dark:text-gray-200'>
                            {action.actions &&
                                action.actions.map((btn, btn_index) => {
                                    return (
                                        <li key={`btn-${btn_index}`}>
                                            <div
                                                className='flex items-center text-lg text-violet-1 font-semibold px-4 py-1.5 cursor-pointer transition duration-100 ease-in-out transform hover:bg-violet-100'
                                                onClick={() => {
                                                    btn.callback();
                                                    setIsOpenDropDown(false);
                                                }}
                                            >
                                                {btn.icon && btn.icon}
                                                <span className='ml-4 text-base'>
                                                    {btn.label && btn.label}
                                                </span>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default GenericBtnDropdown;
