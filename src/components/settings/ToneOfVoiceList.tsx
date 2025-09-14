import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import "../../styles/custom.css";

export function ToneOfVoiceList() {
    const [kindly, setKindly] = useState<boolean>(false);
    const [youAddressing, setYouAddressing] = useState<boolean>(false);
    const [equality, setEquality] = useState<boolean>(false);
    const [importantFirst, setImportantFirst] = useState<boolean>(false);
    const [humor, setHumor] = useState<boolean>(false);
    const [youthStyle, setYouthStyle] = useState<boolean>(false);

    return (
        <div className="mx-auto bg-white my-5 border border-gray-300 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Tone of Voice</h2>
            <ul className="space-y-2">
                <li>
                    <Checkbox
                        inputId="kindly"
                        onChange={() => setKindly(!kindly)}
                        checked={kindly}
                        className={"custom-checkbox"}
                    />
                    <label htmlFor="kindly" className="ml-2">
                        Доброжелательно
                    </label>
                </li>

                <li>
                    <Checkbox
                        inputId="youAddressing"
                        onChange={() => setYouAddressing(!youAddressing)}
                        checked={youAddressing}
                        className={"custom-checkbox"}
                    />
                    <label htmlFor="youAddressing" className="ml-2">
                        Обращение на «вы» (с маленькой буквы)
                    </label>
                </li>

                <li>
                    <Checkbox
                        inputId="equality"
                        onChange={() => setEquality(!equality)}
                        checked={equality}
                    />
                    <label htmlFor="equality" className="ml-2">
                        На равных, просто и по-человечески
                    </label>
                </li>

                <li>
                    <Checkbox
                        inputId="importantFirst"
                        onChange={() => setImportantFirst(!importantFirst)}
                        checked={importantFirst}
                    />
                    <label htmlFor="importantFirst" className="ml-2">
                        Важное — в начало, без воды и канцеляризмов
                    </label>
                </li>

                <li>
                    <Checkbox
                        inputId="humor"
                        onChange={() => setHumor(!humor)}
                        checked={humor}
                    />
                    <label htmlFor="humor" className="ml-2">
                        Лёгкий ненавязчивый юмор; эмодзи 0–1 по смыслу
                    </label>
                </li>

                <li>
                    <Checkbox
                        inputId="youthStyle"
                        onChange={() => setYouthStyle(!youthStyle)}
                        checked={youthStyle}
                    />
                    <label htmlFor="youthStyle" className="ml-2">
                        Для молодёжи: меньше официоза, чуть живее
                    </label>
                </li>
            </ul>
            <button
                className="w-full mt-10 bg-[#29B56E] text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer transition"
            >
                Сохранить
            </button>
        </div>
    );
}
