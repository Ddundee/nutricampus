/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import foodData from "./data";
import Landing from "./_components/landing";
import Navbar from "./_components/navbar";
import Table from "./_components/table";

export default function Home() {
    return (
        <>
            <Landing />
            <Table />
        </>

    );
}
