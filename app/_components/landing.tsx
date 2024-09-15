/* eslint-disable @next/next/no-img-element */
import React from 'react'
// type Props = {}

export default function Landing() {
    return (
        <div className="landing-page">
            <header>
                <div className="logo">
                    <img src="thelogo.png" alt="NutriCampus Logo" className="imgg" />
                </div>
                <h1 className="h11">NUTRICAMPUS</h1>
                <nav>
                    <a href="#">About Us</a>
                    <a href="#">How It Works</a>
                </nav>
            </header>
            <main>
                <h2>CAMPUS MEAL FINDER</h2>
                <h3>AT <span className="highlight">UMICHIGAN</span></h3>
                <p>
                    NutriCampus is an app that helps UMich students find meals
                    tailored to their macronutrient needs and time of day preferences,
                    making healthy eating easy and convenient
                </p>
                <a className='btn' href={"#find"}>Find My Meal</a>
            </main>
        </div>
    )
}