import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../assets/app-icon.svg";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function PhoneNotifications() {
    const [expanded, setExpanded] = useState(false);
    const navigate  = useNavigate();
    const handleClick = () => {
        if(expanded){
            navigate('/apply');
        }

        setExpanded(!expanded);


    }

    return (
        <div className="relative">
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setExpanded(false)}
                    />
                )}
            </AnimatePresence>

            <p className="text-xl relative z-20">Центр уведомлений</p>

            <motion.div
                className="relative z-20 flex flex-col bg-black/30 rounded-3xl backdrop-blur-sm p-4 my-4 overflow-hidden"
                onClick={handleClick}
                animate={{
                    scale: expanded ? 1.02 : 1,
                    height: expanded ? 180 : 80
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img src={Logo} alt="logo" className="w-13 h-13" />
                        <div>
                            <h2 className="font-bold text-xl">BCC</h2>
                            <p>Новые что-то тамммм!!!!</p>
                        </div>
                    </div>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="mt-3 text-sm"
                            >
                                🔥 Тут может быть дополнительный контент (например кнопки «Открыть», «Стереть»)
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
