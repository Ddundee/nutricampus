"use client"
import React, { } from 'react'
import useFilter from '../_hooks/useFilter'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from '@/components/ui/label'


// type Props = {}

export default function Table({ }) {
    const { filteredData } = useFilter()
    // useEffect(() => {
    // }, [filteredData.length])
    return (
        <div className='p-2 min-h-screen flex flex-col'>
            <h2 id='find' className='text-center font-bold mb-12'>Find Food</h2>
            {/* <p className='text-center border mb-12 mt-[-24px]'>Find the perfect food for you!</p> */}
            {/* <p>{data.length}</p>
            <p>{filteredData.length}</p> */}
            <div className='flex gap-2 flex-wrap min-[420px]:flex-nowrap h-full [&>*]:rounded-md'>
                <div>
                    <div className='min-[420px]:w-full items-center flex justify-center'>
                        <div className='border rounded-md p-3'>
                            <div className='text-center mb-4 font-medium'>Filter</div>
                            <SelectTime />
                            {/* <Slider /> */}
                            <MacroSliders />
                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-4'>
                    {filteredData.map((food, index) => (
                        <div key={index} className='py-4 px-6 text-center w-auto flex flex-grow flex-col bg-yellow-200 rounded-md gap-4'>
                            <div>
                                <h3 className='text-xl font-bold'>{food.foodName}</h3>
                                <div>{food.restaurantName}</div>
                            </div>
                            <div className=''>
                                <div>Protein: {food.protein}</div>
                                <div>Carbs: {food.carbs}</div>
                                <div>Fat: {food.fat}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function SelectTime({ parentStateUpdater }: { parentStateUpdater?: () => void }) {
    const { change } = useFilter()
    return (
        <div className='my-3'>
            <Select onValueChange={(value) => {
                change({ type: "time", input: value as "breakfast" | "lunch" | "dinner" | "any" })
                if (parentStateUpdater) parentStateUpdater();
            }}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Meal Time" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

function MacroSliders() {
    const { protein, proteinLimit, carbs, carbsLimit, fat, fatLimit, time, change } = useFilter();
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <Label>Protein (grams)</Label>
                <Slider
                    disabled={time == null}
                    defaultValue={protein}
                    max={32}
                    step={1}
                    className={`w-[180px] ${time == null ? 'opacity-70' : ''}`}
                    onValueChange={(value) => change({ type: "protein", input: value })}
                />
                <div>Normal: [{protein[0]}, {protein[1]}]</div>
                <div>Limit: [{proteinLimit[0]}, {proteinLimit[1]}]</div>

            </div>
            <div>
                <Label>Carbs (grams)</Label>
                <Slider
                    disabled={time == null}
                    defaultValue={carbs}
                    max={56}
                    step={1}
                    className={`w-[180px] ${time == null ? 'opacity-70' : ''}`}
                    onValueChange={(value) => change({ type: "carbs", input: value })}
                />
                <div>Normal: [{carbs[0]}, {carbs[1]}]</div>
                <div>Limit: [{carbsLimit[0]}, {carbsLimit[1]}]</div>
            </div>
            <div>
                <Label>Fat (grams)</Label>
                <Slider
                    disabled={time == null}
                    defaultValue={fat}
                    max={66}
                    step={1}
                    className={`w-[180px] ${time == null ? 'opacity-70' : ''}`}
                    onValueChange={(value) => change({ type: "fat", input: value })}
                />
                <div>Normal: [{fat[0]}, {fat[1]}]</div>
                <div>Limit: [{fatLimit[0]}, {fatLimit[1]}]</div>
            </div>

        </div>

    )
}

