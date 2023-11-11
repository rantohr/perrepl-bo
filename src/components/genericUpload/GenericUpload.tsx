import { FC, useState, ChangeEvent, useCallback, useRef } from 'react';
import { BiSolidImageAdd } from 'react-icons/bi'

interface GenericUploadProps {
    buttonText?: string
    icon?: any
}

const GenericUpload: FC<GenericUploadProps> = ({ buttonText, icon }) => {
    const [selectedImages, setSelectedImages] = useState<(string | File)[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
            setSelectedImages((prevImages) => [...prevImages, ...newImages]);
            console.log(selectedImages)
        }
    }, []);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                style={{ display: 'none' }}
                ref={inputRef}
            />
            <div className='flex-wrap flex mt-2'>
                {selectedImages.map((image, index) =>
                    typeof image === 'string' ? (
                        <img
                            key={index}
                            src={image}
                            alt={`Uploaded ${index}`}
                            style={{ width: '80px', height: '80px', margin: '5px' }}
                            className="rounded-xl"
                        />
                    ) : null
                )}

                <label>
                    <button className=' rounded-xl border-violet-pink border-dashed border-2 text-violet-pink flex items-center justify-center' onClick={handleClick} style={{ width: 'auto', height: '80px', margin: '5px', minWidth: '80px'}}>
                        {icon || <BiSolidImageAdd className=" text-xl"/>}
                        {buttonText && buttonText}
                    </button>
                </label>
            </div>
        </div>
    );
};

export default GenericUpload