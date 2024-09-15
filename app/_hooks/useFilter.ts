import { create } from 'zustand'
import foodDataType from '../_types/foodType'
import foodData from '../data'

export interface T {
    data: foodDataType[]
    filteredData: foodDataType[]

    protein: number[]
    fat: number[]
    carbs: number[]

    proteinLimit: number[]
    fatLimit: number[]
    carbsLimit: number[]

    time: "breakfast" | "lunch" | "dinner" | "any" | null
    change: ({ type, input }: {
        type: "protein" | "fat" | "carbs" | "time",
        input: number[] | "breakfast" | "lunch" | "dinner" | "any"
    }) => void
    // changeLimit: ({ type, input }: {
    //     type: "protein" | "fat" | "carbs",
    //     input: number[]
    // }) => void

    filterData: (typeChanged: "protein" | "fat" | "carbs" | "time") => void
}

const useFilter = create<T>()((set, get) => ({
    data: foodData.map((food) => ({ ...food, protein: Number(food.protein), fat: Number(food.fat), carbs: Number(food.carbs) })),
    filteredData: foodData.map((food) => ({ ...food, protein: Number(food.protein), fat: Number(food.fat), carbs: Number(food.carbs) })),
    protein: [0, 32],
    fat: [0, 66],
    carbs: [0, 56],
    proteinLimit: [0, 32],
    fatLimit: [0, 66],
    carbsLimit: [0, 56],
    time: null,
    change: ({ type, input }) => {
        set((state) => ({
            ...state,
            [type]: input
        }))
        get().filterData(type)
    },
    filterData: (typeChanged) => {
        const { protein, fat, carbs, time, data } = get(); // get the latest state
        const filteredData: foodDataType[] = data.filter((food) => (
            (Number(food.protein) >= protein[0] && Number(food.protein) <= protein[1]) &&
            (Number(food.fat) >= fat[0] && Number(food.fat) <= fat[1]) &&
            (Number(food.carbs) >= carbs[0] && Number(food.carbs) <= carbs[1]) &&
            (time === "any" || time == null || food.time === time)
        ));

        let newProtein = [Number(protein[0]), Number(protein[1])];
        let newFat = [Number(fat[0]), Number(fat[1])];
        let newCarbs = [Number(carbs[0]), Number(carbs[1])];

        filteredData.forEach((food) => {
            if (typeChanged !== 'protein') {
                const proteinValue = typeof food.protein === 'string' ? parseInt(food.protein) : food.protein;
                newProtein = [
                    Math.min(newProtein[0], proteinValue),
                    Math.max(newProtein[1], proteinValue),
                ];
            }
            if (typeChanged !== 'fat') {
                const fatValue = typeof food.fat === 'string' ? parseInt(food.fat) : food.fat;
                newFat = [
                    Math.min(newFat[0], fatValue),
                    Math.max(newFat[1], fatValue),
                ];
            }
            if (typeChanged !== 'carbs') {
                const carbsValue = typeof food.carbs === 'string' ? parseInt(food.carbs) : food.carbs;
                newCarbs = [
                    Math.min(newCarbs[0], carbsValue),
                    Math.max(newCarbs[1], carbsValue),
                ];
            }
        });
        // console.log("NEW SHIT", newProtein, newFat, newCarbs)

        set(() => ({
            filteredData,
            proteinLimit: newProtein,
            fatLimit: newFat,
            carbsLimit: newCarbs,
        }));
    },



}))

export default useFilter