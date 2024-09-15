type foodDataType = {
    restaurantName: string;
    foodName: string;
    protein: number;
    fat: number;
    carbs: number;
    time: string;
} | {
    restaurantName: string;
    foodName: string;
    protein: string;
    fat: string;
    carbs: string;
    time: string;
}
export default foodDataType