import { Checkbox } from "primereact/checkbox";
import {useId, useState} from "react";
import "../../styles/custom.css";
import {PlusIcon, XIcon} from "lucide-react";

interface Parameter {
    id: string;
    label: string;
    checked: boolean;
}

export function ToneOfVoiceList() {
    const [parameters, setParameters] = useState<Parameter[]>([
        { id: "kindly", label: "Доброжелательно", checked: false },
        { id: "youAddressing", label: "Обращение на «вы» (с маленькой буквы)", checked: false },
        { id: "equality", label: "На равных, просто и по-человечески", checked: false },
        { id: "importantFirst", label: "Важное — в начало, без воды и канцеляризмов", checked: false },
        { id: "humor", label: "Лёгкий ненавязчивый юмор; эмодзи 0–1 по смыслу", checked: false },
        { id: "youthStyle", label: "Для молодёжи: меньше официоза, чуть живее", checked: false },
    ]);

    const [input, setInput] = useState<string>("");
    const newItemId = useId();
    const handleAdd = (label: string) => {
        const param = {
            id:  newItemId,
            label,
            checked: false,
        }
        setParameters([...parameters, param])
    }

    return (
        <div className="mx-auto bg-white my-5 border border-gray-300 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">Tone of Voice</h2>
            <ul className="space-y-2">
                {parameters.map((parameter) => (
                        <li className={"flex justify-between items-center border border-gray-300 rounded-lg p-3 bg-gray-50"}>
                           <div>
                               <Checkbox
                                   checked={parameter.checked}
                                   inputId={parameter.id}
                                   value={parameter.checked}
                                   onChange={() => setParameters(parameters.map((p) => (p.id === parameter.id ? { ...p, checked: !p.checked } : p)))}
                               />
                               <label htmlFor="importantFirst" className="ml-2">
                                   {parameter.label}
                               </label>
                           </div>
                            <XIcon width={15} className={"cursor-pointer"} onClick={() => setParameters(parameters.filter((p) => p.id !== parameter.id))} />
                        </li>
                    ))
                }
            </ul>
           <div className={"flex items-center gap-4 justify-center h-10 mt-10"}>
               <input onChange={((event) => setInput(event.target.value))} className={"w-full h-full bg-white border-2  rounded-xl pl-4 pr-10 border-gray-200 focus:border-gray-400 focus:outline-none "} />
               <button onClick={() => handleAdd(input)} className={"w-[30%] h-full flex justify-center items-center gap-1  bg-gray-500 rounded-lg text-white "}>
                   <PlusIcon width={17}  />
                   ADD
               </button>
           </div>
            <button
                className="w-full mt-10 bg-[#29B56E] text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer transition"
            >
                Сохранить
            </button>
        </div>
    );
}
