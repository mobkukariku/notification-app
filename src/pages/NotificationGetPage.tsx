import { ChartNoAxesColumnIncreasing, WifiIcon } from "lucide-react";
import Wallpaper from "../assets/Wallpaper.png";
import Logo from "../assets/app-icon.svg";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";





export function NotificationGetPage() {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/apply");
    };
    let timer: number;
    let longPress = false;

    const handleTouchStart = () => {
        longPress = false;
        timer = window.setTimeout(() => {
            setExpanded(true);
            longPress = true;
        }, 500);
    };

    const handleTouchEnd = () => {
        clearTimeout(timer);
        if (!longPress) {
            handleClick();
        } else {
            setExpanded(false);
        }
    };

    const now = new Date();
    const dayOfWeek = now.toLocaleDateString("ru-RU", { weekday: "long" }); // день недели
    const date = now.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }); // 14 сентября
    const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }); // 14:02


    return (
        <div
            style={{
                backgroundImage: `url(${Wallpaper})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100dvh"
            }}
            className="px-4 text-white  py-3"
        >
            <div className="flex text-sm justify-between">
                <div>
                    Beeline
                </div>
                <div className="flex gap-2">
                    <ChartNoAxesColumnIncreasing width={16} height={16} />
                    <WifiIcon width={16} height={16} />
                </div>
            </div>
            <div className="text-center leading-[1] my-20">
                <p className="text-[18px]">{`${dayOfWeek}, ${date}`}</p>
                <p className="text-[100px] font-bold">{time}</p>
            </div>
            <div>
                <p className="text-xl">Центр уведомлений</p>
                <motion.div
                    className={"flex flex-col bg-black/30 rounded-3xl backdrop-blur-sm p-4 my-4 overflow-hidden"}
                    onMouseDown={handleTouchStart}
                    onMouseUp={handleTouchEnd}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onClick={handleClick}
                    animate={{
                        scale: expanded ? 1.02 : 1,
                        height: expanded ? 180 : 80
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <div className={"flex flex-col gap-4"}>
                        <div className={"flex items-center gap-3"}>
                            <img src={Logo} alt="logo" className={"w-13 h-13"}/>
                            <div>
                                <h2 className={"font-bold text-xl"}>BCC</h2>
                                <p>Новые что то тамммм!!!!</p>
                            </div>
                        </div>
                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-3 text-sm"
                                >
                                    🔥 Тут может быть дополнительный контент
                                    (например кнопки «Открыть», «Стереть»)
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
