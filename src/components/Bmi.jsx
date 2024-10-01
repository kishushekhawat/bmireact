import { useState } from "react";

function Bmi() {
    let [weight, setWeight] = useState('');
    let [height, setHeight] = useState('');
    let [bmiValue, setBmiValue] = useState('');

    function weightHandler(e) {

        setWeight(e.target.value)
    }
    function heightHandler(e) {
        setHeight(e.target.value)
    }
    function submitHandler() {
        let bmi = (weight) / (Math.pow(height * 0.01, 2));
        setBmiValue(bmi.toFixed(2))

    }

    function bmiRange(value) {
        let status = ""

        if (value == "") {
            return status;

        }
        if (value < 18.5) {
            status = "Underweight : " + value


            //yellow
        } else if (value > 25) {
            status = "Healthy weight: " + value

            return textColor
        } else if (value > 30) {
            status = "Overweight : " + value
            //orange
        }
        else if (value > 35) {
            status = "Obesity: " + value
            //red
        }
        else {
            status = "Severe Obesity: " + value
            //dark red
        }
        return status


    }


    return (
        <>

            <div className="mx-auto w-[500px] mt-32 text-center" >
                <h1 className="text-3xl font-bold">BMI</h1>
                <p className="mt-2 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id.</p>
                <div className="flex w-[50%] gap-2 mt-2">
                    <input onChange={weightHandler} value={weight} type="number" placeholder="Enter your weight" className="border p-2 rounded-xl" />
                    <input onChange={heightHandler} value={height} type="number" placeholder="Enter your height" className="border p-2 rounded-xl" />
                </div>
                <button onClick={submitHandler} className="border text-white bg-black px-3 py-2 mt-2 w-full m-4 rounded-lg">Submit</button>
            </div>
            <div className="text-center text-4xl font-bold">
                {
                    bmiRange(bmiValue)
                }
            </div>

        </>
    )
}
export default Bmi;
