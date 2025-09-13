import {SettingsInfo} from "../components/SettingsInfo.tsx";
import {EventManageSettings} from "../components/EventManageSettings.tsx";
import {HumorControl} from "../components/HumorControl.tsx";
import {PushPromptSettings} from "../components/PushPromptSettings.tsx";

export default function SettingsPage() {
    return (
        <>
            <SettingsInfo />
            <EventManageSettings />
            <HumorControl />
            <PushPromptSettings/>
        </>
    )
}