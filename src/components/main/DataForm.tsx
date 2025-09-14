import { useState } from "react";
import { Search } from "lucide-react";
import { CardSkeleton } from "../skeleton/CardSkeleton.tsx";
import { Container } from "../shared/Container.tsx";
import { CardNotFound } from "./CardNotFound.tsx";
import { motion, AnimatePresence } from "framer-motion";
import {CardItem} from "./CardItem.tsx";

export const DataForm = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<string[]>([]);
    const [searched, setSearched] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            setSearched(false);
            return;
        }

        setLoading(true);
        setSearched(true);
        setTimeout(() => {
            const fakeData = ["Akhan", "Adilet", "Alibek", "Mango"];
            const filtered = fakeData.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );

            setResults(filtered);
            setLoading(false);
        }, 1000);
    };

    return (
        <Container>
            <div className="relative mx-auto w-full my-10">
                <motion.input
                    initial={{ opacity: 0, y: 10, }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    type="text"
                    placeholder="Поиск..."
                    value={query}
                    onChange={handleSearch}
                    className="w-full py-3 bg-white border-2 rounded-xl pl-4 pr-10 border-gray-200 focus:border-gray-400 focus:outline-none shadow-sm"
                />
                <motion.div
                    initial={{ opacity: 0, y: 0, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </motion.div>
            </div>

            <div className="mt-6 space-y-3 h-full">
                {loading && <CardSkeleton />}

                <AnimatePresence>
                    {!loading && searched && results.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CardNotFound />
                        </motion.div>
                    )}

                    {!loading &&
                        results.map((item, idx) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                            >
                                <CardItem name={item} />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </Container>
    );
};
