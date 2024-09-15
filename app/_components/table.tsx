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
    const { data, filteredData } = useFilter()
    // useEffect(() => {
    // }, [filteredData.length])
    return (
        <div>
            <h2>Find Food</h2>
            <p>{data.length}</p>
            <p>{filteredData.length}</p>
            <div>
                <SelectTime />
                {/* <Slider /> */}
                <MacroSliders />
            </div>
        </div>
    )
}

function SelectTime({ parentStateUpdater }: { parentStateUpdater?: () => void }) {
    const { change } = useFilter()
    return (
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
    )
}

function MacroSliders() {
    const { protein, proteinLimit, carbs, carbsLimit, fat, fatLimit, time, change } = useFilter();
    return (
        <div id='find' className='min-h-screen max-w-screen'>
            <div>
                <Label>Protein (grams)</Label>
                <Slider
                    disabled={time == null}
                    defaultValue={protein}
                    max={32}
                    step={1}
                    className={`w-[120px] ${time == null ? 'opacity-70' : ''}`}
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
                    className={`w-[240px] ${time == null ? 'opacity-70' : ''}`}
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
                    className={`w-[240px] ${time == null ? 'opacity-70' : ''}`}
                    onValueChange={(value) => change({ type: "fat", input: value })}
                />
                <div>Normal: [{fat[0]}, {fat[1]}]</div>
                <div>Limit: [{fatLimit[0]}, {fatLimit[1]}]</div>
            </div>

        </div>

    )
}

