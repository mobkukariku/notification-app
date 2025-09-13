import { motion } from "framer-motion";
import { Container } from "./Container.tsx";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export function SettingsInfo() {
    const text ="Настройте уведомления под себя";
    return (
        <Container className={" mt-20"}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl text-bold  text-center leading-relaxed text-gray-800"
            >
                {text.split(" ").map((word, i) => (
                    <motion.span
                        key={i}
                        variants={wordVariants}
                        className="inline-block mr-1"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </Container>
    );
};
