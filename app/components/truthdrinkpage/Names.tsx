'use client';

import { useState } from 'react';

type NamesProps = {
    onSendData: (data: string) => void;
    closeModal: () => void;
    names: string[];
};

const Names: React.FC<NamesProps> = ({ onSendData, closeModal, names }) => {
    const [name, setName] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSendData(name);
        setName('');
    };

    return (
        <div className="absolute bg-white shadow-lg rounded-lg w-96 p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-bold">Add Names</p>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                    Close
                </button>
            </div>
            
            <div className="max-h-60 overflow-y-auto mb-4">
                {names.map((name, index) => (
                    <p key={index} className="py-1 border-b last:border-b-0">{name}</p>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <label className="flex flex-col">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 border rounded-md"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Add Name
                </button>
            </form>
        </div>
    );
};

export default Names;
