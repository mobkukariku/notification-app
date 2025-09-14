import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { motion } from "framer-motion";


export function PushPromptSettings() {
    const [prompt, setPrompt] = useState<string>(
        "Привет"
    );

    const savePrompt = () => {
        console.log("Сохранён новый промпт:", prompt);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, delay: 0.6 }}
            className="p-6 border w-full mx-auto my-5 border-gray-300 rounded-2xl bg-white">
            <h2 className="text-xl font-semibold mb-4">
                Изменение промпта для пуш-уведомлений
            </h2>

            <label className="block text-gray-700 mb-2">
                Текст уведомления:
            </label>

            <InputTextarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                autoResize
                className="w-full mb-4"
            />

            <button
                onClick={savePrompt}
                className="w-full bg-[#29B56E] mt-2 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer transition"
            >
                Сохранить промпт
            </button>
        </motion.div>
    );
}
