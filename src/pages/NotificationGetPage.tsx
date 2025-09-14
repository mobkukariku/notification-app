import Wallpaper from "../assets/Wallpaper.png";

import {PhoneHeader} from "../components/iphone/PhoneHeader.tsx";
import {PhoneTime} from "../components/iphone/PhoneTime.tsx";
import {PhoneNotifications} from "../components/iphone/PhoneNotifications.tsx";





export function NotificationGetPage() {


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
            <PhoneHeader />
            <PhoneTime />
            <PhoneNotifications />
        </div>
    );
}
