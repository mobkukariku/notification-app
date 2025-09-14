import { Slider } from "primereact/slider";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../shared/Container.tsx";
import "../../styles/custom.css"

export function HumorControl() {
    const [humor, setHumor] = useState<number>(50);

    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                className="p-6 border w-full mx-auto border-gray-300 rounded-2xl bg-white">
                <h2 className="text-xl font-semibold mb-4">
                    Регулировка уровня юмора
                </h2>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700">Уровень юмора:</span>
                    <span className="font-bold text-green-600">{humor}%</span>
                </div>

                <Slider
                    value={humor}
                    onChange={(e) => setHumor(e.value as number)}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full custom-slider"
                />
                <button
                    className="w-full bg-[#29B56E] mt-10 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer transition"
                >
                    Сохранить
                </button>
            </motion.div>
        </Container>
    );
}
